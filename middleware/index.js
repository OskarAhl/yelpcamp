var Campground = require("../models/campground");
var Comment = require("../models/comment");



//ALL THE MIDDLEWARE GOES HERE

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
            Campground.findById(req.params.id, function(err, foundCampground){
                if (err) {  
                    req.flash("error", "Campground Not Found")
                    res.redirect("back");
                } else {
                    //does user own campground?
                    // .equals because foundCampground.author.id is a mongoose object and req.user._id is a string
                    if(foundCampground.author.id.equals(req.user._id)) {
                        next();
                    } else {
                        req.flash("error", "You Don't Have Permission To Do That");
                        res.redirect("back");
                    }
                }
            });      
        } else { 
            req.flash("error", "You Need To Be Logged In To Do That");
            //res.redirect("back"); takes user back to where they came from
            res.redirect("back");
        }
}


middlewareObj.checkCommentOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if (err) {  
                    res.redirect("back");
                    req.flash("error", "You Don't Have Permission To Do That");
                } else {
                    //does user own campground?
                    // .equals because foundCampground.author.id is a mongoose object and req.user._id is a string
                    if(foundComment.author.id.equals(req.user._id)) {
                        next();
                    } else {
                        
                        res.redirect("back");
                    }
                }
            });      
        } else { 
            req.flash("error", "You Need To Be Logged In To Do That");
            //res.redirect("back"); takes user back to where they came from
            res.redirect("back");
        }
}

middlewareObj.isLoggedIn = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    //flashes on login form
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
}




module.exports = middlewareObj;