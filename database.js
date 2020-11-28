const { getMaxListeners } = require("process");

let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
        personal: [{user: "cindy@gmail.com", password: "cindy"}],
        friendlist: [{id: 2, user: 'alex'}]
    },
    alex: {
        reminders: [{id: 2, title: "def", description: "abcabc", completed: false}],
        personal: [{}],
        friendlist: []
    } 
}


module.exports = Database;