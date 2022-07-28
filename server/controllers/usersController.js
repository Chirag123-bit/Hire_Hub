const User = require("../model/userModel");
const Company = require("../model/CompanyModel");
const bcrypt = require("bcrypt");
const UserVerification = require("../model/UserVerification");
const nodemailer = require("nodemailer");
const multer = require("multer");

const userVerification = require("../model/UserVerification");
require("dotenv").config();
const path = require("path");
const { register_schema } = require("../validators/register_validator");
const jwt = require("jsonwebtoken");
const generateToken = require("../config/generateToken");
const Event = require("../model/EventModel");
const Todo = require("../model/TodoModels");

// Node Mail Service Transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

const storage = multer.diskStorage({
  destination: "./uploads/images/profile",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  },
});

const uploadProfileImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
      return cb(new Error("Please upload an image file"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

//upload profile image
module.exports.changeProfileImage = async (req, res, next) => {
  uploadProfileImage.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    } else {
      console.log("Uploaded");
    }
    try {
      const userId = req.user._id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      console.log(req.file);
      user.avatarImage = req.file.path;
      await user.save();
      const updatedUser = await User.findById(userId);
      res.status(200).json({
        message: "Profile image uploaded successfully",
        user: updatedUser,
      });
    } catch (e) {
      console.log(e);
    }
  });
};

//update password
module.exports.updatePassword = async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.password;
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(500).json({
      message: "Old password is incorrect",
    });
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  res.status(200).json({
    message: "Password updated successfully",
  });
};

// Verifying Connection
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Verification Service Initialised");
  }
});

module.exports.resendVerification = async (req, res) => {
  const _id = req.body["id"];
  const email = req.body["email"];
  User.findOne({ _id })
    .then((user) => {
      if (!user.isVerified) {
        const code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);

        const uniqueString = code + _id;
        UserVerification.updateOne(
          { userId: _id },
          { uniqueString: uniqueString }
        );

        const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: email,
          subject: "Verify Your Email",
          html: `<p>Verify your email address to complete signin process.</p>
      <p> This link expires in <b>6 hours</b> </p>
      <p> Your Unique code is <b>${code}</b> </p>
    `,
        };
        transporter
          .sendMail(mailOptions)
          .then(() => {
            return res.json({
              msg: "Verification Email Sent Again",
              status: true,
            });
          })
          .catch((error) => {
            console.log(error);
            return res.json({
              msg: "Error re-sending verifiation mail",
              status: false,
            });
          });
      }
    })
    .catch((e) => {
      console.log(e);
      return res.json({
        msg: "Error Finding user",
        status: false,
      });
    });
};
module.exports.sendVerificationEmail = async (req, res) => {
  const _id = req.body["id"];
  const email = req.body["email"];
  User.findOne({ _id })
    .then((user) => {
      console.log(_id);
      if (!user.isVerified) {
        const code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);

        const uniqueString = code + _id;

        UserVerification.findOne({ userId: _id })
          .then((reUser) => {
            if (reUser) {
              return res.json({
                msg: "Please confirm your email address to continue",
                status: true,
              });
            } else {
              const mailOptions = {
                from: process.env.AUTH_EMAIL,
                to: email,
                subject: "Verify Your Email",
                html: `<p>Verify your email address to complete signin process.</p>
        <p> This link expires in <b>6 hours</b> </p>
        <p> Your Unique code is <b>${code}</b> </p>
         `,
              };

              const saltRounds = 10;
              bcrypt
                .hash(uniqueString, saltRounds)
                .then((hashedUniqueString) => {
                  const newVerification = new UserVerification({
                    userId: _id,
                    uniqueString: hashedUniqueString,
                    createdAt: Date.now(),
                    expiresAt: Date.now() + 21600000,
                  });
                  newVerification
                    .save()
                    .then(() => {
                      transporter
                        .sendMail(mailOptions)
                        .then(() => {
                          return res.json({
                            msg: "Verification Email Sent",
                            status: true,
                          });
                        })
                        .catch((error) => {
                          console.log(error);
                          return res.json({
                            msg: "Error sending verifiation mail",
                            status: false,
                          });
                        });
                    })
                    .catch((e) => {
                      console.log(e);
                      return res.json({
                        msg: "Failed to save unique token",
                        status: false,
                      });
                    });
                })
                .catch((e) => {
                  console.log(e);
                  return res.json({
                    msg: "Failed to hash token",
                    status: false,
                  });
                });
            }
          })
          .catch((e) => {
            console.log("Here");
          });
      }
    })
    .catch((e) => {
      console.log(e);
      return res.json({
        msg: "User not found in database",
        status: false,
      });
    });
};

