import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class PersonalDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" showMenuIconButton={false} />
          <br />
          <TextField
            name="occupation"
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            name="city"
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange}
            defaultValue={values.city}
          />
          <br />
          <TextField
            name="bio"
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles}
            onClick={this.back}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  margin: 15,
};

export default PersonalDetails;
