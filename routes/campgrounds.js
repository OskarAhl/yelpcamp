var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware/");

//=============================================
//INDEX - view all campgrounds
//=============================================

router.get("/", function(req, res) {
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log("error");
        } else {
            //currentUser ----> pass logged in user to index (available to header) to check if loggedin
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    })
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn,function(req, res) {
    
    //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description:desc,price: price, author: author}
    
    //Create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log("error");
        } else {
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    })
});

//NEW - display form for adding new campground
router.get("/new", middleware.isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});

//SHOWs more info about one campground
router.get("/:id", function(req, res) {
    //find campground with provided id 
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
       if (err) {
            console.log(err);   
       } else {
            //render show templete with that campground
           res.render("campgrounds/show", {campground: foundCampground})
       }
    });
});


//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership,function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });      
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
   //find and update correct campground and redirect
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if (err) {
           res.redirect("/campgrounds");
       } else {
           res.redirect("/campgrounds/"+req.params.id)
       }
   })
});


//DESTROY campground route
router.delete("/:id", middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//middleware -- redirects to /login if not logged in
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

//Middleware -- check if user is logged in and if user owns campground 


module.exports = router;