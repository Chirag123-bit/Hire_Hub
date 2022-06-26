const User = require("../model/userModel");
const Company = require("../model/CompanyModel");
const bcrypt = require("bcrypt");
const UserVerification = require("../model/UserVerification");
const nodemailer = require("nodemailer");

const userVerification = require("../model/UserVerification");
require("dotenv").config();
const path = require("path");
const { register_schema } = require("../validators/register_validator");
const jwt = require("jsonwebtoken");
const generateToken = require("../config/generateToken");

// Node Mail Service Transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

// Verifying Connection
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Verification Service Started");
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
        let message = "Successfully Verified the account";
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
      c_name,
      csector,
      country,
      region,
      cabout,
      cdesc,
    } = req.body;
    console.log(req.body);
    const usernameCheck = await User.findOne({ username });

    //Username and Email Validation
    if (usernameCheck)
      return res.status(500).json({
        msg: "Username already used",
        status: false,
      });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.status(500).json({
        msg: "Email already used",
        status: false,
      });

    const companyNameCheck = await Company.findOne({ name: c_name });

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
            result.deleteOne();
            return res.status(500).json({
              msg: "Company Name already exists",
              status: false,
            });
          }
          const company = new Company({
            name: c_name,
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
    const user = await User.findOne({ username });
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

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
};
