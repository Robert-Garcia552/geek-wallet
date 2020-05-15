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
          res.status(200).json({ success: true, message: 'Thanks for signing up!', redirectUrl: '/' });
        }
      })
      .catch(err => {
        let validations = ['name', 'email', 'birthdate', 'password']
        let errors = validations.map((e) => {
          if(err.errors[`${e}`].message) {
            return err.errors[e].message
          }
        });
        
        res.status(400).send({ success: false, message: 'Error: ' + errors.join(', '), redirectUrl: '/sign-up' });
      });
  });
});

module.exports = router;