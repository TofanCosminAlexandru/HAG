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

function initialize(value){

	var config = {
	apiKey: "AIzaSyCfnDkca7HKVGLekgckbVZWXaEZY-cRbqk",
	authDomain: "hag-game.firebaseapp.com",
	databaseURL: "https://hag-game.firebaseio.com",
	projectId: "hag-game",
	storageBucket: "hag-game.appspot.com",
	messagingSenderId: "791209373333"
	};

	firebase.initializeApp(config);

}

function writeUserData(userId, name, password, lvl, nr_stars, nr_gems) {

  firebase.database().ref('users/' + userId).set({
  	ID: userId,
    username: name,
    pass: password,
    level: lvl,
    stars: nr_stars,
    gems: nr_gems
  });
}

function check_login() {
	var data;

	//var adapt = document.getElementsByClassName("login")[0];
	//adapt.setAttribute('action','levels.html?user=fdasfads');

	firebase.database().ref().once('value').then((snapshot) => {
		var data = snapshot.val();
		console.log(data);
		var log_username = document.getElementById("login-user").value;
		var log_pass = document.getElementById("login-pass").value;
		var check = false;
		//var adapt = document.getElementsByClassName("login")[0];
		
		for(var i=1; i<data.users.length; i++){
			if(log_username == data.users[i].username && data.users[i].pass == log_pass){
				//adapt.setAttribute('action','levels.html?user=' + log_username);
				var check = true;
			}

		}
		if(check == false){
			alert("Wrong Username or Password");
		}else{
			window.location = "levels.html?user="+log_username;
		}
	});
}

var data;

function register_new(){
	var username = document.getElementById("register-user").value;
	var pass = document.getElementById("register-pass").value;
	var confirmpass = document.getElementById("register-confirmpass").value;
	var data;
	//writeUserData(1,"Ana","Mere",0,0,0);
	if(pass != confirmpass){
		alert("Different passwords!");
	}else{

		firebase.database().ref().once('value').then((snapshot) => {
		  this.data = snapshot.val();
		  writeUserData(this.data.users.length,username,pass,0,0,0);
		  //console.log(this.data)
		});
		//console.log(this.data);
		alert("Registration successful HAPPY new LOGIN");
		login();
	}
}

