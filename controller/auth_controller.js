const express = require('express')
let database = require("../database");
let cookieSession = require('cookie-session');

const app = express();


app.get('/', (req,res) => {
  
})

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register')
  },



  loginSubmit: (req, res) => {
    if (users[req.body.useremail] && users[req.body.useremail].password === req.body.password){
      req.session['user'] = req.body.username;
      res.redirect('/reminders');
} else {
  res.redirect('/');
  }
},

  registerSubmit: (req, res) => {
    console.log('register')
    if (req.body.useremail && req.body.userpassword) {
      users[req.body.useremail] = {email: req.body.useremail, password: req.body.password};
      req.session['user'] = req.body.useremail;
      res.redirect('auth/login');
    } else {
      res.status(400);
      res.send('invalid user')
    } 
  }
};

module.exports = authController;
