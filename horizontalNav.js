// var a = window.document.defaultView.getComputedStyle(document.getElementsByClassName("level ground")[0], null).getPropertyValue('background-image').split(/['"]/)[1];

var box = document.getElementById("box");
window.addEventListener('mousemove', function(e){
	if(e.pageX > 120 && e.pageX < 800){
        box.style.right = (e.pageX - 700) + "px";
	}
});
