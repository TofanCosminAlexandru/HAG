
var box = document.getElementById("box");
window.addEventListener('mousemove', function(e){
	if(e.pageX > 120 && e.pageX < 800){
		var left = (e.pageX-700)+"px";
		box.style.right = left;
	}
});

