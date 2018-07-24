import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import SimpleSlider from './simpleSlider';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import './HomeCard.css'

const styles = theme => ({
    cssRoot: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  });
  

class HomeCard extends Component {
    constructor() {
        super();
        this.state = {
            value: 250000,
        };
        this.setSliderValue = this.setSliderValue.bind(this);
    }
    
    setSliderValue = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <Grid className="card-container" container>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Card raised>
                        <CardContent>
                            <Typography variant='display1' style={{ color: '#2A5CAD' }}>
                                Quick, Easy and 100% Secure

                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant='subheading' style={{ color: '#0e3e5a', padding: 0 }}>
                                One Simple Application, and No Financial Statements up to $500K!

                            </Typography>
                        </CardContent>
                        <CardContent>
                            <SimpleSlider setSliderValue={this.setSliderValue} value={value}/>
                        </CardContent>
                        <CardContent>
                            <Button onClick={() => console.log(value)}
                                variant='contained' size='large' style={{ color: 'white' }} className={classNames(this.props.classes.cssRoot)}>
                                Apply Now
                                <i className="material-icons">
                                    arrow_forward
                                </i>
                            </Button>
                        </CardContent>
                        <CardContent>
                            It's <b>free</b> & won't affect your credit score
                        </CardContent>
                    </Card>
                </ Grid>
            </Grid>
            )
        }
}
export default withStyles(styles)(HomeCard);
