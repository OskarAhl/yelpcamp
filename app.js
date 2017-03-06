var express          = require("express"), 
    app              = express(),
    request          = require("request"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    Campground       = require("./models/campground"),
    seedDB           = require("./seeds"),
    Comment          = require("./models/comment"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local"),
    User             = require("./models/user"),
    methodOverride   = require("method-override"),
    flash            = require("connect-flash");

//requiring routes
var commentRoutes        = require("./routes/comments"),
    campgroundRoutes     = require("./routes/campgrounds"),
    indexRoutes          = require("./routes/index");


// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://oskarahl:1234@ds119380.mlab.com:19380/yelpcamp")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");
//dirname refers to directory where this script is running (i.e. current directory)
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); 


//Passport configuration
app.use(require("express-session")({
    secret: "gryffindor",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// pass currentUser: req.user to everywhere (make req.user availanle to all ejs)
app.use(function(req, res, next) {
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("connected"); 
});

