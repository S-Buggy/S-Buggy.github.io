$(function() {
  $('.plus-minus-toggle').on('click', function() {
    $(this).toggleClass('collapsed');
  });
  $('.plus-minus-toggle-2').on('click', function() {
    $(this).toggleClass('collapsed');
  });
});



var $websitescroll= $('.websitescroll');

$websitescroll.on('mouseenter', function () {
    
    $websitescroll.get(0).play();
    
});

$websitescroll.on('mouseout', function () {
    
    $websitescroll.get(0).pause();
    
});


var $filmtitler= $('.filmtitler');

$filmtitler.on('mouseenter', function () {
    
    $filmtitler.get(0).play();
    
});

$filmtitler.on('mouseout', function () {
    
    $filmtitler.get(0).pause();
    
});


var $sparklerposes= $('.sparklerposes');

$sparklerposes.on('mouseenter', function () {
    
    $sparklerposes.get(0).play();
    
});

$sparklerposes.on('mouseout', function () {
    
    $sparklerposes.get(0).pause();
    
});







var $landingandhome= $('.landingandhome');

$landingandhome.on('mouseenter', function () {
    
    $landingandhome.get(0).play();
    
});

$landingandhome.on('mouseout', function () {
    
    $landingandhome.get(0).pause();
    
});


var $whowillimeet= $('.whowillimeet');

$whowillimeet.on('mouseenter', function () {
    
    $whowillimeet.get(0).play();
    
});

$whowillimeet.on('mouseout', function () {
    
    $whowillimeet.get(0).pause();
    
});


var $whatiscare= $('.whatiscare');

$whatiscare.on('mouseenter', function () {
    
    $whatiscare.get(0).play();
    
});

$whatiscare.on('mouseout', function () {
    
    $whatiscare.get(0).pause();
    
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var first_click = true;

function toggleNav(){
    console.log("I AM CLICK")
    if (first_click) {
        console.log("I AM FIRST")
    document.getElementById("mySidenav").style.width = "100px";
//    document.getElementById("main").style.marginLeft = "100px";
    first_click = false;
    } else {
        console.log("I AM SECOND")
        // do stuff for second click
    document.getElementById("mySidenav").style.width = "0";
//    document.getElementById("main").style.marginLeft = "0";
    first_click = true;
    }
}