import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import FormInput from '../../components/form-input/FormInput';
import FormRadio from '../../components/form-radio/FormRadio';
import FormDate from '../../components/form-date/FormDate';
import Button from '../../components/button/Button';

class EditPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
  };

  componentDidMount() {
    fetch(`http://localhost:4000/user/${this.props.match.params.userID}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth.slice(0, 10),
        });
      });
  }

  handleDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date._d,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:4000/user/${this.props.match.params.userID}`, {
      method: 'PUT',
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
        console.log(data);
      });
  };

  render() {
    const dateFormat = 'YYYY/MM/DD';
    console.log(this.state.dateOfBirth);
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
              checked={this.state.gender === 'male' ? true : false}
              handleChange={this.handleChange}
            />
            <FormRadio
              id="female"
              value="female"
              checked={this.state.gender === 'female' ? true : false}
              handleChange={this.handleChange}
            />
          </label>

          <label>
            Date of Birth:
            <DatePicker
              onChange={this.handleDate}
              name="dateOfBirth"
              showToday={false}
              value={moment(`${this.state.dateOfBirth}`, dateFormat)}
              disabledDate={(current) => {
                return (
                  moment().add('years', -18) <= current ||
                  moment().add('years', -60) >= current
                );
              }}
            />
          </label>

          <Button type="submit">Update</Button>
        </form>
      </div>
    );
  }
}

export default EditPage;
