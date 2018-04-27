var topics = ["rambo", "katy perry", "construcktion", "fil"]
for (var i = 0; i < topics.length; i++) {
    var topicsBtn = $("<button>");
     var btnDiv = $("#buttonsArea");
    topicsBtn.addClass("topic-" + i);
    topicsBtn.attr("topics-Name", topics[i]);
    topicsBtn.text(topics[i]);
    btnDiv.append(topicsBtn);
}


$("button").on("click", function() {
//create a variable that will take the topick of the buttons or the content of the topics[]

// var gifContent =$(this).attr("topics-Name")
// //javascript, jQuery
// var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + gifContent + "&api_key=GmZqHjeK15F7FZADmseIJAqZ0GvgcRSR&limit=10");

// //queryURL.done(function(data) { console.log("success got data", data); });
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//       console.log(queryURL);

//       console.log(response);
//   })

 // Grabbing and storing the data-animal property value from the button
 var animal = $(this).attr("data-animal");

 // Constructing a queryURL using the animal name
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
   animal + "&api_key=dc6zaTOxFJmzC&limit=10";

 // Performing an AJAX request with the queryURL
 $.ajax({
   url: queryURL,
   method: "GET"
 })
   // After data comes back from the request
   .then(function(response) {
     console.log(queryURL);

     console.log(response);
     // storing the data from the AJAX request in the results variable
     var results = response.data;

     // Looping through each result item
     for (var i = 0; i < results.length; i++) {

       // Creating and storing a div tag
       var animalDiv = $("<div>");

       // Creating a paragraph tag with the result item's rating
       var p = $("<p>").text("Rating: " + results[i].rating);

       // Creating and storing an image tag
       var animalImage = $("<img>");
       // Setting the src attribute of the image to a property pulled off the result item
       animalImage.attr("src", results[i].images.fixed_height.url);

       // Appending the paragraph and image tag to the animalDiv
       animalDiv.append(p);
       animalDiv.append(animalImage);

       // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
       $("#gifs-appear-here").prepend(animalDiv);
     }
   });


});
alert('hui');