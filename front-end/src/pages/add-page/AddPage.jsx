import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { DatePicker } from 'antd';
import moment from 'moment';
import Swal from 'sweetalert2';

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
      dateOfBirth: date,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
        if (data === 'Success') {
          Swal.fire({
            title: 'Success',
            icon: 'success',
            text: 'Successfullly added!',
          });
        }
      });
  };

  render() {
    console.log(this.state.dateOfBirth);
    const dateFormat = 'YYYY/MM/DD';
    return (
      <div className="add-page">
        <h2>Add New</h2>
        <div className="add-page-form">
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
              Date of Birth(optional):
              <DatePicker
                onChange={this.handleDate}
                showToday={false}
                name="dateOfBirth"
                defaultValue={(current) => {
                  return moment(`${new Date().getFullYear() - 18}`, dateFormat);
                }}
                disabledDate={(current) => {
                  return (
                    moment().add(-18, 'years') <= current ||
                    moment().add(-60, 'years') >= current
                  );
                }}
              />
            </label>
            <Button type="submit">Add</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPage;
