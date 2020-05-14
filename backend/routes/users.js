const router = require('express').Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const user = req.body;

  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if(err) {
      console.log(err)
    }
    
    const newUser = new User({
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      password: hash,
      admin: user.admin ? true : false
    });
    
    newUser.save()
      .then((data) => {
        if(data) {
          res.status(200).send({ message: 'Thanks for signing up!' }).redirect('http://localhost:3000/');
        }
      })
      .catch(err => {
        res.status(400).send({ error: 'Error: ' + err }).redirect('http://localhost:3000/sign-up');
      });
  });
});

module.exports = router;