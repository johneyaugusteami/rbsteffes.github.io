//Setting up the Express Module
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
//Set up the router
app.use(express.static(path.join(__dirname, 'public')));
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);

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

//Answer "get" when we call "api/reviews"
router.get(
            '/api/reviews',
            function(req,res){
                let currentIndex= Math.floor(Math.random() * reviews.length);
                res.send(reviews[currentIndex]);
            }
);

//Answer "get" when we call "api/reviews/:id"
router.get(
    '/api/reviews/:id',
    function(req,res){
        
        let found = reviews.find(function(item){
                return item.id === parseInt(req.params.id);
        } );

        console.log(found);
        if(found)
            res.status(200).json(found);
        else res.status(404);
        
    }
);


//Answer "delete" when we call "api/reviews/:id"
router.delete(
    '/api/reviews/:id',
    function(req,res){
        
        let found = reviews.find(function(item){
                return item.id === parseInt(req.params.id);
        } );

        console.log(found);
        if(found)
        {  
            let foundIndex = reviews.indexOf(found);
            reviews.splice(foundIndex,1);
        }

        console.log(reviews);
        res.sendStatus(204);
        
        
    }
);


//CREATE
//Answer "post" when we call "api/reviews"
router.post(
    '/api/reviews',
    function(req,res){
        console.log("Handling POST");
        console.log(req.body);
        let itemIds = reviews.map(item => item.id);
        let newReview = {    
            id: (itemIds.length >0)? Math.max.apply(Math, itemIds)+1: 1,
            name: req.body.name,
            job: req.body.job,
            img: req.body.img,
            text: req.body.review
         }

         reviews.push(newReview);
         res.status(201).json(newReview);
       
    }
);

//CREATE
//Answer "post" when we call "api/reviews"
router.post(
    '/api/reviews',
    function(req,res){
        console.log("Handling PUT");
        console.log(req.body);
    
        let newReview = {    
            id: req.body.id,
            name: req.body.name,
            job: req.body.job,
            img: req.body.img,
            text: req.body.text
         }

         let found = reviews.find(function(item){
            return item.id === parseInt(newReview.id);
            } );
 
        if(found)
        {  
            let foundIndex = reviews.indexOf(found);
            reviews.splice(foundIndex,1,newReview);
            res.status(204).json(newReview);
        }
        else{
            res.status(404);
        }
        
       
    }
);




app.use('/', router);
app.use('/api/reviews', router);
app.use('/api/reviews/:id', router);

let server = app.listen(3000, function(){
    console.log("App server is running on port 3000");
    console.log("To end, press CTRL-C");
});
