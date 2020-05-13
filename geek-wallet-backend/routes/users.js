
const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body)
  const name = req.body.name;
  const email = req.body.email;
  const birthdate = req.body.birthdate;
  const password = req.body.password;
  const admin = req.body.admin ? true : false;

  const newUser = new User({
    name,
    email,
    birthdate,
    password,
    admin
  });

  newUser.save()
    .then(() => {
      res.json('User added!');
      res.redirect('http://localhost:3000/')
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;