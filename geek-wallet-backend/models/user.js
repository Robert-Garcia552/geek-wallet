const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  article: String,
});

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    trim: true,    
  },
  birthDate: {
    type: Date,
  },
  articles: [ articleSchema ],
},
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);


module.exports = User;
