const User = require('../models/user');

const addUser = (body) => {
  // console.log(body);
  const { firstName, middleName, lastName, gender, dateOfBirth } = body;
  const newUser = new User({
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
  });

  return newUser.save().then((result, err) => {
    return !err ? result : false;
  });
};

const getAllUsers = () => {
  return User.find({}).then((users, err) => {
    return !err ? users : false;
  });
};

const editUser = (userID, userDetails) => {
  const { firstName, middleName, lastName, gender, dateOfBirth } = userDetails;
  const userUpdate = {
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
  };
  return User.findById(userID).then((foundUser, err) => {
    if (foundUser) {
      return User.findByIdAndUpdate(
        userID,
        { $set: userUpdate },
        { new: true }
      ).then((newUser, err) => {
        return !err ? newUser : false;
      });
    } else {
      return 'not found';
    }
  });
};

const deleteUser = (userID) => {
  return User.findByIdAndDelete(userID).then((userDelete, err) => {
    return !err ? userDelete : false;
  });
};

module.exports = {
  addUser,
  getAllUsers,
  editUser,
  deleteUser,
};
