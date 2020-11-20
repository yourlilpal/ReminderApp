let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    console.log(req.query)
    // let userEmail = req.query.email;
    res.render('auth/register', {
      UE: req.query.email
    });
    
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;
