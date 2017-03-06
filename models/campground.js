var mongoose = require("mongoose");

//SCHEMA setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   //array of comment IDs
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         //ref is name of model
         ref: "Comment"
      }
   ]
});

//make model with campGroundSchema --> so we can use methods e.g. Campground.find(), Campground.create();
var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;

// "vanilla creation of campground example: "
// Campground.create({
//     name: "Magic Bus Alaska", 
//     image: "http://www.photosforclass.com/download/6015893151",
//     description: "Sad bus in wilderness, big river close to bus, looks like someone has lived in the bus"
    
//     //callback function to see if ok
// }, function(err, campground) {
//     if(err) {
//         console.log("Something wrong!");
//     } else {
//         console.log("new campground");
//         console.log(campground);
//     }
// });