module.exports.verify = (req, res) => {
  let { userId, uniqueString } = req.params;

  userVerification
    .find({ userId })
    .then((result) => {
      if (result.length > 0) {
        const { expiresAt } = result[0];
        const hashedUniqueString = result[0].uniqueString;
        if (expiresAt < Date.now()) {
          userVerification
            .deleteOne({ userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then(() => {
                  let message = "The link has expired. Please Sign up again";
                  return res.json({
                    msg: message,
                    status: false,
                  });
                })
                .catch((error) => {
                  let message =
                    "An error occured while deleting user with expired token";
                  return res.json({
                    msg: message,
                    status: false,
                  });
                });
            })
            .catch((error) => {
              console.log(error);
              let message = "Error deleting expired token";
              return res.json({
                msg: message,
                status: false,
              });
            });
        } else {
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                User.updateOne({ _id: userId }, { isVerified: true })
                  .then(() => {
                    UserVerification.deleteOne({ userId })
                      .then(() => {
                        let message = "Successfully Verified the account";
                        return res.json({
                          msg: message,
                          status: "completed",
                        });
                      })
                      .catch((e) => {
                        let message =
                          "An error occured while deleting user verification record";
                        return res.json({
                          msg: message,
                          status: false,
                        });
                      });
                  })
                  .catch((e) => {
                    let message = "An error occured while updating records";
                    return res.json({
                      msg: message,
                      status: false,
                    });
                  });
              } else {
                let message = "Incorrect verification code";
                return res.json({
                  msg: message,
                  status: false,
                });
              }
            })
            .catch((error) => {
              let message = "An error occured while comparing unique strings";
              return res.json({
                msg: message,
                status: false,
              });
            });
        }
      } else {
        let message = "Account Already Verified";
        return res.json({
          msg: message,
          status: "completed",
        });
      }
    })
    .catch((e) => {
      console.log(e);
      let message = "An error occured while checking validation of user";
      return res.json({
        msg: message,
        status: false,
      });
    });
};

module.exports.verified = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/verified.html"));
};

module.exports.codeSent = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/code_sent.html"));
};

