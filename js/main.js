
$( ".togglecontact" ).click(function() {
	$( "#contactform" ).toggle();
	return false;
});


$(function(){	
    var menu = $('nav'),
        pos = menu.offset();
         
        $(window).scroll(function(){
            if($(this).scrollTop() > pos.top &! menu.hasClass('fixed')){
				menu.addClass('fixed');
            } else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.removeClass('fixed');
            }
        });
});

