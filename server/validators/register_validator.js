const joi = require("@hapi/joi");

const register_schema = joi.object({
  username: joi.string().min(3).required(),
  email: joi.string().min(6).required().email(),
  password: joi.string().min(3).required(),
});

module.exports.register_schema = register_schema;
