import React, { Component } from 'react';
import FormInput from '../../components/form-input/FormInput';
import FormRadio from '../../components/form-radio/FormRadio';
import FormDate from '../../components/form-date/FormDate';
import Button from '../../components/button/Button';

class EditPage extends Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    birthDate: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div className="add-page">
        <h2>Edit Information</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.firstName}
            name="firstName"
            handleChange={this.handleChange}
            label="First Name"
          />
          <FormInput
            value={this.state.middleName}
            name="middleName"
            handleChange={this.handleChange}
            label="Middle Name"
          />
          <FormInput
            value={this.state.lastName}
            name="lastName"
            handleChange={this.handleChange}
            label="Last Name"
          />
          <label>
            Gender:
            <FormRadio
              id="male"
              value="male"
              handleChange={this.handleChange}
            />
            <FormRadio
              id="female"
              value="female"
              handleChange={this.handleChange}
            />
          </label>
          <label>
            <FormDate handleChange={this.handleChange} />
          </label>
          <Button type="submit">Update</Button>
        </form>
      </div>
    );
  }
}

export default EditPage;
