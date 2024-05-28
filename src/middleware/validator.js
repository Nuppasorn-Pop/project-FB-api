const { registerSchema } = require("../validator/auth-validator");

exports.registerValidator = (req, res, next) => {
  const { value, error } = registerSchema.validate(req.body);
  console.log("test");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
};
