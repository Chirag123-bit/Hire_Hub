const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const UserVerification = require("../model/UserVerification");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const userVerification = require("../model/UserVerification");
require("dotenv").config();
const path = require("path");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Verification Service Started");
  }
});

const sendVerificationEmail = ({ _id, email }, res) => {
  const currentUrl = "http://localhost:5000";
  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify Your Email",
    html: `<p>Verify your email address to complete signin process.</p> 
      <p> This link expires in <b>6 hours</b> </p>

      <p> Press <a href=${
        currentUrl + "user/verify/" + _id + "/" + uniqueString
      }> Here </a> to verify your email  </p>
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
              res.json({
                status: "Pending",
                message: "Verification Email Sent",
              });
            })
            .catch((error) => {
              console.log(error);
              res.json({
                status: "Failed",
                message: "An Error Occured",
              });
            });
        })
        .catch((e) => {
          console.log(e);
          res.json({
            status: "Failed",
            message: "An Error Occured",
          });
        });
    })
    .catch((e) => {
      console.log(e);
      res.json({
        status: "Failed",
        message: "An Error Occured",
      });
    });
};

module.exports.verify = (req, res) => {
  let { userId, uniqueString } = req.params;

  userVerification
    .find(userId)
    .then((result) => {
      if (result.len > 0) {
        const { expiresAt } = result[0];
        const hashedUniqueString = result[0].uniqueString;
        if (expiresAt < Date.now()) {
          userVerification
            .deleteOne({ userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then(() => {
                  let message = "The link has expired. Please Sign up again";
                  res.redirect(`/user/verified/error=true&message=${message}`);
                })
                .catch((error) => {
                  let message =
                    "An error occured while deliting user with expired token";
                  res.redirect(`/user/verified/error=true&message=${message}`);
                });
            })
            .catch((error) => {
              console.log(error);
              let message = "Error deleting expired token";
              res.redirect(`/user/verified/error=true&message=${message}`);
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
                        res.sendFile(
                          path.join(__dirname, "./../views/verified.html")
                        );
                      })
                      .catch((e) => {
                        let message =
                          "An error occured while deleting user verification record";
                        res.redirect(
                          `/user/verified/error=true&message=${message}`
                        );
                      });
                  })
                  .catch((e) => {
                    let message = "An error occured while updating records";
                    res.redirect(
                      `/user/verified/error=true&message=${message}`
                    );
                  });
              } else {
                let message = "Incorrect verification details";
                res.redirect(`/user/verified/error=true&message=${message}`);
              }
            })
            .catch((error) => {
              let message = "An error occured while comparing unique strings";
              res.redirect(`/user/verified/error=true&message=${message}`);
            });
        }
      } else {
        let message = "Account Record does not exist";
        res.redirect(`/user/verified/error=true&message=${message}`);
      }
    })
    .catch((e) => {
      console.log(e);
      let message = "An error occured while checking validation of user";
      res.redirect(`/user/verified/error=true&message=${message}`);
    });
};

module.exports.verified = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/verified.html"));
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      isVerified: false,
    })
      .then((result) => {
        sendVerificationEmail(result, res);
        return res.json({ status: true, user });
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "Failed",
          message: "An Error Occured",
        });
      });
    delete user.password;
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    var { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid");
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }
    delete user.password;
    return res.json({
      status: true,
      user,
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
