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
/////GENERAL/MENU FLOATABLE//////
/////////////////////////////////

$(window).scroll(function() {
	if ($(window).scrollTop() >= 150) {
		screenWidth = $(window).width();
		containerWidth = $("#menuflottant").outerWidth(true);
		pos = screenWidth - containerWidth;
		$("#menuflottant").css({
			position: 'fixed',
			left: pos,
			top: '0'
		});
	}
	else {
		$("#menuflottant").css({
			position: 'absolute',
			left: '0',
			top: '150px'
		});
	}
});


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

