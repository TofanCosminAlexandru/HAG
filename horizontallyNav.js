$(document).on('mousemove', function(e){
    if(e.pageX > 120 && e.pageX < 800){
    	$('.portals').css({
       right:  e.pageX - 700
    });
    }
});