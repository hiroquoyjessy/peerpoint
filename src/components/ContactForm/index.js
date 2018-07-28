import { reduxForm } from "redux-form";

import Contact from "./ContactForm";

const validate = fields => {
  const errors = {};

  if (!fields.businessLegalName) {
    errors.businessLegalName = "Please specify a Business Legal Name";
  }

  if (fields.businessLegalName && fields.businessLegalName.length < 3) {
    errors.businessLegalName = "Business Legal Name too short";
  }
  console.log(errors);
  return errors;
};

const ContactForm = reduxForm({
  form: "contact",
  validate
})(Contact);

export default ContactForm;
