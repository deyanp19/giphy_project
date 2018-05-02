var topics = ["rambo", "katy perry", "construction", "fail", "dogs", "sambo", "cat"];

for (var i = 0; i < topics.length; i++) {
    var topicsBtn = $("<button>");
     var btnDiv = $("#buttonsArea");
    topicsBtn.addClass("topic-" + i);
    topicsBtn.attr("topics-Name", topics[i]);
    topicsBtn.text(topics[i]);
    btnDiv.append(topicsBtn);
}


$(document).on("click", "button", function(event) {
    event.preventDefault();
//create a variable that will take the topick of the buttons or the content of the topics[]

var gifContent =$(this).attr("topics-Name")
//javascript, jQuery
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifContent + "&api_key=GmZqHjeK15F7FZADmseIJAqZ0GvgcRSR&limit=10";

// queryURL.done(function(data) { console.log("success got data", data); });
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(queryURL);

      console.log(response);
 
var results = response.data; // this is the array in the object data
console.log(results);
//createa for loop to check the results
for (var i = 0; i < results.length; i++) {
    // creating the storage for the images in div's
    var giphydiv = $("<div>");
    var p = $("<p>").text("Rating: " + results[i].rating);
    var giphyImage = $("<img>");
    // setting the src attribute of the image to a property pulled off the result item
    giphyImage.attr("src", results[i].images.fixed_height.url);

    // to attach the paragrapsh(p) to the div
    
    giphydiv.append(p);
    giphydiv.append(giphyImage);
    $("#gifs-appear-here").prepend(giphydiv);
    }
}); 

// Needs to create a search box and push the values into the array i created at the begining. This will generate new buttons.

//$("input[type='text']").val(""); 

});

$("#add-to-do").on("click", function(event) {
    event.preventDefault();
var newButton = $("input[type='text']").val().trim();
topics.push(newButton);
var topicsBtn = $("<button>");
     var btnDiv = $("#buttonsArea");
    topicsBtn.addClass("topic-" + i);
    topicsBtn.attr("topics-Name", newButton);
    topicsBtn.text(newButton);
    btnDiv.append(topicsBtn);

});