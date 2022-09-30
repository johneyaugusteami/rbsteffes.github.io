//Setting up the Express Module
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
//Set up the router
app.use(express.static(path.join(__dirname, 'public')));

// Data for server
var reviews = [
    {    
       id:1,
       name: "Ryan Steffes",
       job: "Instructor",
       img: "myImage.jpg",
       text: "This is my review"
    },
    {
        id:2,
       name: "Not Ryan Steffes",
       job: "Not Instructor",
       img: "notMyImage.jpg",
       text: "This isn't my review"

    },
    {
        id:3,
        name: "Norene Kemp",
        job: "Department Head",
        img: "myImage.jpg",
        text: "This is her review"
    },
];




//Answer "get" on the location "/"
router.get(  
                '/', 
                function(req, res){
                        res.sendFile(path.join(__dirname, "JavaScriptObject__Reviews.html"));
                });
app.use('/', router);

//Answer "get" when we call "api/reviews"
router.get(
            '/api/reviews',
            function(req,res){
                let currentIndex= Math.floor(Math.random() * reviews.length);
                res.send(reviews[currentIndex]);
            }
)

let server = app.listen(3000, function(){
    console.log("App server is running on port 3000");
    console.log("To end, press CTRL-C");
});
