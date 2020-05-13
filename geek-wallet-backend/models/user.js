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
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
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
