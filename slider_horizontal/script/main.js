let slideIndex = 1;
showSlide(slideIndex);

function switchSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    let slidesArray = document.getElementsByClassName("slide");
    let buttons = document.getElementsByClassName("button");

    if (n > slidesArray.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slidesArray.length
    } ;

    for (i = 0; i < slidesArray.length; i++) {
       slidesArray[i].className = slidesArray[i].className.replace(" fade", "");
    }

    for (i = 0; i < buttons.length; i++) {
       buttons[i].className = buttons[i].className.replace(" button-filled", "");
    }
    slidesArray[slideIndex-1].className += " fade";
    buttons[slideIndex-1].className += " button-filled";
}

window.setInterval(function(){
    switchSlide(1)
}, 4000);
