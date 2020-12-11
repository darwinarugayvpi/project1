const express = require('express');
const router = express.Router();
const User = require('../models/user');
const UserController = require('../controllers/user');

router.post('/', (req, res) => {
  UserController.addUser(req.body).then((result) => {
    if (result) {
      res.send('Success!');
    } else {
      res.status(403).send('Something went wrong');
    }
  });
});

router.get('/', (req, res) => {
  UserController.getAllUsers().then((result) => res.send(result));
});

router.get('/:userID', (req, res) => {
  UserController.getUser(req.params.userID).then((result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(403).send('Something went wrong');
    }
  });
});

router.put('/:userID', (req, res) => {
  UserController.editUser(req.params.userID, req.body).then((result) => {
    if (result) {
      res.status(201).send('Success');
    } else {
      res.status(403).send('Something went wrong');
    }
  });
});

router.delete('/:userID', (req, res) => {
  UserController.deleteUser(req.params.userID).then((result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(403).send('failed');
    }
  });
});

module.exports = router;
