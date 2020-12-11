import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import FormInput from '../../components/form-input/FormInput';
import FormRadio from '../../components/form-radio/FormRadio';
import FormDate from '../../components/form-date/FormDate';
import Button from '../../components/button/Button';

import './edit-page.styles.scss';

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
    hidden: false,
  };

  componentDidMount() {
    fetch(`http://localhost:4000/user/${this.props.match.params.userID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.dateOfBirth === null) {
          this.setState({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            gender: data.gender,
          });
        } else {
          this.setState({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            gender: data.gender,
            dateOfBirth: data.dateOfBirth,
          });
        }
      });
  }

  handleDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date,
    });
    // console.log(date);
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
    // console.log(this.state.dateOfBirth);
    return (
      <div className="edit-page">
        <h2>Edit Information</h2>
        <div className="edit-page-form">
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
            {this.state.dateOfBirth === '' || this.state.hidden ? (
              <React.Fragment>
                <p>
                  No birth date, do you want to add?{' '}
                  <a
                    style={{ textDecoration: 'underline' }}
                    onClick={() =>
                      this.setState({ hidden: !this.state.hidden })
                    }
                  >
                    Click here.
                  </a>{' '}
                </p>
              </React.Fragment>
            ) : (
              <label>
                Date of Birth:
                <DatePicker
                  onChange={this.handleDate}
                  name="dateOfBirth"
                  showToday={false}
                  defaultValue={moment(`${this.state.dateOfBirth}`, dateFormat)}
                  disabledDate={(current) => {
                    return (
                      moment().add(-18, 'years') <= current ||
                      moment().add(-60, 'years') >= current
                    );
                  }}
                />
              </label>
            )}

            {this.state.hidden ? (
              <div>
                <label>
                  Date of Birth:
                  <DatePicker
                    onChange={this.handleDate}
                    name="dateOfBirth"
                    showToday={false}
                    defaultValue={(current) => {
                      return moment(
                        `${new Date().getFullYear() - 18}`,
                        dateFormat
                      );
                    }}
                    disabledDate={(current) => {
                      return (
                        moment().add(-18, 'years') <= current ||
                        moment().add(-60, 'years') >= current
                      );
                    }}
                  />
                </label>
              </div>
            ) : null}

            <Button type="submit">Update</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPage;
