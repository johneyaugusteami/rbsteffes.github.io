
var currentReviewID = 1;

function loadReview()
{
    
    //Make and AJAX call
    let xhr = new XMLHttpRequest();
    xhr.open("get","/api/reviews/" + currentReviewID, true);
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
            currentReviewID = reviews.id;
        }
         };

         $("#reviewInput").hide();
}

function newReview(){
    $("#reviewDisplay").hide();
    $("#reviewInput").show();
}
function saveReview(){
      //Make and AJAX call
      let xhr = new XMLHttpRequest();
      xhr.open("post","/api/reviews/", true);

      let newReview = {
        name : $("#revName").val(),
        job : $("#revJob").val(),
        review : $("#revTextReview").val(),
      };
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(newReview));
      console.log(JSON.stringify(newReview));
      xhr.onreadystatechange = function(){
          if(xhr.readyState == xhr.DONE)
          {
            var item = JSON.parse(xhr.responseText);
            currentReviewID = parseInt(item.id);
            loadReview();
        }};

    $("#reviewInput").hide();
    $("#reviewDisplay").show();
    return false;
    
}

function deleteReview(){
    //Make and AJAX call
    let xhr = new XMLHttpRequest();
    xhr.open("delete","/api/reviews/"+ currentReviewID, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE)
        {
            currentReviewID++;
            loadReview();
        }
}

function nextReview(){
    loadReview();
}

function prevReview(){}
    loadReview("next=false");
}

loadReview();
        

