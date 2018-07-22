import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import './Footer.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Footer extends Component {
  state = {
    title: "",
    description: "",
    open: false,
  };

  handleClickOpen = (choice) => {
    const privacyPolicy = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`
    const termsConditions = `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
    Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.`
    const disclosures = `Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.`

    if (choice === 'privacyPolicy')
      this.setState({ title: 'Privacy Policy', description: privacyPolicy }, this.setState({ open: true }));
    else if (choice === 'termsConditions')
    this.setState({ title: 'Terms & Conditions', description: termsConditions }, this.setState({ open: true }));
    else if (choice === 'disclosures')
    this.setState({ title: 'Disclosures', description: disclosures }, this.setState({ open: true }));
    
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, title, description } = this.state;
    return (
      <div className="footer">
        <h2 style={{ marginBottom: 0 }}>Talk to our Funding Experts</h2>
        <h3 style={{ marginTop: 0, color: '#2A5CAD' }}><i className="material-icons" style={{ top: 5, right: 4, position: 'relative' }}>phone</i>(312) 468-0509</h3>
        <div className="footer-link-wrapper">
            <span className="footer-link" onClick={() => this.handleClickOpen('privacyPolicy')}>Privacy Policy</span>
            <span> | </span>
            <span className="footer-link" onClick={() => this.handleClickOpen('termsConditions')}>Terms & Conditions</span>
            <span> | </span>        
            <span className="footer-link" onClick={() => this.handleClickOpen('disclosures')}>Disclosures</span>
        </div>
        <p className="copyright">Copyright 2018 Peerpoint Capital Inc</p>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Footer;
