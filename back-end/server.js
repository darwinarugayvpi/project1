const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const UserRouter = require('./routes/user');

mongoose.connect('mongodb://localhost:27017/project1', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once('open', () => {
  console.log('Connected to local database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', UserRouter);

app.listen(4000, () => {
  console.log('App listen to local server 4000');
});
