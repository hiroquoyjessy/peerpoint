import { reduxForm } from "redux-form";

import Contact from "./ContactForm";

const validate = fields => {
  const errors = {};
  console.log(fields);
  
  if (fields.businessLegalName && fields.businessLegalName.length < 3) {
    errors.businessLegalName = "Business Legal Name too short";
  }

  if (!fields.companyState) {
    errors.companyState = "Select a state";
  }

  return errors;
};

const ContactForm = reduxForm({
  form: "contact",
  validate
})(Contact);

export default ContactForm;
