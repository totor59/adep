/////////////////////////////////
/////GENERAL/MENU MOBILE/////////
/////////////////////////////////
window.onload=function(){
	var bouton = document.getElementById('btnMenu');
	var nav = document.getElementById('navmobile');
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
			right: '0',
			top: '0'
		});
		}
	else {
		$("#menuflottant").css({
			position: 'absolute',
			left: '0',
			right: '0',
			top: '150px',
		});	
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() >= 150) {
		screenWidth = $(window).width();
		containerWidth = $("#menuflottant").outerWidth(true);
		pos = screenWidth - containerWidth;
		$("#logo").css({
			display: 'inline-block'
		});
	}
	else {
		$("#logo").css({
			display: 'none'
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

