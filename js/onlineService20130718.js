$(function(){
	
	var showact = 1;
	
	$('.onlineService').hide();
	$('.box_os').show();		
	
	$('.onlineService .ico_os').click(function()
	{		
		$('.onlineService').hide();
		$('.box_os').show();
	});
	$('.os_x').click(function()
	{
		$('.box_os').hide();
		$('.onlineService').show();
	});
	$boxOsFun = function(){var st=$(document).scrollTop();if (!window.XMLHttpRequest) {$('.box_os').css('top',st+104);$('.onlineService').css('top',st+104);}};
	$(window).bind('scroll', $boxOsFun);
	$boxOsFun();
	
	
	$('.acbox .ico_pp').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	$('.acbox .ico_gt').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	
	$('.onlineService .ico_pp').hover(function(){
		$(this).stop().animate({width:'87px'},'fast');
		},function(){
		$(this).stop().animate({width:'39px'},'fast');
		}
	);
	$('.onlineService .ico_gt').hover(function(){
		$(this).stop().animate({width:'97px'},'fast');
		},function(){
		$(this).stop().animate({width:'39px'},'fast');
		}
	);
	
	$('.ico_gt').click(function(){
		$("html, body").animate({scrollTop:0}, 1);
	})
	
	


});