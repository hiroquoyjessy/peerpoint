import React, { Component } from "react";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { withStyles } from "@material-ui/core/styles";

import ContactForm from "../ContactForm";

import "./FormCard.css";

const styles = {
  root: {
    flexGrow: 1
  }
};

class FormCard extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      data: {}
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData() {
    const { dataAggregate } = this.props;

    dataAggregate(this.state);
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  renderTitle() {
    const { activeStep } = this.state;

    switch (activeStep) {
      case 0: {
        return <div>First Step</div>;
      }
      case 1: {
        return <div>Second Step</div>;
      }
      case 2: {
        return <div>Third Step</div>;
      }
      case 3: {
        return <div>Fourth Step</div>;
      }
      case 4: {
        return <div>Fifth Step</div>;
      }
      default:
        return null;
    }
  }

  renderSteps() {
    const { activeStep } = this.state;
    const { dataAggregate } = this.props;

    switch (activeStep) {
      case 0: {
        console.log(`activeStep: ${activeStep}`);
        return <ContactForm dataAggregate={dataAggregate} />;
      }
      case 1: {
        console.log(`activeStep: ${activeStep}`);
        return <div>Second Step</div>;
      }
      case 2: {
        console.log(`activeStep: ${activeStep}`);
        return <div>Third Step</div>;
      }
      case 3: {
        console.log(`activeStep: ${activeStep}`);
        return <div>Fourth Step</div>;
      }
      case 4: {
        console.log(`activeStep: ${activeStep}`);
        return <div>Fifth Step</div>;
      }
      default:
        return null;
    }
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        {this.renderTitle()}
        <div className="stepper-bar">
          <Grid container justify="center" className="gridSteps">
            <Grid item lg={6} md={10} sm={12}>
              <MobileStepper
                variant="progress"
                steps={5}
                position="static"
                activeStep={this.state.activeStep}
                className={classes.root}
                nextButton={
                  <Button
                    size="small"
                    onClick={this.handleNext}
                    disabled={this.state.activeStep === 4}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={this.handleBack}
                    disabled={this.state.activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
              {this.renderSteps()}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FormCard);
