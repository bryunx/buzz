//When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(document).ready(function(){
	console.log("Let's get ready to party with jQuery!");
})

//Give all images inside of an article tag the class of image-center (this class defined inside of the style tag in the head).
$(document).ready(function(){
	$("article img").addClass("image-center");
})

//Remove the last paragraph in the article.
$(document).ready(function(){
	$("article p:last-child").remove();
})

//Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
$(document).ready(function(){
	$("#title").css("font-size", Math.random()*100);
})

//Add an item to the list; it can say whatever you want.
$(document).ready(function(){
	$("ol").append($("<li>", {text:"Hello World"}));
})

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$(document).ready(function(){
	$("aside").empty();
	$("aside").append($("<p>",{text:"Sorry about that list"}));
})

//When you change the numbers in three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(document).ready(function(){
	$(".form-control").on('keyup blur change', function() {
      var red = $(".form-control").eq(0).val();
      var blue = $(".form-control").eq(1).val();
      var green = $(".form-control").eq(2).val();
      $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
    });
})

//Add an event listener so that when you click on the image, it is removed from the DOM.
$(document).ready(function(){
    $("img").on("click", function(e){
        console.log($(e.target).remove());
    });
});
