window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    if (scrollPos > 250) {
        document.getElementsByClassName('top-button')[0].style = "opacity: 1";
    } else {
        document.getElementsByClassName('top-button')[0].style = "opacity: 0";
    }


});