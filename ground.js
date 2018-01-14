var diamonds = 0;
var points = 0;
var count_damage_bridge = 1;
var count_forester_tips = 2, count_forester_questions = 1;
var count_willow_tips = 1, count_willow_questions = 1;
var keyGate1 = 0, keyGate2 = 0;
var count_flower_tips = 1, count_flower_questions = 1;
var count_priest_tips = 1;
var count_human1_tips = 1;
var gate1_visited = 0;
var gate2_visited = 0;
var count_human6_tips = 1;
var count_wolf_tips = 1, count_wolf_questions = 1;
var count_human5_tips = 1;
var count_witch_tips = 1, count_witch_questions = 1;
var count_well_tips = 1;
var count_creatures_tips = 1;

var drawCanvasImage = function(ctx, image, row, col) {
    return function() {
        ctx.drawImage(image, row * 200, col * 200, 200, 200);
    }
};

var drawCanvasImageElem = function(ctx, image, row, col) {
    return function() {
        ctx.drawImage(image, col * 200, row * 200, 200, 200);
    }
};

function init() {
    var canvas = document.getElementById('canvas');
    var height = window.innerHeight;
    var width = window.innerWidth;

    canvas.style.width = width  + "px";
    canvas.style.height = height + "px";

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 15; j++) {
                var image = new Image();
                image.onload = drawCanvasImage(ctx, image, i, j);
                image.src = "images/grass.jpg";
            }
        }
    }

    var ground = [["tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "tree", "river_lr", "house", "tree", "terrain_lrte", "tree", "human4", "flowers", "human2", "tree", "tree", "mountain", "diamond", "rocky", "rocky", "cave2", "mountain"],
        ["tree", "tree", "tree", "tree", "river_clb", "river_crt", "flowers", "terrain_lr", "house", "house", "gate1", "fountain", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["rocky_tree", "rocky_tree", "tree", "willow", "grass", "bridge_lr", "terrain_tb", "terrain_b", "terrain_tb", "terrain_crt", "house", "house", "human3", "tree", "tree", "tree", "tree", "tree", "tree", "mountain"],
        ["rocky_tree", "cave1", "tree", "flowers", "grass", "river_clb", "river_crt", "stone", "stone", "terrain_clb", "terrain_crt", "tree", "terrain_l", "human1", "house", "house", "tree", "witch", "whouse", "tree"],
        ["rocky_tree", "rocky", "tree", "flowers", "grass", "stone", "river_clb", "river_tb", "river_crt", "grass", "terrain_clb", "terrain_tb", "terrain_r", "house", "human5", "tree", "tree", "dgrass", "wood", "tree"],
        ["tree", "rocky", "tree", "tree", "grass", "grass", "stone", "stone", "river_clb", "river_crt", "stone", "grass", "terrain_lr", "tree", "terrain_lr", "tree", "dgrass", "dgrass", "crack", "tree"],
        ["tree", "tree", "dog", "tree", "tree", "tree", "grass", "stone", "stone", "river_lr", "stone", "house", "terrain_l", "terrain_tb", "terrain_r", "tree", "crack", "dtree", "dgrass", "tree"],
        ["tree", "fhouse", "grass", "wood", "wood", "wood", "terrain_clt", "terrain_tb", "terrain_tb", "bridge_blr", "house", "house", "human6", "house", "terrain_clb", "gate2", "dgrass", "dgrass", "dgrass", "tree"],
        ["tree", "terrain_clb", "terrain_tb", "terrain_tb", "forester", "terrain_tb", "terrain_crb", "tree", "tree", "river_clb", "river_tb", "river_t", "bridge_tb", "river_tb", "river_crt", "tree", "grave", "grave", "grave", "tree"],
        ["tree", "wood", "tree", "tree", "terrain_lrbe", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "terrain_lr", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "tree", "tree", "flowers", "grass", "grass", "grass", "tree", "diamond", "grass", "tree", "tree", "terrain_lr", "tree", "river_clb", "river_tb", "river_crt", "tree", "tree", "tree"],
        ["tree", "flowers", "grass", "grass", "grass", "tree", "grass", "tree", "tree", "grass", "tree", "river_lr", "terrain_clb", "terrain_tb", "terrain_tb", "wolf", "bridge_lr", "terrain_tb", "terrain_tbre", "tree"],
        ["tree", "grass", "grass", "flowers", "tree", "tree", "grass", "grass", "grass", "grass", "tree", "river_lr", "tree", "tree", "tree", "tree", "river_clb", "river_crt", "well", "tree"],
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree"]];

    var game = [["tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "tree", "river_lr", "house", "tree", "terrain_lrte", "tree", "human4", "flowers", "human2", "tree", "tree", "mountain", "rocky", "rocky", "rocky", "cave2", "mountain"],
        ["tree", "tree", "tree", "tree", "river_clb", "river_crt", "flowers", "terrain_lr", "house", "house", "gate1", "fountain", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "willow", "grass", "bridge_lr", "terrain_tb", "terrain_b", "terrain_tb", "terrain_crt", "house", "house", "human3", "tree", "tree", "tree", "tree", "tree", "tree", "mountain"],
        ["tree", "cave1", "tree", "flowers", "grass", "river_clb", "river_crt", "stone", "stone", "terrain_clb", "terrain_crt", "tree", "terrain_l", "human1", "house", "house", "tree", "witch", "whouse", "tree"],
        ["tree", "rocky", "tree", "flowers", "grass", "stone", "river_clb", "river_tb", "river_crt", "grass", "terrain_clb", "terrain_tb", "terrain_r", "house", "human5", "tree", "tree", "dgrass", "wood", "tree"],
        ["tree", "rocky", "tree", "tree", "grass", "grass", "stone", "stone", "river_clb", "river_crt", "stone", "grass", "terrain_lr", "tree", "terrain_lr", "tree", "dgrass", "dgrass", "crack", "tree"],
        ["tree", "tree", "dog", "tree", "tree", "tree", "grass", "stone", "stone", "river_lr", "stone", "house", "terrain_l", "terrain_tb", "terrain_r", "tree", "crack", "dtree", "dgrass", "tree"],
        ["tree", "fhouse", "grass", "wood", "wood", "wood", "terrain_clt", "terrain_tb", "terrain_tb", "bridge_blr", "house", "house", "human6", "house", "terrain_clb", "gate2", "dgrass", "dgrass", "dgrass", "tree"],
        ["tree", "terrain_clb", "terrain_tb", "terrain_tb", "terrain_t", "terrain_tb", "terrain_crb", "tree", "tree", "river_clb", "river_tb", "river_t", "bridge_tb", "river_tb", "river_crt", "tree", "grave", "grave", "grave", "tree"],
        ["tree", "wood", "tree", "tree", "terrain_lrbe", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "terrain_lr", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "tree", "tree", "flowers", "grass", "grass", "grass", "tree", "grass", "grass", "tree", "tree", "terrain_lr", "tree", "river_clb", "river_tb", "river_crt", "tree", "tree", "tree"],
        ["tree", "flowers", "grass", "grass", "grass", "tree", "grass", "tree", "tree", "grass", "tree", "river_lr", "terrain_clb", "terrain_tb", "terrain_tb", "wolf", "bridge_lr", "terrain_tb", "terrain_tbre", "tree"],
        ["tree", "me", "grass", "flowers", "tree", "tree", "grass", "grass", "grass", "grass", "tree", "river_lr", "tree", "tree", "tree", "tree", "river_clb", "river_crt", "well", "tree"],
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree"]];

    var map_elements = {"tree": "images/tree.png",
        "rocky_tree": "images/rocky_tree.png",
        "blanc": "images/blanc.png",
        "dtree": "images/dtree.png",
        "rocky": "images/rocky.jpg",
        "mountain": "images/mountain.png",
        "terrain": "images/terrain.png",
        "wood": "images/wood.png",
        "cave1": "images/cave.png",
        "cave2": "images/cave.png",
        "house": "images/house.png",
        "fhouse": "images/fhouse.png",
        "willow": "images/willow.png",
        "fountain": "images/fountain.png",
        "stone": "images/stone.png",
        "river_lr": "images/river_lr.png",
        "river_tb": "images/river_tb.png",
        "river_clb": "images/river_clb.png",
        "river_crb": "images/river_crb.png",
        "river_clt": "images/river_clt.png",
        "river_crt": "images/river_crt.png",
        "river_t": "images/river_t.png",
        "terrain_lr": "images/terrain_lr.png",
        "terrain_tb": "images/terrain_tb.png",
        "terrain_t": "images/terrain_t.png",
        "terrain_b": "images/terrain_b.png",
        "terrain_l": "images/terrain_l.png",
        "terrain_r": "images/terrain_r.png",
        "terrain_lrte": "images/terrain_lrte.png",
        "terrain_tble": "images/terrain_tble.png",
        "terrain_lrbe": "images/terrain_lrbe.png",
        "terrain_tbre": "images/terrain_tbre.png",
        "terrain_clb": "images/terrain_clb.png",
        "terrain_crb": "images/terrain_crb.png",
        "terrain_clt": "images/terrain_clt.png",
        "terrain_crt": "images/terrain_crt.png",
        "bridge_tb": "images/bridge_tb.png",
        "bridge_lr": "images/bridge_lr.png",
        "bridge_blr": "images/bridge_blr.png",
        "human1": "images/human1.png",
        "human2": "images/human2.png",
        "human3": "images/human3.png",
        "human4": "images/human4.png",
        "human5": "images/human5.png",
        "human6": "images/human6.png",
        "forester": "images/forester.png",
        "spider": "images/spider.png",
        "me": "images/character.png",
        "grass": "images/grass.jpg",
        "dgrass": "images/dgrass.jpg",
        "witch": "images/witch.png",
        "diamond": "images/diamond_map.png",
        "grave": "images/grave.png",
        "well": "images/well.png",
        "dog": "images/dog.png",
        "wolf": "images/wolf.png",
        "crack": "images/crack.png",
        "whouse": "images/whouse.png",
        "gate1": "images/gate1.png",
        "gate2": "images/gate2.png",
        "flowers": "images/flowers.png"};

    for (i = 0; i < ground.length; i++) {
        for (j = 0; j < ground[i].length; j++) {
            if (ground[i][j] === "bridge_tb") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["river_tb"];
            }
            else if(ground[i][j] === "bridge_lr" || ground[i][j] === "bridge_blr") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["river_lr"];
            }
            else if((i === 7 && j === 17) || (i === 8 && j === 15) || ground[i][j] === "grave" || ground[i][j] === "crack"  || ground[i][j] === "whouse" || (ground[i][j] === "wood" && j === 18)) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["dgrass"];
            }
            else if(ground[i][j] === "cave1" || ground[i][j] === "cave2" || ground[i][j] === "mountain" || (ground[i][j] === "diamond" && i === 1) || ((i === 3 || i === 4 || i === 5) && (j === 0 || j === 1))) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["rocky"];
            }
            else if(ground[i][j] === "forester") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["terrain_t"];
                image.src = map_elements["terrain_t"];
            }
            else if(ground[i][j] === "human1") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["terrain_tbre"];
            }
            else if(ground[i][j] === "fhouse" || ground[i][j] === "human3" || ground[i][j] === "human5") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["terrain_lrte"];
            }
            else if(ground[i][j] === "human6") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["terrain_lr"];
            }
            else if(ground[i][j] === "wolf") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["terrain_tb"];
            }

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, i, j);
            image.src = map_elements[ground[i][j]];
        }
    }

    var charI = getCharactherCoord("me")[0];
    var charJ = getCharactherCoord("me")[1];
    image = new Image();
    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
    image.src = map_elements["me"];

    var pos=0;
    function moveSpider(){
        var positionI = [6, 6, 7, 6];
        var positionJ = [16, 17, 18, 17];

        image = new Image();
        image.onload = drawCanvasImageElem(ctx, image, positionI[(pos%4)], positionJ[(pos%4)]);
        image.src = map_elements["dgrass"];

        image = new Image();
        image.onload = drawCanvasImageElem(ctx, image, positionI[(pos+1)%4], positionJ[(pos+1)%4]);
        image.src = map_elements["spider"];

        ground[positionI[(pos%4)]][positionJ[(pos%4)]] = "dgrass";
        ground[positionI[(pos+1)%4]][positionJ[(pos+1)%4]] = "spider";

        if(positionI[(pos+1)%4] === getCharactherCoord("me")[0] && positionJ[(pos+1)%4] === getCharactherCoord("me")[1]){
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 8, 14);
            image.src = map_elements["me"];

            game[positionI[(pos+1)%4]][positionJ[(pos+1)%4]] = ground[positionI[(pos+1)%4]][positionJ[(pos+1)%4]];
            game[8][14] = "me";

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, positionI[(pos+1)%4], positionJ[(pos+1)%4]);
            image.src = map_elements["dgrass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, positionI[(pos+1)%4], positionJ[(pos+1)%4]);
            image.src = map_elements["spider"];
        }

        pos++;
    }

    setInterval(moveSpider, 3000);

    var map = {};
    document.body.addEventListener("keydown", function(e){
        map[e.keyCode] = e.type === 'keydown';
        if(map[69]){
            rightUpDiagonal();
            map = {};
        }
        if(map[81]) {
            leftUpDiagonal();
            map = {};
        }
        if(map[90]) {
            leftDownDiagonal();
            map = {};
        }
        if(map[67]) {
            rightDownDiagonal();
            map = {};
        }
        else if(map[37] || map[65]){
            leftArrowPressed();
            map = {};
        }
        else if(map[39] || map[68]){
            rightArrowPressed();
            map = {};
        }
        else if(map[38] || map[87]){
            upArrowPressed();
            map = {};
        }
        else if(map[40] || map[83]){
            downArrowPressed();
            map = {};
        }
        e.preventDefault();
        return false;
    });

    function leftArrowPressed() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveLeft(charI, charJ) === true) {
            if(ground[charI][charJ - 1] === "diamond"){
                diamonds++;
                document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ - 1);
                image.src = map_elements[game[charI][charJ - 1]];

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ - 1);
                image.src = map_elements["me"];

                ground[charI][charJ - 1] = game[charI][charJ -1];
                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
                console.log("Numarul de diamante: ", diamonds);

                if(getCharactherCoord("me")[0] === 11 && getCharactherCoord("me")[1] === 8){
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "You can find diamonds in your journey. <br> Collect as many as you can and compete with others.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI][charJ -1] === "forester"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ -1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_forester_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The forester of this region salutes you." + "<br>" + "To pass, you must answer a question.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI][charJ - 1] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 8, 14);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[8][14] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(ground[charI][charJ - 1] === "willow"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ -1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    var el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function rightArrowPressed() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveRight(charI, charJ) === true) {
            if(ground[charI][charJ + 1] === "cave2"){
                var cave1I = getCharactherCoord("cave1")[0];
                var cave1J = getCharactherCoord("cave1")[1];

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, cave1I, cave1J);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[cave1I][cave1J] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(ground[charI][charJ + 1] === "wolf"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_wolf_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Auuuuuu.. the howl was so strong that it scaried all the dogs away! Auuuuuuu auuuuu questiooooooon!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI][charJ + 1] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 8, 14);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[8][14] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(charI === 8 && charJ + 1 === 18){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_creatures_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Sometimes you'll find creatures that mark their territory. Try not to stay in their way.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(keyGate2 === 0 && (charI === 8 && charJ === 14)){
                el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "You'll need a key to enter";
                document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                el.style.visibility = "visible";
            }
            else if(ground[charI][charJ + 1] === "forester"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_forester_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The forester of this region salutes you." + "<br>" + "To pass, you must answer a question.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI][charJ + 1] === "human1"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_human1_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "I don't a key to the Royal House, but I can give you something better: free beer from the house";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
        else if(getCharactherCoord("me")[0] === 8 && getCharactherCoord("me")[1]+1 === 9){
            if(count_damage_bridge > 0) {
                var el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "Unfortunately this bridge is broken. You'll need to find another way to the village.";
                document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                el.style.visibility = "visible";
                count_damage_bridge-=1;
            }
        }
    }

    function upArrowPressed() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];
        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveUp(charI, charJ) === true) {
            if(ground[charI - 1][charJ] === "cave1"){
                var cave2I = getCharactherCoord("cave2")[0];
                var cave2J = getCharactherCoord("cave2")[1];

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, cave2I, cave2J);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[cave2I][cave2J] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

            } else if(ground[charI - 1][charJ] === "forester"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_forester_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The forester of this region salutes you." + "<br>" + "To pass, you must answer a question.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(charI - 1 === 4 && charJ === 4){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI-1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 8, 14);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[8][14] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(ground[charI - 1][charJ] === "witch"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_witch_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "So you've come for a question. Very well but be quick or you'll be the next ingredient for my soop!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }

            }
            else if(ground[charI - 1][charJ] === "willow"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(charI - 1 === 1 && charJ === 10){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_flower_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The king and queen wish you all the best in your adventures. <br> We have a token of respect for you: a questiooon!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ] === "human3"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_priest_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Do you want to visit their Royal Highnesses? Wa-wait here! I think I have a key down in the cellars.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ] === "human5"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_human5_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Sorry, I don't have any keys. Do you wanna to dance?";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ] === "dog"){
                var el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "Wouuufff.. wouuufff";
                document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                el.style.visibility = "visible";
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function downArrowPressed() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveDown(charI, charJ) === true) {
            if((gate1_visited === 0 || gate2_visited === 0) && (charI === 7 && charJ === 12)){
                var el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "You must first prove worthy of venturing into these dangerous lands. <br> Answer the witches and the kings question and then come back. <br> Here's the key to the cemetery.";
                document.getElementsByClassName("indication")[0].style = "margin-top: -25px";
                keyGate2 = 1;
                el.style.visibility = "visible";
            }
            else if(ground[charI + 1][charJ] === "human6"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_human6_tips > 0 && gate2_visited === 1 && gate1_visited === 1) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Good, good!. You're free to go! Beware of cunning creatures.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI + 1][charJ] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 4, 17);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[4][17] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(ground[charI + 1][charJ] === "well"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_well_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "You have done Chapter 1. Well done!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function rightUpDiagonal(){
        getCharactherCoord();
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function () {
                return false;
            }
        }
        else
        if(checkMoveRightUpDiagonal(charI, charJ) === true) {
            if(keyGate1 === 0 && (charI === 3 && charJ === 9)){
                el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "You'll need a key to enter";
                document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                el.style.visibility = "visible";
            }
            else if(charI - 1 === 1 && charJ + 1 === 11){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_flower_tips > 0) {
                    var el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The king and queen wish you all the best in your adventures. <br> We have a token of respect for you: a questiooon!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else if(charI - 1 === 4 && charJ + 1 === 4){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ+1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI-1][charJ+1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(charI - 1 === 3 && charJ + 1 === 4){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ+1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI-1][charJ+1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ + 1] === "human1"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_human1_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "I don't a key to the Royal House, but I can give you something better: free beer from the house";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }
            else if(ground[charI - 1][charJ] === "forester"){
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function leftUpDiagonal() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveLeftUpDiagonal(charI, charJ) === true) {
            if(ground[charI - 1][charJ -1] === "willow"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ-1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI-1][charJ-1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];


                if(count_willow_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Hello wanderer! From my magical branches, I summon you a question!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }

            }
            else if(ground[charI - 1][charJ -1] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 8, 14);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[8][14] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else if(ground[charI - 1][charJ] === "forester"){
            }
            else if(ground[charI - 1][charJ -1] === "diamond"){
                diamonds++;

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ - 1);
                image.src = map_elements[game[charI - 1][charJ - 1]];

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ - 1);
                image.src = map_elements["me"];

                ground[charI - 1][charJ - 1] = game[charI - 1][charJ -1];
                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
                console.log("Numarul de diamante: ", diamonds);

                if(getCharactherCoord("me")[0] === 11 && getCharactherCoord("me")[1] === 8){
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = 'You can find diamonds in your journey. <br> Collect as many as you can and compete with others.';
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }

            }
            else if(charI - 1 === 1 && charJ - 1 === 9){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ-1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI-1][charJ-1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_flower_tips > 0) {
                    var el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "The king and queen wish you all the best in your adventures. <br> We have a token of respect for you: a questiooon!";
                    document.getElementsByClassName("indication")[0].style = "margin-top: -5px";
                    el.style.visibility = "visible";
                }
            }

            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI - 1, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI - 1][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function leftDownDiagonal() {
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveLeftDownDiagonal(charI, charJ) === true) {
            if((gate1_visited === 0 || gate2_visited === 0) && (charI === 7 && charJ === 13)){
                var el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "You must first prove worthy of venturing into these dangerous lands. <br> Answer the witches and the kings question and then come back. <br> Here's the key to the cemetery.";
                document.getElementsByClassName("indication")[0].style = "margin-top: -25px";
                el.style.visibility = "visible";
            }
            else if(ground[charI + 1][charJ - 1] === "human6" && gate2_visited === 1 && gate1_visited === 1) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];

                if(count_human6_tips > 0) {
                    el = document.getElementsByClassName("indication_div_container")[0];
                    document.getElementById("indication_text").innerHTML = "Good, good!. You're free to go! Beware of cunning creatures.";
                    document.getElementsByClassName("indication")[0].style = "margin-top: 0";
                    el.style.visibility = "visible";
                }
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ - 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ - 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function rightDownDiagonal(){
        var charI = getCharactherCoord("me")[0];
        var charJ = getCharactherCoord("me")[1];

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function (e) {
                return false;
            }
        }
        else
        if(checkMoveRightDownDiagonal(charI, charJ) === true) {
            if(keyGate2 === 0 && (charI === 7 && charJ === 14)){
                var el = document.getElementsByClassName("indication_div_container")[0];
                document.getElementById("indication_text").innerHTML = "You'll need a key to enter";
                el.style.visibility = "visible";
            }
            else if(ground[charI + 1][charJ + 1] === "spider"){
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 4, 17);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[4][17] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
            else {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI + 1, charJ + 1);
                image.src = map_elements["me"];

                game[charI][charJ] = ground[charI][charJ];
                game[charI + 1][charJ + 1] = "me";

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[ground[charI][charJ]];
            }
        }
    }

    function getCharactherCoord(obj){
        var coord = [];
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 20; j++) {
                if(game[i][j] === obj) {
                    coord.push(i);
                    coord.push(j);
                }
            }
        }
        return coord;
    }

    function getObjectCoord(obj){
        var coord = [];
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 20; j++) {
                if(ground[i][j] === obj) {
                    coord.push(i);
                    coord.push(j);
                }
            }
        }
        return coord;
    }

    function checkMoveLeft(charI, charJ) {
        return game[charI][charJ - 1] === "grass" || game[charI][charJ - 1] === "flowers" || game[charI][charJ - 1] === "terrain_lr" ||
            game[charI][charJ - 1] === "terrain_tb" || game[charI][charJ - 1] === "terrain_t" || game[charI][charJ - 1] === "terrain_b" || game[charI][charJ - 1] === "terrain_l"
            || game[charI][charJ - 1] === "terrain_r" || game[charI][charJ - 1] === "terrain_lrte" || game[charI][charJ - 1] === "terrain_tble" || game[charI][charJ - 1] === "terrain_lrbe"
            || game[charI][charJ - 1] === "terrain_tbre" || game[charI][charJ - 1] === "terrain_clb" || game[charI][charJ - 1] === "terrain_crb" || game[charI][charJ - 1] === "terrain_clt"
            || game[charI][charJ - 1] === "terrain_crt" || game[charI][charJ - 1] === "dgrass" || game[charI][charJ - 1] === "rocky" || game[charI][charJ - 1] === "forester" || game[charI][charJ - 1] === "dog"
            || game[charI][charJ - 1] === "bridge_lr" || game[charI][charJ - 1] === "bridge_tb" || game[charI][charJ - 1] === "cave1" || game[charI][charJ - 1] === "cave2"
            || game[charI][charJ - 1] === "gate1" || game[charI][charJ - 1] === "gate2" || game[charI][charJ - 1] === "willow"
            || game[charI][charJ - 1] === "human1" || game[charI][charJ - 1] === "human2" || game[charI][charJ - 1] === "human3"
            || game[charI][charJ - 1] === "human4" || game[charI][charJ - 1] === "human5" || game[charI][charJ - 1] === "human6" || game[charI][charJ - 1] === "spider"
            || game[charI][charJ - 1] === "witch" || game[charI][charJ - 1] === "wolf" || game[charI][charJ - 1] === "diamond" || game[charI][charJ - 1] === "well";
    }

    function checkMoveRight(charI, charJ) {
        return game[charI][charJ + 1] === "grass" || game[charI][charJ + 1] === "flowers" || game[charI][charJ + 1] === "terrain_lr" ||
            game[charI][charJ + 1] === "terrain_tb" || game[charI][charJ + 1] === "terrain_t" || game[charI][charJ + 1] === "terrain_b" || game[charI][charJ + 1] === "terrain_l"
            || game[charI][charJ + 1] === "terrain_r" || game[charI][charJ + 1] === "terrain_lrte" || game[charI][charJ + 1] === "terrain_tble" || game[charI][charJ + 1] === "terrain_lrbe"
            || game[charI][charJ + 1] === "terrain_tbre" || game[charI][charJ + 1] === "terrain_clb" || game[charI][charJ + 1] === "terrain_crb" || game[charI][charJ + 1] === "terrain_clt"
            || game[charI][charJ + 1] === "terrain_crt" || game[charI][charJ + 1] === "dgrass" || game[charI][charJ + 1] === "rocky" || game[charI][charJ + 1] === "forester" || game[charI][charJ + 1] === "dog"
            || game[charI][charJ + 1] === "bridge_lr" || game[charI][charJ + 1] === "bridge_tb" || game[charI][charJ + 1] === "cave1" || game[charI][charJ + 1] === "cave2"
            || game[charI][charJ + 1] === "gate1" || game[charI][charJ + 1] === "gate2" || game[charI][charJ + 1] === "willow"
            || game[charI][charJ + 1] === "human1" || game[charI][charJ + 1] === "human2" || game[charI][charJ + 1] === "human3"
            || game[charI][charJ + 1] === "human4" || game[charI][charJ + 1] === "human5" || game[charI][charJ + 1] === "human6" || game[charI][charJ + 1] === "spider"
            || game[charI][charJ + 1] === "witch" || game[charI][charJ + 1] === "wolf" || game[charI][charJ + 1] === "diamond" || game[charI][charJ + 1] === "well";
    }

    function checkMoveUp(charI, charJ) {
        return game[charI - 1][charJ] === "grass" || game[charI - 1][charJ] === "flowers" || game[charI - 1][charJ] === "terrain_lr" ||
            game[charI - 1][charJ] === "terrain_tb" || game[charI - 1][charJ] === "terrain_t" || game[charI - 1][charJ] === "terrain_b" || game[charI - 1][charJ] === "terrain_l"
            || game[charI - 1][charJ] === "terrain_r" || game[charI - 1][charJ] === "terrain_lrte" || game[charI - 1][charJ] === "terrain_tble" || game[charI - 1][charJ] === "terrain_lrbe"
            || game[charI - 1][charJ] === "terrain_tbre" || game[charI - 1][charJ] === "terrain_clb" || game[charI - 1][charJ] === "terrain_crb" || game[charI - 1][charJ] === "terrain_clt"
            || game[charI - 1][charJ] === "terrain_crt" || game[charI - 1][charJ] === "dgrass" || game[charI - 1][charJ] === "rocky" || game[charI - 1][charJ] === "forester" || game[charI - 1][charJ] === "dog"
            || game[charI - 1][charJ] === "bridge_lr" || game[charI - 1][charJ] === "bridge_tb" || game[charI - 1][charJ] === "cave1" || game[charI - 1][charJ] === "cave2"
            || game[charI - 1][charJ] === "gate1" || game[charI - 1][charJ] === "gate2" || game[charI - 1][charJ] === "willow"
            || game[charI - 1][charJ] === "human1" || game[charI - 1][charJ] === "human2" || game[charI - 1][charJ] === "human3"
            || game[charI - 1][charJ] === "human4" || game[charI - 1][charJ] === "human5" || game[charI - 1][charJ] === "human6" || game[charI - 1][charJ] === "spider"
            || game[charI - 1][charJ] === "witch" || game[charI - 1][charJ] === "wolf" || game[charI - 1][charJ] === "diamond" || game[charI - 1][charJ] === "well";
    }

    function checkMoveDown(charI, charJ) {
        return game[charI + 1][charJ] === "grass" || game[charI + 1][charJ] === "flowers" || game[charI + 1][charJ] === "terrain_lr" ||
            game[charI + 1][charJ] === "terrain_tb" || game[charI + 1][charJ] === "terrain_t" || game[charI + 1][charJ] === "terrain_b" || game[charI + 1][charJ] === "terrain_l"
            || game[charI + 1][charJ] === "terrain_r" || game[charI + 1][charJ] === "terrain_lrte" || game[charI + 1][charJ] === "terrain_tble" || game[charI + 1][charJ] === "terrain_lrbe"
            || game[charI + 1][charJ] === "terrain_tbre" || game[charI + 1][charJ] === "terrain_clb" || game[charI + 1][charJ] === "terrain_crb" || game[charI + 1][charJ] === "terrain_clt"
            || game[charI + 1][charJ] === "terrain_crt" || game[charI + 1][charJ] === "dgrass" || game[charI + 1][charJ] === "rocky" || game[charI + 1][charJ] === "forester" || game[charI + 1][charJ] === "dog"
            || game[charI + 1][charJ] === "bridge_lr" || game[charI + 1][charJ] === "bridge_tb" || game[charI + 1][charJ] === "cave1" || game[charI + 1][charJ] === "cave2"
            || game[charI + 1][charJ] === "gate1" || game[charI + 1][charJ] === "gate2" || game[charI + 1][charJ] === "willow"
            || game[charI + 1][charJ] === "human1" || game[charI + 1][charJ] === "human2" || game[charI + 1][charJ] === "human3"
            || game[charI + 1][charJ] === "human4" || game[charI + 1][charJ] === "human5" || game[charI + 1][charJ] === "human6" || game[charI + 1][charJ] === "spider"
            || game[charI + 1][charJ] === "witch" || game[charI + 1][charJ] === "wolf" || game[charI + 1][charJ] === "diamond" || game[charI + 1][charJ] === "well";
    }

    function checkMoveRightUpDiagonal(charI, charJ){
        return game[charI - 1][charJ + 1] === "grass" || game[charI - 1][charJ + 1] === "flowers" || game[charI - 1][charJ + 1] === "terrain_lr" ||
            game[charI - 1][charJ + 1] === "terrain_tb" || game[charI - 1][charJ + 1] === "terrain_t" || game[charI - 1][charJ + 1] === "terrain_b" || game[charI - 1][charJ + 1] === "terrain_l"
            || game[charI - 1][charJ + 1] === "terrain_r" || game[charI - 1][charJ + 1] === "terrain_lrte" || game[charI - 1][charJ + 1] === "terrain_tble" || game[charI - 1][charJ + 1] === "terrain_lrbe"
            || game[charI - 1][charJ + 1] === "terrain_tbre" || game[charI - 1][charJ + 1] === "terrain_clb" || game[charI - 1][charJ + 1] === "terrain_crb" || game[charI - 1][charJ + 1] === "terrain_clt"
            || game[charI - 1][charJ + 1] === "terrain_crt" || game[charI - 1][charJ + 1] === "dgrass" || game[charI - 1][charJ + 1] === "rocky" || game[charI - 1][charJ + 1] === "forester" || game[charI - 1][charJ + 1] === "dog"
            || game[charI - 1][charJ + 1] === "bridge_lr" || game[charI - 1][charJ + 1] === "bridge_tb" || game[charI - 1][charJ + 1] === "cave1" || game[charI - 1][charJ + 1] === "cave2"
            || game[charI - 1][charJ + 1] === "gate1" || game[charI - 1][charJ + 1] === "gate2" || game[charI - 1][charJ + 1] === "willow"
            || game[charI - 1][charJ + 1] === "human1" || game[charI - 1][charJ + 1] === "human2" || game[charI - 1][charJ + 1] === "human3"
            || game[charI - 1][charJ + 1] === "human4" || game[charI - 1][charJ + 1] === "human5" || game[charI - 1][charJ + 1] === "human6" || game[charI - 1][charJ + 1] === "spider"
            || game[charI - 1][charJ + 1] === "witch" || game[charI - 1][charJ + 1] === "wolf" || game[charI - 1][charJ + 1] === "diamond" || game[charI - 1][charJ + 1] === "well";
    }

    function checkMoveLeftUpDiagonal(charI, charJ){
        return game[charI - 1][charJ - 1] === "grass" || game[charI - 1][charJ - 1] === "flowers" || game[charI - 1][charJ - 1] === "terrain_lr" ||
            game[charI - 1][charJ - 1] === "terrain_tb" || game[charI - 1][charJ - 1] === "terrain_t" || game[charI - 1][charJ - 1] === "terrain_b" || game[charI - 1][charJ - 1] === "terrain_l"
            || game[charI - 1][charJ - 1] === "terrain_r" || game[charI - 1][charJ - 1] === "terrain_lrte" || game[charI - 1][charJ - 1] === "terrain_tble" || game[charI - 1][charJ - 1] === "terrain_lrbe"
            || game[charI - 1][charJ - 1] === "terrain_tbre" || game[charI - 1][charJ - 1] === "terrain_clb" || game[charI - 1][charJ - 1] === "terrain_crb" || game[charI - 1][charJ - 1] === "terrain_clt"
            || game[charI - 1][charJ - 1] === "terrain_crt" || game[charI - 1][charJ - 1] === "dgrass" || game[charI - 1][charJ - 1] === "rocky" || game[charI - 1][charJ - 1] === "forester" || game[charI - 1][charJ - 1] === "dog"
            || game[charI - 1][charJ - 1] === "bridge_lr" || game[charI - 1][charJ - 1] === "bridge_tb" || game[charI - 1][charJ - 1] === "cave1" || game[charI - 1][charJ - 1] === "cave2"
            || game[charI - 1][charJ - 1] === "gate1" || game[charI - 1][charJ - 1] === "gate2" || game[charI - 1][charJ - 1] === "willow"
            || game[charI - 1][charJ - 1] === "human1" || game[charI - 1][charJ - 1] === "human2" || game[charI - 1][charJ - 1] === "human3"
            || game[charI - 1][charJ - 1] === "human4" || game[charI - 1][charJ - 1] === "human5" || game[charI - 1][charJ - 1] === "human6" || game[charI - 1][charJ - 1] === "spider"
            || game[charI - 1][charJ - 1] === "witch" || game[charI - 1][charJ - 1] === "wolf" || game[charI - 1][charJ - 1] === "diamond" || game[charI - 1][charJ - 1] === "well";
    }

    function checkMoveLeftDownDiagonal(charI, charJ){
        return game[charI + 1][charJ - 1] === "grass" || game[charI + 1][charJ - 1] === "flowers" || game[charI + 1][charJ - 1] === "terrain_lr" ||
            game[charI + 1][charJ - 1] === "terrain_tb" || game[charI + 1][charJ - 1] === "terrain_t" || game[charI + 1][charJ - 1] === "terrain_b" || game[charI + 1][charJ - 1] === "terrain_l"
            || game[charI + 1][charJ - 1] === "terrain_r" || game[charI + 1][charJ - 1] === "terrain_lrte" || game[charI + 1][charJ - 1] === "terrain_tble" || game[charI + 1][charJ - 1] === "terrain_lrbe"
            || game[charI + 1][charJ - 1] === "terrain_tbre" || game[charI + 1][charJ - 1] === "terrain_clb" || game[charI + 1][charJ - 1] === "terrain_crb" || game[charI + 1][charJ - 1] === "terrain_clt"
            || game[charI + 1][charJ - 1] === "terrain_crt" || game[charI + 1][charJ - 1] === "dgrass" || game[charI + 1][charJ - 1] === "rocky" || game[charI + 1][charJ - 1] === "forester" || game[charI + 1][charJ - 1] === "dog"
            || game[charI + 1][charJ - 1] === "bridge_lr" || game[charI + 1][charJ - 1] === "bridge_tb" || game[charI + 1][charJ - 1] === "cave1" || game[charI + 1][charJ - 1] === "cave2"
            || game[charI + 1][charJ - 1] === "gate1" || game[charI + 1][charJ - 1] === "gate2" || game[charI + 1][charJ - 1] === "willow"
            || game[charI + 1][charJ - 1] === "human1" || game[charI + 1][charJ - 1] === "human2" || game[charI + 1][charJ - 1] === "human3"
            || game[charI + 1][charJ - 1] === "human4" || game[charI + 1][charJ - 1] === "human5" || game[charI + 1][charJ - 1] === "human6" || game[charI + 1][charJ - 1] === "spider"
            || game[charI + 1][charJ - 1] === "witch" || game[charI + 1][charJ - 1] === "wolf" || game[charI + 1][charJ - 1] === "diamond" || game[charI + 1][charJ - 1] === "well";
    }

    function checkMoveRightDownDiagonal(charI, charJ){
        return game[charI + 1][charJ + 1] === "grass" || game[charI + 1][charJ + 1] === "flowers" || game[charI + 1][charJ + 1] === "terrain_lr" ||
            game[charI + 1][charJ + 1] === "terrain_tb" || game[charI + 1][charJ + 1] === "terrain_t" || game[charI + 1][charJ + 1] === "terrain_b" || game[charI + 1][charJ + 1] === "terrain_l"
            || game[charI + 1][charJ + 1] === "terrain_r" || game[charI + 1][charJ + 1] === "terrain_lrte" || game[charI + 1][charJ + 1] === "terrain_tble" || game[charI + 1][charJ + 1] === "terrain_lrbe"
            || game[charI + 1][charJ + 1] === "terrain_tbre" || game[charI + 1][charJ + 1] === "terrain_clb" || game[charI + 1][charJ + 1] === "terrain_crb" || game[charI + 1][charJ + 1] === "terrain_clt"
            || game[charI + 1][charJ + 1] === "terrain_crt" || game[charI + 1][charJ + 1] === "dgrass" || game[charI + 1][charJ + 1] === "rocky" || game[charI + 1][charJ + 1] === "forester" || game[charI + 1][charJ + 1] === "dog"
            || game[charI + 1][charJ + 1] === "bridge_lr" || game[charI + 1][charJ + 1] === "bridge_tb" || game[charI + 1][charJ + 1] === "cave1" || game[charI + 1][charJ + 1] === "cave2"
            || game[charI + 1][charJ + 1] === "gate1" || game[charI + 1][charJ + 1] === "gate2" || game[charI + 1][charJ + 1] === "willow"
            || game[charI + 1][charJ + 1] === "human1" || game[charI + 1][charJ + 1] === "human2" || game[charI + 1][charJ + 1] === "human3"
            || game[charI + 1][charJ + 1] === "human4" || game[charI + 1][charJ + 1] === "human5" || game[charI + 1][charJ + 1] === "human6" || game[charI + 1][charJ + 1] === "spider"
            || game[charI + 1][charJ + 1] === "witch" || game[charI + 1][charJ + 1] === "wolf" || game[charI + 1][charJ + 1] === "diamond" || game[charI + 1][charJ + 1] === "well";
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; // the maximum is exclusive and the minimum is inclusive
    }

    var categories = {
        "category1": {
            "description": "The initial steps of verifying the request up to checking the existence of the resource included.",
            "questions" : [
                {
                    "text": "What does the received error code 503 represent when sending a HTTP request to a web server?",
                    "option1": "Internal Server Error",
                    "option2": "Service Unavailable",
                    "option3": "Bad Gateway",
                    "option4": "Gateway Timeout",
                    "correct_answer": "2",
                    "clue":	"Tip: It is a client-side error code."
                },
                {
                    "text": "What does the received error code 414 represent when sending a HTTP request to a web server?",
                    "option1": "Method Not Allowed",
                    "option2": "Forbidden",
                    "option3": "Request-URI Too Long",
                    "option4": "Internal Server Error",
                    "correct_answer": "3",
                    "clue":	"Tip: It is a client-side error code."
                },
                {
                    "text": "What does the received error code 400 represent when sending a HTTP request to a web server?",
                    "option1": "Unauthorized",
                    "option2": "Request Timeout",
                    "option3": "Request-URI Too Long",
                    "option4": "Malformed URI",
                    "correct_answer": "4",
                    "clue":	"Tip: It is a client-side error code."
                },
                {
                    "text": "Which HTTP method can be used to find out which request methods a server supports?",
                    "option1": "CURL",
                    "option2": "OPTIONS",
                    "option3": "GET",
                    "option4": "POST",
                    "correct_answer": "2",
                    "clue":	"Tip: The client can specify a specific URL for this method, or an asterisk (*) to refer to the entire server."
                },
                {
                    "text": "Which code will you receive after determining the requirements for a resource using OPTIONS HTTP method?",
                    "option1": "300 Multiple Choices",
                    "option2": "201 Created",
                    "option3": "200 Ok",
                    "option4": "304 Not Modified",
                    "correct_answer": "3",
                    "clue":	"Tip: It is a success code."
                },
                {
                    "text": "Which are all the available HTTP request methods?",
                    "option1": "POST, GET",
                    "option2": "DELETE, GET, PUT, HEAD, POST, OPTIONS",
                    "option3": "POST, GET, PUT, HEAD, DELETE, OPTIONS, CONNECT, PATCH",
                    "option4": "DELETE, GET, PUT, CONNECT, PATCH, PULL, HEAD, POST, OPTIONS",
                    "correct_answer": "3",
                    "clue":	"Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "What does the received error code 401 represent when sending a HTTP request to a web server?",
                    "option1": "Request-URI Too Long",
                    "option2": "Malformed URI",
                    "option3": "Unauthorized",
                    "option4": "Bad Request",
                    "correct_answer": "3",
                    "clue":	"Tip: It is a server-side error code."
                },
                {
                    "text": "What does the received error code 403 represent when sending a HTTP request to a web server?",
                    "option1": "Forbidden Request",
                    "option2": "Request-URI Too Long",
                    "option3": "Bad Request",
                    "option4": "Unauthorized",
                    "correct_answer": "1",
                    "clue":	"Tip: It is a client-side error code."
                },
                {
                    "text": "After the request method has been established, the server ...",
                    "option1": "verifies the existence of the resource",
                    "option2": "performs the action corresponding to the request method",
                    "option3": "checks if the client is authorized",
                    "option4": "verifies if the resource matches an ETag from the If-Match header field",
                    "correct_answer": "1",
                    "clue":	"Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "Which error code will you receive if the If-Match header field can't check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched?",
                    "option1": "410 Gone",
                    "option2": "417 Expectation Failed",
                    "option3": "416 Range Not Satisfiable",
                    "option4": "412 Precondition Failed",
                    "correct_answer": "4",
                    "clue":	"Tip: It is a client-side error code."
                }
            ]
        },


        "category2": {
            "description": "The resource doesn't exist on the server; the request methods PUT and POST.",
            "questions": [
                {
                    "text": "In the context of the PUT request method, the server verifies first if ...",
                    "option1": "the resource can be created on the server",
                    "option2": "the resource already exists",
                    "option3": "the resource was moved",
                    "option4": "the content of the resource is supported",
                    "correct_answer": "4",
                    "clue":	"Tip: The server will take a pre-processing step."
                },
                {
                    "text": "What happens if the resource was successfully created, but the server can't store it?",
                    "option1": "the server will redirect the client, returning the code 303",
                    "option2": "the server will delete a resource that hasn't been accessed for a long time to make room for the new resource",
                    "option3": "the client will receive 500 Internal Server Error",
                    "option4": "the server will allocate a memory space for the new resource",
                    "correct_answer": "1",
                    "clue":	"Tip: The server will try to make room for the new resource."
                },
                {
                    "text": "Before verifying whether the client wants to post a resource, the server verifies if ...",
                    "option1": "the resource previously existed",
                    "option2": "the resource was permanently moved",
                    "option3": "the resource was temporarily moved",
                    "option4": "all of the above",
                    "correct_answer": "4",
                    "clue":	"Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "In the context of the POST request method, the server verifies the next conditions and in the following order:",
                    "option1": "content is supported, the resource was created, the resource has a URI, server permits post to missing resource",
                    "option2": "server permits post to missing resource, content is supported, the resource has a URI, the resource was created",
                    "option3": "server permits post to missing resource, content is supported, the resource was created, the resource has a URI",
                    "option4": "server permits post to missing resource, the resource has a URI, content is supported, the resource was created",
                    "correct_answer": "3",
                    "clue":	"Tip: The resource must have a URI before being created."
                },
                {
                    "text": "Which is the sufficient condition for the resource to be posted if it doesn't have a URI?",
                    "option1": "the resource has supported content",
                    "option2": "the response includes an entity",
                    "option3": "the resource has a specific length",
                    "option4": "none of the above",
                    "correct_answer": "2",
                    "clue":	"Tip: The resource must have a URI in order to be posted."
                },
                {
                    "text": "What does the received error code 301 represent when sending a HTTP request to a web server?",
                    "option1": "Multiple Choices",
                    "option2": "Moved Permanently",
                    "option3": "See Other",
                    "option4": "Not Modified",
                    "correct_answer": "2",
                    "clue":	"Tip: It is a redirect code."
                },
                {
                    "text": "What does the received error code 410 represent when sending a HTTP request to a web server?",
                    "option1": "Gone",
                    "option2": "Not Implemented",
                    "option3": "Conflict",
                    "option4": "Service Unavailable",
                    "correct_answer": "1",
                    "clue":	"Tip: It is a server-side error code."
                },
                {
                    "text": "What does the received error code 501 represent when sending a HTTP request to a web server?",
                    "option1": "Bad Request",
                    "option2": "Internal Server Error",
                    "option3": "Not Implemented",
                    "option4": "Bad Gateway",
                    "correct_answer": "3",
                    "clue":	"Tip: It is a client-side error code."
                }
            ]
        },


        "category3": {
            "description": "The resource exists on the server; verifying some attributes in the header: If-Match, If-None-Match, when the resource was last modified, ETags",
            "questions": [
                {
                    "text": "What does the received error code 304 represent when sending a HTTP request to a web server?",
                    "option1": "Not Modified",
                    "option2": "Temporary Redirect",
                    "option3": "No Content",
                    "option4": "Permanent Redirect",
                    "correct_answer": "1",
                    "clue": "Tip: It is a redirect code."
                },
                {
                    "text": "What does the received error code 412 represent when sending a HTTP request to a web server?",
                    "option1": "Length Required",
                    "option2": "Precondition Required",
                    "option3": "Range Not Satisfiable",
                    "option4": "Precondition Failed",
                    "correct_answer": "4",
                    "clue": "Tip: It is a client-side error code."
                },
                {
                    "text": "What happens if none of the ETags match in the context of If-Match header field?",
                    "option1": "the server checks if '*' is given and if there is a current entity",
                    "option2": "the server returns a 412 Precondition Failed error code",
                    "option3": "the server behaves as if the If-Match header field did not exist",
                    "option4": "none of the above",
                    "correct_answer": "2",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "When is the If-Match header field most useful?",
                    "option1": "when we want to have efficient updates of cached information with a minimum amount of transaction overhead",
                    "option2": "when we want to avoid a GET request without the If-Match header on that resource",
                    "option3": "when the client wants to prevent PUT/POST from modifying a resource that has changed since the client last retrieved it",
                    "option4": "all of the above",
                    "correct_answer": "3",
                    "clue": "Tip: Think about how this header field influences request methods."
                },
                {
                    "text": "Which of the following conditions will lead to error code 412 Precondition Failed?",
                    "option1": "Last-Modified > If-Unmodified-Since",
                    "option2": "If-Unmodified-Since doesn't exist",
                    "option3": "Last-Modified < If-Unmodified-Since",
                    "option4": "If-Unmodified-Since isn't a valid date",
                    "correct_answer": "1",
                    "clue": "Tip: Some of the conditions may be pre-conditions for others."
                },
                {
                    "text": "If the resource hasn't been modified, which of the following conditions are sufficient for GET/HEAD not to return 412 Precondition Failed?",
                    "option1": "If-None-Match exists, If-None-Match:* doesn't exist, there aren't any ETags that match",
                    "option2": "If-None-Match exists, If-None-Match:* doesn't exist, there is an ETag that matches",
                    "option3": "If-None-Match doesn't exist, If-Non-Match:* exists",
                    "option4": "If-None-Match doesn't exist",
                    "correct_answer": "2",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "When is the If-None-Match header field most useful?",
                    "option1": "when we want to avoid a GET request without the If-None-Match header on that resource",
                    "option2": "when we want to avoid the 412 Precondition Failed error code",
                    "option3": "when we want to have efficient updates of cached information with a minimum amount of transaction overhead",
                    "option4": "when we want to prevent PUT from inadvertently modifying an existing resource when the client believes that the resource does not exist",
                    "correct_answer": "4",
                    "clue": "Tip: Think about how this header field influences request methods."
                },
                {
                    "text": "Which of the following conditions will lead to redirect code 304 Not Modified?",
                    "option1": "If-Modified-Since > Now and Last-Modified < If-Modified-Since",
                    "option2": "If-Modified-Since < Now and Last-Modified > If-Modified-Since",
                    "option3": "If-Modified-Since > Now and Last-Modified < If-Modified-Since",
                    "option4": "If-Modified-Since < Now and Last-Modified < If-Modified-Since",
                    "correct_answer": "4",
                    "clue": "Tip: The answer can be deduced logically, without knowing the diagram."
                }
            ]
        },

        "category4": {
            "description": "The resource exists on the server; the request methods PUT and POST.",
            "questions": [
                {
                    "text": "What error code will be generated if the request entity isn't large enough?",
                    "option1": "413 Request Entity Too Large",
                    "option2": "413 Request Entity Not Large Enough",
                    "option3": "there won't be generated any error code because there isn't a lower edge",
                    "option4": "414 URI Too Long",
                    "correct_answer": "3",
                    "clue": "Tip: It is a client-side error code."
                },
                {
                    "text": "What error code will be generated if the media type isn't supported?",
                    "option1": "417 Expectation Failed",
                    "option2": "415 Unsupported Media Type",
                    "option3": "501 Not Implemented",
                    "option4": "503 Service Unavailable",
                    "correct_answer": "2",
                    "clue": "Tip: It is a server-side error code."
                },
                {
                    "text": "What error code will be generated if the resource can't be updated or data can't be appended to it?",
                    "option1": "500 Internal Server Error",
                    "option2": "501 Not Implemented",
                    "option3": "503 Service Unavailable",
                    "option4": "426 Upgrade Required",
                    "correct_answer": "1",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "Which of the following are valid media types?",
                    "option1": "all of the below",
                    "option2": "text/html, audio/mpeg, application/json",
                    "option3": "image/gif, video/h264, application/javascript",
                    "option4": "multipart/mixed, text/plain, application/msword",
                    "correct_answer": "1",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "Which is the sufficient condition so data can be appended to the resource if it doesn't have a URI?",
                    "option1": "none of the below",
                    "option2": "the data is in the supported media types",
                    "option3": "the data has a specific length",
                    "option4": "the response includes an entity",
                    "correct_answer": "4",
                    "clue":	"Tip: The resource must have a URI to be posted."
                },
                {
                    "text": "Which of the following represents a difference between PUT and POST?",
                    "option1": "PUT can't create a new resource, while POST can",
                    "option2": "PUT is not a safe request method, while POST is",
                    "option3": "POST is an idempotent method, while PUT isn't",
                    "option4": "PUT updates a resource, while POST appends entities (data, actions) to the resource",
                    "correct_answer": "4",
                    "clue": "Tip: POST is more often used than PUT."
                },
                {
                    "text": "What other two checks does PUT in addition to POST before updating the resource?",
                    "option1": "checks whether the request entity is too large and whether the content is known",
                    "option2": "checks whether the content is known and whether the resource can be updated on the server",
                    "option3": "checks whether the content is known and whether there are any conflicts",
                    "option4": "checks whether the media type is supported and whether there are any conflicts",
                    "correct_answer": "3",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "Which of the following conditions can lead to 204 No Content?",
                    "option1": "the client is redirected",
                    "option2": "the resource couldn't be updated",
                    "option3": "the resource was updated successfully",
                    "option4": "the response includes an entity",
                    "correct_answer": "3",
                    "clue": "Tip: The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page."
                }
            ]
        },

        "category5": {
            "description": "The resource exists on the server; the request methods DELETE, GET and HEAD.",
            "questions": [
                {
                    "text": "Which of the following represents a difference between GET and HEAD?",
                    "option1": "GET provides a resource representation, while HEAD provides meta-data regarding the resource",
                    "option2": "GET is safe, while HEAD is not safe",
                    "option3": "HEAD is idempotent, while GET is not idempotent",
                    "option4": "HEAD provides a resource representation, while GET provides meta-data regarding the resource",
                    "correct_answer": "1",
                    "clue": "Tip: GET is more often used than HEAD."
                },
                {
                    "text": "Which of the following statements about DELETE is false?",
                    "option1": "DELETE isn't a safe request method",
                    "option2": "DELETE deletes the representation of a resource from de server",
                    "option3": "DELETE checks if the delete is enacted",
                    "option4": "DELETE isn't an idempotent request method",
                    "correct_answer": "4",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "For a resource to be deleted, the following conditions needs to be fulfilled and in the next order:",
                    "option1": "the delete is enacted and the resource can be deleted",
                    "option2": "the resource can be deleted and the delete is enacted",
                    "option3": "the delete is enacted and the response includes an entity",
                    "option4": "the resource can be deleted and the response includes an entity",
                    "correct_answer": "1",
                    "clue": "Tip: If the delete isn't enacted, it leads to 202 Accepted success code."
                },
                {
                    "text": "What redirect code will you receive if there are multiple representations for the resource?",
                    "option1": "406 Not Acceptable",
                    "option2": "300 Multiple Choices",
                    "option3": "202 Accepted",
                    "option4": "303 Multiple Choices",
                    "correct_answer": "2",
                    "clue": "Tip: Ups.. we ran out of clues."
                },
                {
                    "text": "What error code will you receive if there exists the Accept-Language header field but there isn't an acceptable language available?",
                    "option1": "202 Accepted",
                    "option2": "you won't receive an error code",
                    "option3": "406 Not Acceptable",
                    "option4": "500 Internal Server Error",
                    "correct_answer": "3",
                    "clue": "Tip: It is a server-side error code."
                },
                {
                    "text": "Which is the first step the server does in the context of GET/HEAD request method?",
                    "option1": "verifies if there is an acceptable media type available",
                    "option2": "verifies whether there are more than one representation for the resource",
                    "option3": "verifies if the Accept header field exists",
                    "option4": "verifies if the resource can be retrieved",
                    "correct_answer": "3",
                    "clue": "Tip: The server verifies the header fields existence before the existence of some acceptable values for the specified field."
                },
                {
                    "text": "Before verifying whether the resource has many representations, the server verifies the existence of the following header fields and in the next order:",
                    "option1": "Accept, Accept-Charset, Accept-Language, Accept-Encoding",
                    "option2": "Accept, Accept-Language, Accept-Charset, Accept-Encoding",
                    "option3": "Accept, Accept-Encoding, Accept-Charset, Accept-Language",
                    "option4": "Accept, Accept-Encoding, Accept-Language, Accept-Charset",
                    "correct_answer": "2",
                    "clue": "Tip: Accept is the first verified field."
                }
            ]
        }
    };

    var asked_questions = [];
    var category = "category1";
    var correctAnswer = 0;

    function showQuestion() {
        var nr_of_questions = categories[category].questions.length;
        var rand = getRandomInt(0, nr_of_questions);
        while(true) {
            if (asked_questions.indexOf(rand) < 0) {
                break;
            }
            rand = getRandomInt(0, nr_of_questions);
        }
        asked_questions.push(rand);

        document.getElementById("question_text").innerHTML = categories[category].questions[rand].text;
        document.getElementById("option1").innerHTML = categories[category].questions[rand].option1;
        document.getElementById("option2").innerHTML = categories[category].questions[rand].option2;
        document.getElementById("option3").innerHTML = categories[category].questions[rand].option3;
        document.getElementById("option4").innerHTML = categories[category].questions[rand].option4;
        document.getElementById("clue").innerHTML = categories[category].questions[rand].clue;

        var el = document.getElementsByClassName("question_div_container")[0];
        el.style.visibility = "visible";

        var chosen_option_nr = "";
        var options = document.getElementById("options").getElementsByTagName("li");
        for (i = 0; i < options.length; i++) {

            options[i].onmouseover = function() {
                if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
                    this.setAttribute("style", "background-color: lightgreen;");
                }
            };
            options[i].onmouseout = function() {
                if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
                    this.setAttribute("style", "background-color: tan;");
                }
            };

            options[i].onclick = function() {
                for (var j = 0; j < options.length; j++) {
                    options[j].setAttribute("style", "background-color: tan;");
                }
                this.setAttribute("style", "background-color: forestgreen;");
                chosen_option_nr = this.getAttribute("id")[this.getAttribute("id").length - 1];
            }
        }

        var submit_button = document.getElementById("submit_button_text");
        submit_button.onclick = function() {
            if (chosen_option_nr === categories[category].questions[rand].correct_answer) {
                // alert("Correct answer! You received a star!");
                correctAnswer = 1;
                points = points + 1;
                document.getElementsByClassName("stars-score")[0].innerHTML = String(points);
                hideQuestion();
            }
            else if(chosen_option_nr === "") {
                // alert("You must first select an answer!");
            }
            else {
                // alert("Wrong answer!");
                correctAnswer = 0;
                hideQuestion();
            }
        };

    }

    var button = document.getElementsByClassName("exit_button")[0];
    document.getElementsByClassName("indication_div_container")[0].style.visibility = "visible";
    document.getElementById("indication_text").innerHTML="Chapter1: " + categories[category].description + "<br><br>" + "Your name is Bidi" + "<br><br>" + 'To move throughout the map, use W, A, S, D to move up, left, down, right and Q, E, Z, C to move diagonally.' + "<br>";

    function hideIndication(){
        var el = document.getElementsByClassName("indication_div_container")[0];
        el.style.visibility = (el.style.visibility === "hidden") ? "visible" : "hidden";

        if(getCharactherCoord("me")[0] === getObjectCoord("forester")[0] && getCharactherCoord("me")[1] === getObjectCoord("forester")[1]){
            count_forester_tips -= 1;
            if(count_forester_tips === 1){
                showQuestion();
                count_forester_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("witch")[0] && getCharactherCoord("me")[1] === getObjectCoord("witch")[1]){
            count_witch_tips -= 1;
            if(count_witch_tips === 0){
                showQuestion();
                count_witch_questions -= 1;
                gate2_visited = 1;
            }
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("willow")[0] && getCharactherCoord("me")[1] === getObjectCoord("willow")[1]){
            count_willow_tips -= 1;
            if(count_willow_tips === 0){
                showQuestion();
                count_willow_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === 4 && getCharactherCoord("me")[1] === 4){
            count_willow_tips -= 1;
            if(count_willow_tips === 0){
                showQuestion();
                count_willow_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === 3 && getCharactherCoord("me")[1] === 4){
            count_willow_tips -= 1;
            if(count_willow_tips === 0){
                showQuestion();
                count_willow_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === 1 && getCharactherCoord("me")[1] === 10){
            count_flower_tips -= 1;
            gate1_visited = 1;
            if(count_flower_tips === 0){
                showQuestion();
                count_flower_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === 1 && getCharactherCoord("me")[1] === 9){
            count_flower_tips -= 1;
            gate1_visited = 1;
            if(count_flower_tips === 0){
                showQuestion();
                count_flower_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === 1 && getCharactherCoord("me")[1] === 11){
            count_flower_tips -= 1;
            gate1_visited = 1;
            if(count_flower_tips === 0){
                showQuestion();
                count_flower_questions -= 1;
            }
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("human3")[0] && getCharactherCoord("me")[1] === getObjectCoord("human3")[1]){
            count_priest_tips -= 1;
            keyGate1 = 1;
        }

        if(getCharactherCoord("me")[0] === 8 && getCharactherCoord("me")[1] === 18){
            count_creatures_tips -= 1;
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("human5")[0] && getCharactherCoord("me")[1] === getObjectCoord("human5")[1]){
            count_human5_tips -= 1;
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("human1")[0] && getCharactherCoord("me")[1] === getObjectCoord("human1")[1]){
            count_human1_tips -= 1;
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("human6")[0] && getCharactherCoord("me")[1] === getObjectCoord("human6")[1]){
            count_human6_tips -= 1;
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("wolf")[0] && getCharactherCoord("me")[1] === getObjectCoord("wolf")[1]){
            count_wolf_tips -= 1;
            if(count_wolf_tips === 0){
                showQuestion();
                count_wolf_questions -= 1;

                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, getObjectCoord("dog")[0], getObjectCoord("dog")[1]);
                image.src = map_elements["grass"];
                ground[getObjectCoord("dog")[0]][getObjectCoord("dog")[1]]="grass";

            }
        }

        if(getCharactherCoord("me")[0] === getObjectCoord("well")[0] && getCharactherCoord("me")[1] === getObjectCoord("well")[1]){
            count_well_tips -= 1;

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, getObjectCoord("well")[0], getObjectCoord("well")[1]);
            image.src = map_elements["well"];

            window.location.replace("/HAG/levels.html");
        }
    }

    function hideQuestion(){
        var el = document.getElementsByClassName("question_div_container")[0];
        el.style.visibility = "visible";
        el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";

        if(count_forester_tips > 0 && count_forester_questions === 0) {
            count_forester_tips -= 1;
            el = document.getElementsByClassName("indication_div_container")[0];
            document.getElementById("indication_text").innerHTML = "You can check out the village over the river. <br> Might be you find other challenges.";
            document.getElementsByClassName("indication")[0].style = "margin-top: 0";
            el.style.visibility = "visible";
        }

        if(correctAnswer === 1){
            el = document.getElementsByClassName("indication_div_container")[0];
            document.getElementById("indication_text").innerHTML = "Correct answer! You received a star!";
            document.getElementsByClassName("indication")[0].style = "margin-top: 0";
            el.style.visibility = "visible";
        }

        if(correctAnswer === 0){
            el = document.getElementsByClassName("indication_div_container")[0];
            document.getElementById("indication_text").innerHTML = "Wrong answer! Maybe next time.";
            document.getElementsByClassName("indication")[0].style = "margin-top: 0";
            el.style.visibility = "visible";
        }
    }

    if(button){
        button.addEventListener("click", hideIndication, false);
    }
}