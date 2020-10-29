var scrollLine = document.getElementById("progress_line");

window.addEventListener('scroll', function () {
    var documentHeigth = document.body.clientHeight;

    var scrollHeigth = window.scrollY;

    var windowHeigth = window.innerHeight;

    var scrollPercent = (scrollHeigth / (documentHeigth - windowHeigth)) * 100;

    scrollLine.style.width = scrollPercent + "%";

});
