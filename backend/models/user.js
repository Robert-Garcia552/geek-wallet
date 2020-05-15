const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  article: String,
});

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    unique: true,
    trim: true, 
    required: [true, 'Email is required'],
  },
  birthdate: {
    type: Date,
    required: [true, 'Birthday is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  admin: {
    type: Boolean,
    required: true,
  },
  articles: [ articleSchema ],
},
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);


module.exports = User;
