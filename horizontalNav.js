// var a = window.document.defaultView.getComputedStyle(document.getElementsByClassName("level ground")[0], null).getPropertyValue('background-image').split(/['"]/)[1];

console.log(navigator.onLine);

if(navigator.onLine) {
    var box = document.getElementById("box");
    window.addEventListener('mousemove', function (e) {
        if (e.pageX > 120 && e.pageX < 800) {
            box.style.right = (e.pageX - 700) + "px";
        }
    });

    function initialize(value) {
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
    }

    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 27 && document.getElementById("myacount").style.visibility === "visible") {
            var el = document.getElementById("myacount");
            el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
        }
    });

    var user = getParameterByName('user');
    document.getElementsByClassName("usernametitle")[0].innerHTML = user;

    var levels = {
        0: 'level ground',
        1: 'level water',
        2: 'level cloud',
        3: 'level fire'
    };


    firebase.database().ref().once('value').then((snapshot) => {
        var data = snapshot.val();
        var id;
        var found = 0;

        for (var i = 1; i < data.users.length && found === 0; i++) {
            if (data.users[i].username === user) {
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

        var locked = document.getElementsByClassName("level-locked");

        if (level === 0) {
            locked[level].innerHTML = "";
            document.getElementsByClassName("level ground")[0].style.filter = "grayscale(" + 0 + "%)";

            document.getElementsByClassName(levels[level])[0].addEventListener("click", function () {
                location.href = "ground.html?id=" + id + '&user=' + user;
            });
        }
        if (level === 1) {
            locked[level - 1].innerHTML = "Completed";
            document.getElementsByClassName("level ground")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level].innerHTML = "";
            document.getElementsByClassName("level water")[0].style.filter = "grayscale(" + 0 + "%)";

            document.getElementsByClassName(levels[level - 1])[0].addEventListener("click", function () {
                location.href = "ground.html?id=" + id + '&user=' + user;
            });
            document.getElementsByClassName(levels[level])[0].addEventListener("click", function () {
                location.href = "water.html?id=" + id + '&user=' + user;
            });
        }
        if (level === 2) {
            locked[level - 2].innerHTML = "Completed";
            document.getElementsByClassName("level ground")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level - 1].innerHTML = "Completed";
            document.getElementsByClassName("level water")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level].innerHTML = "";
            document.getElementsByClassName("level cloud")[0].style.filter = "grayscale(" + 0 + "%)";

            document.getElementsByClassName(levels[level - 2])[0].addEventListener("click", function () {
                location.href = "ground.html?id=" + id + '&user=' + user;
            });
            document.getElementsByClassName(levels[level - 1])[0].addEventListener("click", function () {
                location.href = "water.html?id=" + id + '&user=' + user;
            });
            document.getElementsByClassName(levels[level])[0].addEventListener("click", function () {
                location.href = "sky.html?id=" + id + '&user=' + user;
            });
        }
        if (level === 3) {
            locked[level - 3].innerHTML = "Completed";
            document.getElementsByClassName("level ground")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level - 2].innerHTML = "Completed";
            document.getElementsByClassName("level water")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level-1].innerHTML = "Completed";
            document.getElementsByClassName("level cloud")[0].style.filter = "grayscale(" + 0 + "%)";
            locked[level].innerHTML = "To Be Continued";
            document.getElementsByClassName("level fire")[0].style.filter = "grayscale(" + 0 + "%)";

            document.getElementsByClassName(levels[level - 3])[0].addEventListener("click", function () {
                location.href = "ground.html?id=" + id + '&user=' + user;
            });
            document.getElementsByClassName(levels[level - 2])[0].addEventListener("click", function () {
                location.href = "water.html?id=" + id + '&user=' + user;
            });
            document.getElementsByClassName(levels[level -1])[0].addEventListener("click", function () {
                location.href = "sky.html?id=" + id + '&user=' + user;
            });
        }
        // }
    });
}
else {
    alert("Offline");
    var box = document.getElementById("box");
    window.addEventListener('mousemove', function (e) {
        if (e.pageX > 120 && e.pageX < 800) {
            box.style.right = (e.pageX - 700) + "px";
        }
    });

    function myacount() {
        var el = document.getElementById("myacount");
        el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
    }

    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 27 && document.getElementById("myacount").style.visibility === "visible") {
            var el = document.getElementById("myacount");
            el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
        }
    });

    document.getElementsByClassName("usernametitle")[0].innerHTML = "User";

    var levels = {
        0: 'level ground',
        1: 'level water',
        2: 'level cloud'
    };

    var locked = document.getElementsByClassName("level-locked");

    locked[0].innerHTML = "";
    document.getElementsByClassName("level ground")[0].style.filter = "grayscale(" + 0 + "%)";
    locked[1].innerHTML = "";
    document.getElementsByClassName("level water")[0].style.filter = "grayscale(" + 0 + "%)";
    locked[2].innerHTML = "";
    document.getElementsByClassName("level cloud")[0].style.filter = "grayscale(" + 0 + "%)";

    document.getElementsByClassName(levels[0])[0].addEventListener("click", function () {
        location.href = "ground.html"
    });
    document.getElementsByClassName(levels[1])[0].addEventListener("click", function () {
        location.href = "water.html";
    });
    document.getElementsByClassName(levels[2])[0].addEventListener("click", function () {
        location.href = "sky.html";
    });
}




