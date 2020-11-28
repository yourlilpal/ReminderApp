let database = require("../database");
const fetch = require('node-fetch')

let remindersController = {
  list: (req, res, next) => {
    res.locals.page = "reminders"
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  new: (req, res) => {
    res.locals.new = "/new"
    
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  create: (req, res) => {
    const clientid = "fzEDnXbeWLPJTiUvAU-9uGrABjwjEQmDTd5gQIS3dAI"
    const query = req.body.coverInput
    const url = `https://api.unsplash.com/search/photos?client_id=${clientid}&query=${query}`
    fetch(url)
    .then(data => data.json())
    .then(newData => {
      const imageFromUnsplash = newData.results[0].urls.regular
      let reminder = {
        id: database.cindy.reminders.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
        coverPhoto: imageFromUnsplash
      }
      .catch(err => console.log(err)) 
      database.cindy.reminders.push(reminder);
      res.redirect('/reminders');
    })
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult })

  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title,
          reminder.description = req.body.description,
          reminder.completed = req.body.completed == "true"
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database.cindy.reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;
