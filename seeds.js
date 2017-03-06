//ADDS initial campgrounds + comments (error driven development)

var mongoose        = require("mongoose"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment");
    
var data = [
    {
        name: "Blackrock Spire",
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Pretty easy, just watch out for Leeroy. Lorem ipsum dolor sit amet, nibh equidem detraxit pro an, pro sint magna iisque et. Fugit virtute ut nam, iisque detracto expetenda duo ea, mea sensibus corrumpit definiebas id. Pro ne nisl populo, ad velit omittantur intellegebat has, porro imperdiet his ad. Mei iusto munere interesset ut. His omnis meliore ad, ut nec agam principes.Qui cibo docendi inciderint et. Quidam veritus vulputate an quo. Luptatum phaedrum sententiae mei et, est cu intellegam comprehensam. Te duo solum posse antiopam, ne per adhuc persius. Ut malorum salutatus mel. "
    },
    {
        name: "Eastern Plaguelands",
        image: "https://farm6.staticflickr.com/5068/5658844394_32a41aa7f1.jpg",
        description: "Zombies and vigilantes galore. Lorem ipsum dolor sit amet, nibh equidem detraxit pro an, pro sint magna iisque et. Fugit virtute ut nam, iisque detracto expetenda duo ea, mea sensibus corrumpit definiebas id. Pro ne nisl populo, ad velit omittantur intellegebat has, porro imperdiet his ad. Mei iusto munere interesset ut. His omnis meliore ad, ut nec agam principes.Qui cibo docendi inciderint et. Quidam veritus vulputate an quo. Luptatum phaedrum sententiae mei et, est cu intellegam comprehensam. Te duo solum posse antiopam, ne per adhuc persius. Ut malorum salutatus mel."
    },
    {
        name: "Alterac Valley",
        image: "https://farm1.staticflickr.com/756/21043112059_788cbc12ed.jpg",
        description: "Cold and Snowy. Lorem ipsum dolor sit amet, nibh equidem detraxit pro an, pro sint magna iisque et. Fugit virtute ut nam, iisque detracto expetenda duo ea, mea sensibus corrumpit definiebas id. Pro ne nisl populo, ad velit omittantur intellegebat has, porro imperdiet his ad. Mei iusto munere interesset ut. His omnis meliore ad, ut nec agam principes.Qui cibo docendi inciderint et. Quidam veritus vulputate an quo. Luptatum phaedrum sententiae mei et, est cu intellegam comprehensam. Te duo solum posse antiopam, ne per adhuc persius. Ut malorum salutatus mel."
    },
]

function seedDB () {    
    //remove all campgrounds
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("removed campgrounds"); 
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground) { 
        //             if (err) { 
        //                 console.log(err);
        //             } else {
        //                 console.log("Added campground");
        //                 //Create comment:
        //                 Comment.create({
        //                     text:"This place is great but too many bears",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if (err) {
        //                         console.log(err)
        //                     } else {
        //                         //associate comment with campground (campground line 30)
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;

