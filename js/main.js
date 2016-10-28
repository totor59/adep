/////////////////////////////////
/////GENERAL/MENU MOBILE/////////
/////////////////////////////////
$("#btnMenu").click(function () {
	    $("#navmobile").toggleClass('open');
});
$("#navmobile li").click(function () {
	            $("#navmobile").removeClass('open');
		        });

/////////////////////////////////
/////GENERAL/MENU FLOATABLE//////
/////////////////////////////////


$(window).scroll(function() {
	if ($(window).scrollTop() >= $(window).height()) {
		screenWidth = $(window).width();
		containerWidth = $("#menuflottant").outerWidth(true);
		pos = screenWidth - containerWidth;
		$("#menuflottant").css({
			position: 'fixed',
			left: pos,
			right: '0',
			top: '0',
			height: '80px'
		});	
		$("#logo").css({
			height: '80px',
			transition: 'height 1s'
		});
		$("#navul").css({
			marginLeft: '85px',
		});

	}
	else {
		$("#menuflottant").css({
			position: 'absolute',
			left: '0',
			right: '0',
			top: '90vh',
			height: '10vh'
		});	
		$("#logo").css({
			height: '0px'
		});
		$("#navul").css({
			marginLeft: '0px',
		});

	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() >= $(window).height()) {
		screenWidth = $(window).width();
		containerWidth = $("#menuflottantpage").outerWidth(true);
		pos = screenWidth - containerWidth;
		$("#menuflottantpage").css({
			position: 'fixed',
			left: pos,
			right: '0',
			top: '0',
			height: '80px'
		});
		$("#logo").css({
			height: '80px',
			transition: 'height 1s'
		});
		$("#navul").css({
			marginLeft: '85px',
		});
	}
	else {
		$("#menuflottantpage").css({
			position: 'absolute',
			left: '0',
			right: '0',
			top: '150px',
			height: '30px'
		});
		$("#logo").css({
			height: '0px'
		});
		$("#navul").css({
			marginLeft: '0px',
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











