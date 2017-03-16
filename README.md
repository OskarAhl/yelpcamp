# Yelpcamp
Yelp, but for campsites. __RESTful routing + full CRUD functionality__

User can:
- Signup and make account
- Login/Log out
- View index of campgrounds from all users
- Add new campground
- Edit own existing campground
- Delete own existing campground
- Add/Delete/Edit comments to all campgrounds
- Flash messages ("successfully logged out" etc)

## Stack:
Front end: HTML, CSS, JS, Bootstrap
Back end: MongoDB, Node.JS (w/ Express.Js, Passport.Js, Mongoose, EJS, Body-parser)

# How is it made? 
- Signups, authentication, authorization through Passport.Js
- Routing with the help of Express.Js
- Modules, partials(header, footer) with EJS
- Form data with body-parser
- MongoDB with mongoose for Schemas (campgrounds and comments) 
- Flash messages with connect-flash 
- Middleware made with JS
