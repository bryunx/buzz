$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".buzz").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $(".buzz").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $(".buzz").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $(".buzz").finish().animate({
            top: "+=50"
        });
        break;
    }
});