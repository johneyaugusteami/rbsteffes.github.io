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
var currentIndex= Math.floor(Math.random() * 3);

function loadReview()
{
    var revName = document.getElementById("reviewer"),
        revJob = document.getElementById("job"),
        revReview = document.getElementById("review"),
        revImage = document.getElementById("person-img");

        revName.innerHTML = reviews[currentIndex].name;
        revJob.innerHTML = reviews[currentIndex].job;
        revReview.innerHTML = reviews[currentIndex].text;
        revImage.src = reviews[currentIndex].img;
}

function nextReview(){
    currentIndex++;
    if( currentIndex >= reviews.length)
        currentIndex=0;

    loadReview();
}

function prevReview(){
    currentIndex--;
    if( currentIndex < 0)
        currentIndex = reviews.length - 1;
    
    loadReview();
}

loadReview();
        

