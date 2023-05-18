const Joi = require("joi");
const createValidator = require("./createValidator");

const projectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  tech: Joi.array(),
  image: Joi.image(),
  is_favorite: Joi.boolean(),
});

module.exports = createValidator(projectSchema);
