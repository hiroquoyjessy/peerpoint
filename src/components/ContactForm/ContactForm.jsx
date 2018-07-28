import React, { Component } from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { renderField } from "../../forms/render";

import "./ContactForm.css";

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
});

class ContactForm extends Component {
  onSubmit(values) {
    console.log(values);
  }

  renderBusinessNames() {
    return (
      <div>
        <Field
          name="businessLegalName"
          component={renderField}
          type="text"
          placeholder="Business Legal Name"
          label="Business Legal Name"
        />
        <Field
          name="businessDBAName"
          component={renderField}
          type="text"
          placeholder="Business DBA Name"
          label="Business DBA Name"
        />
      </div>
    );
  }

  renderAddress() {
    return (
      <div>
        <Field
          name="adress"
          component={renderField}
          type="text"
          placeholder="Address"
          label="Address"
        />
        <Field
          name="addressExtra"
          component={renderField}
          type="text"
          placeholder="Apt. #, Floor 3..."
          label="Suite/Floor"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card>
        <CardContent>
          <h1>CONTACT</h1>
        </CardContent>
        <CardContent>
          <form name="contact" onSubmit={handleSubmit(this.onSubmit)}>
            {this.renderBusinessNames()}
            {this.renderAddress()}

            <Button
              variant="contained"
              size="large"
              style={{ color: "white", marginTop: "15px" }}
              className={classNames(this.props.classes.cssRoot)}
              component="button"
              type="submit"
            >
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContactForm);
