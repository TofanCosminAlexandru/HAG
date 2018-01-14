var displayedImage = document.querySelector('.displayed-img'); // imaginea principala
var secondaryImages = document.querySelector('.secondary-images'); // bara cu imaginile secundare

secondaryImages.onclick = function(e) {
	if(e.target && e.target.nodeName === 'IMG') { // daca element din div este apasat si acel element este img
		displayedImage.setAttribute('src', e.target.getAttribute('src'));
	}
};

var logo = document.getElementsByClassName("logo-header");
logo[0].style.visibility = 'visible';

function login(){
	var logo = document.getElementsByClassName("logo-header");
	var check = document.getElementById("register");
	var el = document.getElementById("login");

	if (check.style.visibility === "visible") {
    	check.style.visibility = "hidden";
		logo[0].style.visibility = "visible";
	}

	el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
	logo[0].style.visibility = (logo[0].style.visibility === "hidden") ? "visible" : "hidden";
				
}	

function register(){
   	var logo = document.getElementsByClassName("logo-header");
	var check = document.getElementById("login");
	var el = document.getElementById("register");

	if (check.style.visibility === "visible") {
	    check.style.visibility = "hidden";
	    logo[0].style.visibility = "visible";
	}

	el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
	logo[0].style.visibility = (logo[0].style.visibility === "hidden") ? "visible" : "hidden";
}

function check_login() {
	var data = '{ "users" : [' +
				'{ "username":"John" , "password":"Doe" },' +
				'{ "username":"Anna" , "password":"Smith" },' +
				'{ "username":"Peter" , "password":"Jones" } ]}';

	var obj = JSON.parse(data);
	var username = document.getElementById("login-user").value;
	var pass = document.getElementById("login-pass").value;
	var check = false;
	var adapt = document.getElementsByClassName("login")[0];
	for(var i=0; i<obj.users.length; i++){
		if(username === obj.users[i].username && obj.users[i].password === pass){
			adapt.setAttribute('action','levels.html?user=' + username);
			alert(adapt.action);
			var check = true;		
		}
	}
	if(check === false){
		alert("Wrong Username or Password");
	}
}