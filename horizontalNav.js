// var a = window.document.defaultView.getComputedStyle(document.getElementsByClassName("level ground")[0], null).getPropertyValue('background-image').split(/['"]/)[1];

var box = document.getElementById("box");
window.addEventListener('mousemove', function(e){
	if(e.pageX > 120 && e.pageX < 800){
        box.style.right = (e.pageX - 700) + "px";
	}
});

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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function myacount() {
    var el = document.getElementById("myacount");
    el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    var user = getParameterByName('user');
    document.getElementsByClassName("usernametitle")[0].innerHTML = user;

    var data;
    firebase.database().ref().once('value').then((snapshot) => {
        var data = snapshot.val();
        var id;
        var found = 0;

        for(var i=1; i<data.users.length && found === 0; i++){
            if(data.users[i].username === user){
                id = data.users[i].ID;
                found = 1;
            }
        }
        var gems = data.users[id].gems;
        document.getElementsByClassName("score-diamond")[0].innerHTML = String(gems);
        var stars = data.users[id].stars;
        document.getElementsByClassName("score-star")[0].innerHTML = String(stars);
    });
}

document.body.addEventListener("keydown", function(e){
    if(e.keyCode === 27 && document.getElementById("myacount").style.visibility === "visible"){
        var el = document.getElementById("myacount");
        el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    }
});