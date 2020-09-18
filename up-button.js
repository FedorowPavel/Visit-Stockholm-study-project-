window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (scrollPos > 500) {
        document.getElementsByClassName('top-button')[0].style = "opacity: 1";
    } else {
        document.getElementsByClassName('top-button')[0].style = "opacity: 0";
    }


});