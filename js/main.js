/////////////////////////////////
/////GENERAL/MENU MOBILE/////////
/////////////////////////////////
window.onload=function(){
	var bouton = document.getElementById('btnMenu');
	var nav = document.getElementById('nav');
	bouton.onclick = function(e){
		if(nav.style.visibility=="hidden"){
			nav.style.visibility="visible";
		}else{
			nav.style.visibility="hidden";
		}
	};
};


/////////////////////////////////
////////////SLIDER///////////////
/////////////////////////////////


$('.fade').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	draggable: true,
	arrows: false,	
	cssEase: 'linear'
});

