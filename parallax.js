function parallax(){
   var scrolled=$(window).scrollTop();
	$('.parallax').css('margin-top', +(scrolled * 1.1) + 'px');
	$('.parallax-bg').each(function(){
    var fromTop = Math.floor($(this).offset().top/4);
    $(this).css('background-position', 'center -' + (scrolled * 0.25) - fromTop + 'px');
  });
	$('.parallax-bg2').each(function(){
    var fromTop = Math.floor($(this).offset().top/4);
    $(this).css('background-position', 'center ' + ( (scrolled * 0.25) - fromTop ) + 'px');
  });
	$('.parallax-bg-side').css('background-position', (scrolled * 0.25) + 'px center');
}

$(window).scroll(function(){parallax();});
