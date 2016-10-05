var slides = document.querySelectorAll('#slider-frame .slide');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,1000);
var next = document.getElementById('next');
var previous = document.getElementById('prev');

// function nextSlide(){
// 	slides[currentSlide].className = 'slide';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'slide showing';
// };

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
};

function newSlide(){
	goToSlide(currentSlide+1)
};

function oldSlide(){
	goToSlide(currentSlide-1);
};

next.onclick = function(){
	newSlide();
}

prev.onclick = function(){
	oldSlide();
}
