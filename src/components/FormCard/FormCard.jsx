import React, { Component } from 'react';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";

import './FormCard.css';

const styles = {
    root: {
      flexGrow: 1,
    },
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
          activeStep: state.activeStep + 1,
        }));
      };
    
    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    render() {
    const { classes, theme } = this.props;

    return (
        <div>
            <div className="stepper-bar">
                <MobileStepper
                variant="progress"
                steps={6}
                position="static"
                activeStep={this.state.activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                }
                />
            </div>
        </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(FormCard);
