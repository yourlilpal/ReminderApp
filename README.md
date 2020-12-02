# reminderapp
Web Dev
Sprint 5:
In this Sprint, you should be wrapping things up with your application. This includes:
Having a readme that states who your group members are, and a basic explanation of how your code is structured.
If there were any tasks you could NOT complete from the above sprints, put them in the readme, and give a short explanation of how you would attempt to do the task if you had time.
Add a license to your github repository. The license specifies how your code may be used by others.
Make sure your github repository is fully up-to-date. Provide installation instructions in your readme. (Ex - git clone <url>....cd <folderName> run npm install.... node index.js etc)
Readme.md
need to finish by end of class

ReadMe

Introduction

Minseok Ko: In sprint 2, when a user clicks the delete button, it activates the delete function in reminder_constroller.js. It calls params id of reminder which the user tries to delete from localhost:3001/reminder. After the call, it searches(findindex) the same params id which is in the reminder database. And remove reminder from reminder database using (splice). 
In sprint 3, when users enter their email and press sign up button, it takes users to register a page with users’ email already filled out for them. Users enter their email into the from in index.html and the form has action and method. they have /register which activate register function in auth_controller.js, and get a method for getting information. In the register function, it reads the query that users entered for email and read as UE (UserEmail), and renders to register page with query and the query adds into email input in register.ejs because of the value that i set as UE. In sprint 3, the landing page shows images of your actual app. I used https://imgbb.com/upload site. After I upload the images, it gives the public URL for 00each image and I put them in scr in <img scr= ” ”></> section. For showing different people section, i got random people image and I put them in scr in <img scr= ” ”></> section. In sprint 4, I added an https://openweathermap.org/api which shows Canada weather. I added a weather button on the landing page in index.html. When a user clicks the button it activates the getweather function in weather because of herf=”/weather”. In the getweather function, it renders to the reminder/weather page with the weather API. In the reminder/weather page, currently showing current country, location and weather information. There is various information in the weather API which shows the velocity of the weather but for now i just added basic information. For the current country section, I added country in sys in data of weather API (data.sys.country). For the current location, I added the name of location in data of weather API (data.name).  For current weather information, I added the weather that humans actually feels-like in main in data of weather API (data.main.feels_like). However, the feels_like shows the temperature in fahrenheit so i subtracted 273 and the final syntax is (data.main.feels_like -273).


Gorden Pal: 
In sprint 2, the user can look into their personal reminders and see what is completed. Each reminder is highlighted, on the side, what is completed and what hasn’t been completed. The user can make modifications by clicking on the “View” button on the right. Afterwards, the user will be shown their list of reminders. This list of reminders will provide the user the ability to either “Edit” or “Delete” their reminders. When the user “Edit” their reminder, the user would be able to see the Title and Description of the reminder. In addition, the “Edit” function will also showcase the “Completed” radio button. This radio button has the option of highlighting either the reminder is completed or not. If the reminder is completed, clicking the “True” button will reveal on the reminder list that the reminder is complete by returning a green box saying “True”. By default, all reminders that are created are set to “False” in terms of the reminder not being completed. In “Edit” mode, if the Complete button is still on “False”, it will still remain “False” on the reminder list.

In sprint 3, the reminder application has incorporated the cookie session feature. This feature allows users to be authenticated by logging into their accounts. Although the application is using sessions, it is still hard-coded using the fake database. A notable mention that the application has been updated to use BootStrap 4. Formerly, the application was using BootStrap 3, which was updated in this sprint. 

In sprint 4, there is an additional page that is set for just friends. users can add friends to their account from the database. Furthermore, once added, users can then see their friend’s reminder in the reminder list. Each friend will also provide their profile picture beside their names when looking into the reminder list. On the contrary, deleting your friend will remove them from your list including their reminders. Users can search up the database by typing in their username or their email. If there is no such username or email, the application will return a notification that “None exists”.  

Incomplete tasks:

Sprint 3 - each object reminder should have a list of subtasks and tags, and was not incorporated into the application.
sprint 4 - add friend and delete friend was not completed and incorporated into the application. there is no search bar for looking up username or email in the database.

Adam Khant: 

Wesly Wong: Starting with sprint 2, the user is able to click on an existing reminder and then the edit button to change the title and description of the reminder. The code makes the change by storing the change in a variable, finding the existing database inside the variable, and returning the change to replace the old reminder. Lastly, the page is rendered for the user to see the change. In sprint 3, res.locals is used to dynamically change which button is “active” depending on which website the user is currently at. This is done by adding “active” each navbar class and adding a statement in navbar.ejs where if the user is on the webpage, the button becomes active. The navbar is also changed so that the create and reminder list buttons are temporarily removed from login and register web pages. Using res.locals again, adding a if/else condition to the navbar class where if the user is on the login/register pages, the button should not appear. Finally in sprint 4, a profile picture search bar is added to the create and edit page so that the user can search and use whatever image suits their interests. This is done by adding an image api database and through to find the right image using the search url. 

Incomplete Tasks

Sprint 3 - Navbar: If I had time, I would have tried to study the documentation more and ask more questions about how to implement res.locals to change the buttons to active and temporarily remove them from login and register.

Sprint 4 - Profile Picture: If I had more time, I would spend more time attempting to debug the error, “TypeError: Cannot read property ‘0’ of undefined.

License

Copyright © 2020 Minseok Ko, Gorden Pal, Adam Khant, Wesly Wong

Permission is hereby granted, free of change, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM. DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALING IN THE SOFTWARE

Installation Instructions

Click on Code
Click on Open with GitHub Desktop
Copy and Paste url: https://github.com/yourlilpal/reminderapp.git
Install Express using npm install Express in code editor
Install node-fetch using npm install node-fetch in code editor
