const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const cookieSession = require('cookie-session');
const authCheck = require("./middleware/auth");

//Cookie Session
app.use(cookieSession({
  name: 'session',
  keys: ['aaa', 'bbb', 'ccc'], 
})); 

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
//extend true?

//check
app.use(function(req, res, next) {
  console.log("The user is "+ req.users);
  console.log("The session is" + req.session.users)
  if(req.session.user) {
    if (users[req.session.user]) {
      req.user = user[req.session.user];
      next();
    }
  } else {
    next();
  }
})

app.use(ejsLayouts);

app.set("view engine", "ejs");



// Routes start here

app.get("/reminders", authCheck, (req, res) => {
  console.log(req.session['user']);
  let user = users[req.session.user]; //check if session exists
  if (user) {
    reminderController.list;
  } else {
    res.redirect('/login');
  }
});

app.get("/reminder/new",authCheck, reminderController.new)

app.get("/reminder/:id",authCheck, reminderController.listOne)

app.get("/reminder/:id/edit",authCheck, reminderController.edit)

app.post("/reminder/",authCheck, reminderController.create)

app.post("/reminder/update/:id",authCheck, reminderController.update)

app.post("/reminder/delete/:id",authCheck, reminderController.delete)


app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", (req, res) => {
  console.log('register', req.body)
  if (req.body.username && req.body.password) {
    users[req.body.username] = {username: req.body.username, password: req.body.password};
    req.session['user'] = req.body.username;
    res.redirect('/me');
  } else {
    res.status(400);
    res.send('invalid user');
  }
});
//2:21:00

app.post("/login",(req,res) => {
  if (users[req.body.username] && users[req.body.username].password === req.body.password) {
    req.session['user']= req.body.username;
    res.redirect('/me');
  } else {
    res.redirect('/');
  }
});
//2:22:00

//logout
// app.post('/logout', (req, res) =>{
//   req.session = null
//   res.redirect('/');
// });

//logged-in private profile


app.listen(3001, function () {
  console.log("Server running. Visit: localhost:3001/reminders in your browser 🚀");
});
