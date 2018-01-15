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
    // var el = document.getElementById("myacount");
    // el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    var el = document.getElementById("myacount");
    el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
}

document.body.addEventListener("keydown", function(e){
    if(e.keyCode === 27 && document.getElementById("myacount").style.visibility === "visible"){
        var el = document.getElementById("myacount");
        el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    }
});

var user = getParameterByName('user');
document.getElementsByClassName("usernametitle")[0].innerHTML = user;

var levels = {
    0 : 'level ground',
    1 : 'level water',
    2 : 'level cloud'
};


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
    document.getElementsByClassName("gems-score")[0].innerHTML = String(gems);
    var stars = data.users[id].stars;
    document.getElementsByClassName("score-star")[0].innerHTML = String(stars);
    document.getElementsByClassName("stars-score")[0].innerHTML = String(stars);
    level = data.users[id].level;

    var locked = document.getElementsByClassName("level-locked")

    // if(locked[level].innerHTML === "Locked" && level)

    // if(locked[level].innerHTML == "Locked"){
    console.log(level);
    //document.getElementsByClassName(levels[level])
    // console.log(document.getElementsByClassName(levels[level])[0].addEventListener());
    if(level === 0){
        // console.log(document.getElementsByClassName(levels[level])[0]);
        // console.log(levels[level]);
        // console.log(document.getElementsByClassName(levels[level])[0]);
        locked[level].innerHTML = "";
        document.getElementsByClassName("level ground")[0].style.filter="grayscale(" + 0 + "%)";

        document.getElementsByClassName(levels[level])[0].addEventListener("click", function(e){
            location.href = "ground.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
    }
    if(level === 1){
        console.log(document.getElementsByClassName(levels[level-1])[0]);
        console.log(levels[level]);
        console.log(document.getElementsByClassName(levels[level])[0]);
        locked[level-1].innerHTML = "";
        document.getElementsByClassName("level ground")[0].style.filter="grayscale(" + 0 + "%)";
        locked[level].innerHTML = "";
        document.getElementsByClassName("level water")[0].style.filter="grayscale(" + 0 + "%)";

        document.getElementsByClassName(levels[level-1])[0].addEventListener("click", function(e){
            location.href = "ground.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
        document.getElementsByClassName(levels[level])[0].addEventListener("click", function(e){
            location.href = "water.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
    }
    if(level === 2){
        console.log(document.getElementsByClassName(levels[level])[0]);
        console.log(levels[level]);
        console.log(document.getElementsByClassName(levels[level])[0]);
        document.getElementsByClassName(levels[level-2])[0].addEventListener("click", function(e){
            location.href = "ground.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
        document.getElementsByClassName(levels[level-1])[0].addEventListener("click", function(e){
            location.href = "water.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
        document.getElementsByClassName(levels[level])[0].addEventListener("click", function(e){
            location.href = "sky.html?id="+id+'&user='+user;
            // window.location = "levels.html?user="+log_username;
        });
    }
    // }
});




