import React, { Component } from "react";
import { Field } from "redux-form";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { states, legalEntity, businessLocation } from './constants';
import { renderField, renderSelect } from "../../forms/render";

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

  onSubmit = (values) => {
    this.props.dataAggregate(values);
  }

  renderBusinessNames() {
    return (
      <Grid container spacing={32}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessLegalName"
            component={renderField}
            type="text"
            label="Business Legal Name"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessDBAName"
            component={renderField}
            type="text"
            label="Business DBA Name"
          />
        </Grid>
      </Grid>
    );
  }

  renderBusinessAddress() {
    return (
      <Grid container spacing={32}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Field
            name="companyAddress"
            component={renderField}
            type="text"
            label="Address"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Field
            name="addressExtra"
            component={renderField}
            type="text"
            label="Suite/Floor"
            fieldNotRequired
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Field
            name="companyCity"
            component={renderField}
            type="text"
            label="City"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Field
            name="companyState"
            options={states}
            component={renderSelect}
            label="State"
            onChangeHandler={(e) => this.props.dataAggregate({ companyState: e.target.value })}
            initialValue={this.props.companyState || ''}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Field
            name="companyZip"
            component={renderField}
            type="text"
            label="Zip"
          />
        </Grid>
      </Grid>
    );
  }

  renderBusinessContact() {
    return (
      <Grid container spacing={32} >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessPhone"
            component={renderField}
            type="number"
            label="Business Phone Number"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessMobile"
            component={renderField}
            type="text"
            label="Business Mobile Phone Number"
            fieldNotRequired
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessFax"
            component={renderField}
            type="text"
            label="Business Fax Number"
            fieldNotRequired
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessWebsite"
            component={renderField}
            type="text"
            label="Business Website"
            fieldNotRequired
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessEmail"
            component={renderField}
            type="text"
            label="Business Email Address"
          />
        </Grid>
      </Grid>
    );
  }

  renderBusinessLegalInfo() {
    return (
      <Grid container spacing={32} >
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Field
              name="companyLegalEntity"
              options={legalEntity}
              component={renderSelect}
              label="Legal Entity"
              onChangeHandler={(e) => this.props.dataAggregate({ companyLegalEntity: e.target.value })}
              initialValue={this.props.companyLegalEntity || ''}
            />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Field
                name="businessLocation"
                options={businessLocation}
                component={renderSelect}
                label="Location"
                onChangeHandler={(e) => this.props.dataAggregate({ businessLocation: e.target.value })}
                initialValue={this.props.businessLocation || ''}
              />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="federalStateTax"
            component={renderField}
            type="text"
            label="Federal State Tax #"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="businessStartDate"
            component={renderField}
            type="text"
            label="Date Business Started"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="federalStateTaxLien"
            component={renderField}
            type="text"
            label="Any Federal or State Tax Liens?"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Field
            name="productServicesSold"
            component={renderField}
            type="text"
            label="Products/Services Sold"
          />
        </Grid>
      </Grid>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card className='customCard'>
        <CardContent>
          <h1>COMPANY INFO</h1>
        </CardContent>
        <CardContent >
          <form id="companyDataForm" name="contact" onSubmit={handleSubmit(this.onSubmit)}>
            {this.renderBusinessNames()}
            {this.renderBusinessAddress()}
            {this.renderBusinessContact()}
            {this.renderBusinessLegalInfo()}

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
