const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.setCall = async (req, res, next) => {
  try {
    // console.log(req.params.room);
    // res.render("room", { roomId: req.params.room });
    return res.json({
      roomId: req.params.room,
    });

    // const userId = req.params.id;
    // const avatarImage = req.body.image;
    // const userData = await User.findByIdAndUpdate(userId, {
    //   isAvatarImageSet: true,
    //   avatarImage,
    // });
    // return res.json({
    //   isSet: userData.isAvatarImageSet,
    //   image: userData.avatarImage,
    // });
  } catch (e) {
    next(e);
  }
};
