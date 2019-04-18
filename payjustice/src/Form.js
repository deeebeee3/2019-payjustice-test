import React from "react";
import FormErrors from "./FormErrors";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    consent: false,

    formErrors: { email: "", dob: "" },
    emailValid: false,
    dobValid: false,
    formValid: false
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  fieldChanged = event => {
    event.preventDefault();
    const name = event.target.name.toString();
    const value = event.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    //console.log("reached");
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let dobValid = this.state.dobValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "dob":
        dobValid = value.length >= 6;
        fieldValidationErrors.dob = dobValid ? "" : " is too short";
        break;
      default:
        break;
    }

    this.setState(
      { formErrors: fieldValidationErrors, emailValid: emailValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "error";
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
            <br />
          </div>

          <div className="field">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.fieldChanged}
              name="firstName"
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.fieldChanged}
              name="lastName"
            />
          </div>

          <div
            className={`field ${this.errorClass(this.state.formErrors.email)}`}
          >
            <label htmlFor="email">Email Address: </label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.fieldChanged}
              name="email"
            />
          </div>

          <div
            className={`field ${this.errorClass(this.state.formErrors.dob)}`}
          >
            <label htmlFor="dob">Date of Birth: </label>
            <input
              type="text"
              value={this.state.dob}
              onChange={this.fieldChanged}
              name="dob"
            />
          </div>




          {/* <div
            className={`field ${this.errorClass(this.state.formErrors.consent)}`}
          >
            <label htmlFor="consent">GDPR Consent - I aggree to have my data stored: </label>
            <input
              type="checkbox"
              value={this.state.consent}
            //   onChange={this.fieldChanged}
              name="consent"
            />
            </div> */}





          

          <button
            type="submit"
            className="ui primary button"
            disabled={!this.state.formValid}
          >
            Submit Form
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
