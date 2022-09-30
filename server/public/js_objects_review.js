

function loadReview()
{
    //Make and AJAX call
    let xhr = new XMLHttpRequest();
    xhr.open("get","/api/reviews", true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE)
        {
            var reviews = JSON.parse(xhr.responseText);
            var revName = document.getElementById("reviewer"),
                revJob = document.getElementById("job"),
                revReview = document.getElementById("review"),
                revImage = document.getElementById("person-img");

            revName.innerHTML = reviews.name;
            revJob.innerHTML = reviews.job;
            revReview.innerHTML = reviews.text;
            revImage.src = reviews.img;
        }
         };
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
        