module.exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      phone,
      email,
      type,
      username,
      password,
      avatar,
      title,
      skills,
      sector,
      summary,
      workSet,
      educationSet,
      cname,
      csector,
      country,
      region,
      cabout,
      cdesc,
    } = req.body;
    console.log(req.body);
    const usernameCheck = await User.findOne({ username });

    //Username and Email Validation
    if (usernameCheck) {
      print("Username already exists. Please choose another username");
      return res.status(500).json({
        msg: "Username already used",
        status: false,
      });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      console.log("Email already exists. Please choose another email");
      return res.status(500).json({
        msg: "Email already used",
        status: false,
      });
    }

    const companyNameCheck = await Company.findOne({ name: cname });

    // Hashing the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating new user based on user's input
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      phone: phone,
      email: email,
      type: type,
      username: username,
      avatar: avatar,

      professional: {
        title: title,
        sector: sector,
        skills: skills,
        summary: summary,
      },
      additional: {
        education: educationSet.map((edu) => ({
          degree: edu.etitle,
          college: edu.ecollege,
          startDate: edu.estart,
          endDate: edu.eend,
        })),
        experience: workSet.map((work) => ({
          job_title: work.wtitle,
          company: work.wcompany,
          company_location: work.wlocation,
          work_type: work.wtype,
          startDate: work.wstart,
          endDate: work.wend,
        })),
      },

      password: hashedPassword,
      isVerified: false,
    });

    // Saving new user
    user
      .save()
      .then((result) => {
        if (result.type === "Company") {
          if (companyNameCheck) {
            console.log(
              "Company name already exists. Please choose another name Delete"
            );
            result.deleteOne();
            return res.status(500).json({
              msg: "Company Name already exists",
              status: false,
            });
          }
          const company = new Company({
            name: cname,
            sector: csector,
            country: country,
            region: region,
            about: cabout,
            desc: cdesc,
            phone: phone,
          });
          company
            .save()
            .then((company) => {
              result
                .updateOne({ company: company._id })
                .then(() => {
                  return res.status(200).json({
                    status: true,
                    user: result,
                    company: company,
                    token: generateToken(result._id),
                    msg: "Successfully created account",
                  });
                })
                .catch((e) => {
                  console.log(e);
                  result.deleteOne();
                  company.deleteOne();
                  return res.status(500).json({
                    status: false,
                    msg: "Failed to bind user info with company",
                  });
                });
            })
            .catch((e) => {
              console.log(e);
              result.deleteOne();
              company.deleteOne();
              return res.status(500).json({
                status: false,
                msg: "Failed to create account",
              });
            });
        } else {
          return res.status(200).json({
            status: true,
            user: result,
            token: generateToken(result._id),
            msg: "Successfully created account",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          status: false,
          message: "An Error Occured",
        });
      });
    delete user.password; // Delete unsecured password
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    var { username, password } = req.body;
    var user = await User.findOne({ username });
    if (!user) {
      return res
        .status(500)
        .json({ msg: "Incorrect Username or Password", status: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid");
      return res
        .status(500)
        .json({ msg: "Incorrect Username or Password", status: false });
    }

    delete user.password;
    if (user.type === "Company") {
      const company = await Company.findOne({ _id: user.company });

      return res.status(200).json({
        status: true,
        user,
        company,
        token: generateToken(user._id),
      });
    }
    return res.status(200).json({
      status: true,
      user,
      token: generateToken(user._id),
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (e) {
    next(e);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (e) {
    next(e);
  }
};

//validate that the user has not applied to the job before
module.exports.applyJob = async (req, res, next) => {
  try {
    const { jobId, userId } = req.query;
    const user = await User.findById(userId);
    user.appliedJobs.forEach((job) => {
      if (job.job.toString() === jobId) {
        return res.json({
          status: false,
          msg: "You have already applied to this job",
          data: job,
        });
      }
    });
    return res.json({
      status: true,
      msg: "You can apply to this job",
    });
  } catch (e) {
    // next(e);
  }
};

module.exports.allUsers = async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { firstName: { $regex: req.query.search, $options: "i" } },
          { lastName: { $regex: req.query.search, $options: "i" } },
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .select(
      "-password -__v -isVerified -isAvatarImageSet -additional -appliedJobs -todos -professional -events -savedJobs -favouriteJobs"
    );
  res.send(users);
};
module.exports.allUsersApp = async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { firstName: { $regex: req.query.search, $options: "i" } },
          { lastName: { $regex: req.query.search, $options: "i" } },
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .select(
      "-password -__v -isVerified -isAvatarImageSet  -appliedJobs -todos  -events -savedJobs -favouriteJobs"
    );
  return res.json({ data: users });
};

module.exports.addEvent = async (req, res, next) => {
  try {
    const { title, note, color, date, startTime, endTime, remind, repeat } =
      req.body;
    const user = req.user;
    const event = new Event({
      title,
      note,
      color,
      date,
      startTime,
      endTime,
      remind,
      repeat,
    });
    await event.save();
    user.events.push(event);
    await user.save();
    return res.json({
      status: true,
      msg: "Event added successfully",
      event,
    });
  } catch (e) {
    next(e);
  }
};

module.exports.addTodos = async (req, res, next) => {
  try {
    const { title, note, color, isCompleted } = req.body;

    const user = req.user;
    const todo = new Todo({
      title,
      note,
      color,
      isCompleted,
    });
    await todo.save();
    user.todos.push(todo);
    await user.save();
    return res.json({
      status: true,
      msg: "Todo added successfully",
      todo,
    });
  } catch (e) {
    next(e);
  }
};

//mark event completed
module.exports.markEventCompleted = async (req, res, next) => {
  try {
    const { eventId } = req.body;
    console.log(eventId);
    const user = req.user;
    const event = await Event.findById(eventId);
    event.isCompleted = true;
    await event.save();
    return res.json({
      status: true,
      msg: "Event marked completed successfully",
      event,
    });
  } catch (e) {
    next(e);
  }
};

//mark todo completed
module.exports.markTodoCompleted = async (req, res, next) => {
  try {
    const { todoId } = req.body;
    const user = req.user;
    const todo = await Todo.findById(todoId);
    todo.isCompleted = true;
    await todo.save();
    return res.json({
      status: true,
      msg: "Todo marked completed successfully",
      todo,
    });
  } catch (e) {
    next(e);
  }
};
//update certain fields of the user
module.exports.updateUser = async (req, res, next) => {
  const userId = req.user._id;
  var user;
  try {
    if (req.body.title) {
      user = await User.findByIdAndUpdate(userId, {
        $set: {
          "professional.title": req.body.title,
          "professional.sector": req.body.sector,
          "professional.skills": req.body.skills,
        },
      });
    } else if (req.body.education) {
      user = await User.findByIdAndUpdate(userId, {
        $set: {
          "additional.0.education": req.body.education,
        },
      });
    } else if (req.body.works) {
      user = await User.findByIdAndUpdate(userId, {
        $set: {
          "additional.0.experience": req.body.works,
        },
      });
    } else {
      user = await User.findOneAndUpdate({ _id: userId }, { $set: req.body });
    }
    console.log(user);
    return res.status(200).json({
      status: true,
      user,
    });
  } catch (e) {
    console.log(e);
  }
  return res.status(500).json({
    status: false,
  });
};

//updating user details
module.exports.updateUserDetails = async (req, res, next) => {
  const userId = req.user._id;

  var user;
  try {
    user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          gender: req.body.gender,
          "professional.title": req.body.title,
          "professional.sector": req.body.sector,
          "professional.skills": req.body.skills,
          "professional.summary": req.body.summary,
          "additional.0.education": req.body.educationSet.map((edu) => ({
            degree: edu.etitle,
            college: edu.ecollege,
            startDate: edu.estart,
            endDate: edu.eend,
          })),
          "additional.0.experience": req.body.workSet.map((work) => ({
            job_title: work.wtitle,
            company: work.wcompany,
            company_location: work.wlocation,
            work_type: work.wtype,
            startDate: work.wstart,
            endDate: work.wend,
          })),
        },
      }
    );
    const updatedDetails = await User.findById(userId);
    return res.status(200).json({
      status: true,
      user: updatedDetails,
    });
  } catch (e) {
    console.log(e);
  }
  return res.status(500).json({
    status: false,
  });
};
module.exports.updateCompanyDetails = async (req, res, next) => {
  const companyId = req.user.company;
  console.log(companyId);
  try {
    user = await Company.findOneAndUpdate(
      { _id: companyId },
      {
        $set: {
          name: req.body.cname,
          sector: req.body.csector,
          country: req.body.country,
          region: req.body.region,
          phone: req.body.phone,
          about: req.body.cabout,
          desc: req.body.cdesc,
        },
      }
    );
    const updatedDetails = await Company.find({ _id: companyId });
    console.log(updatedDetails);
    return res.status(200).json({
      company: true,
      user: updatedDetails,
    });
  } catch (e) {
    console.log(e);
  }
  return res.status(500).json({
    status: false,
  });
};

//get apllied jobs along with the status of the job
module.exports.getAppliedJobsWear = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const appliedJobs = await User.findById(userId)
      .populate({
        path: "appliedJobs.job",
        model: "Job",
        select: "title -_id",
      })
      .select("appliedJobs");
    // .populate("appliedJobs.job")
    // .select(
    //   "appliedJobs.job.title appliedJobs.appliedDate appliedJobs.status"
    // );

    return res.status(200).json({
      status: true,
      data: appliedJobs,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
    });
  }
};
