const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateLaborTypeInput(data) {
  let errors = {};

  data.laborType = !isEmpty(data) ? data : "";

  if (!Validator.isLength(data, { min: 3, max: 12 })) {
    errors.laborType = "Labor types must be between 3 and 12 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
