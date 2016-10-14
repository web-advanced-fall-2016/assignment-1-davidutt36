var sliders = new Array();
window.onload = function() {
	var options = {
		transitionTime:650,
		touchTransitionTime:00
	};
	var slidersElements = document.querySelectorAll('.slider');

	for(var i = 0 ; i < slidersElements.length ; i++) {
		sliders.push( new simpleCarousel(i,slidersElements[i],options) );
	}
	for(var i = 0; i < sliders.length; i++) {
		sliders[i].initialize();
	}
}



// function openNav() {
//     document.getElementById("mySidenav").style.width = "440px";
//     document.getElementById("topbar").style.marginLeft = "440px";
// }
//
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("topbar").style.marginLeft= "0";
// }
