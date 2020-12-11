import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { DatePicker } from 'antd';
import moment from 'moment';

import FormInput from '../../components/form-input/FormInput';
import FormRadio from '../../components/form-radio/FormRadio';
import FormDate from '../../components/form-date/FormDate';
import Button from '../../components/button/Button';

import './add-page.styles.scss';

class AddPage extends Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date._d,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Okay');
    fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        dateOfBirth: this.state.dateOfBirth,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Successfully added!');
        <Redirect to="/" />;
      });
  };

  render() {
    console.log(`${new Date().getFullYear() - 18}`);
    const dateFormat = 'YYYY/MM/DD';
    return (
      <div className="add-page">
        <h2>Add New</h2>
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
            Date of Birth:
            <DatePicker
              onChange={this.handleDate}
              showToday={false}
              name="dateOfBirth"
              defaultValue={moment(
                `${new Date().getFullYear() - 18}`,
                dateFormat
              )}
              disabledDate={(current) => {
                return (
                  moment().add('years', -18) <= current ||
                  moment().add('years', -60) >= current
                );
              }}
            />
          </label>

          {/* <FormDate handleChange={this.handleChange} /> */}

          <Button type="submit">Add</Button>
        </form>
      </div>
    );
  }
}

export default AddPage;
