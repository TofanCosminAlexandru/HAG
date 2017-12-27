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
        ["tree", "tree", "tree", "tree", "river_lr", "house", "tree", "terrain_lrte", "tree", "human4", "flowers", "human2", "tree", "tree", "mountain", "diamond", "rocky", "rocky", "cave", "mountain"],
        ["tree", "tree", "tree", "tree", "river_clb", "river_crt", "flowers", "terrain_lr", "house", "house", "gate", "fountain", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "willow", "grass", "bridge_lr", "terrain_tb", "terrain_b", "terrain_tb", "terrain_crt", "house", "house", "human3", "tree", "tree", "tree", "tree", "tree", "tree", "mountain"],
        ["tree", "cave", "tree", "flowers", "grass", "river_clb", "river_crt", "stone", "stone", "terrain_clb", "terrain_crt", "tree", "terrain_l", "human1", "house", "house", "tree", "witch", "whouse", "tree"],
        ["tree", "rocky", "tree", "flowers", "grass", "stone", "river_clb", "river_tb", "river_crt", "grass", "terrain_clb", "terrain_tb", "terrain_r", "house", "human5", "tree", "tree", "dgrass", "wood", "tree"],
        ["tree", "rocky", "tree", "tree", "grass", "grass", "stone", "stone", "river_clb", "river_crt", "stone", "grass", "terrain_lr", "tree", "terrain_lr", "tree", "spider", "dgrass", "crack", "tree"],
        ["tree", "tree", "dog", "tree", "tree", "tree", "grass", "stone", "stone", "river_lr", "stone", "house", "terrain_l", "terrain_tb", "terrain_r", "tree", "crack", "dtree", "dgrass", "tree"],
        ["tree", "fhouse", "grass", "wood", "wood", "wood", "terrain_clt", "terrain_tb", "terrain_tb", "bridge_blr", "house", "house", "human6", "house", "terrain_clb", "dgrass", "dgrass", "dgrass", "dgrass", "tree"],
        ["tree", "terrain_clb", "terrain_tb", "terrain_tb", "forester", "terrain_tb", "terrain_crb", "tree", "tree", "river_clb", "river_tb", "river_t", "bridge_tb", "river_tb", "river_crt", "tree", "grave", "grave", "grave", "tree"],
        ["tree", "wood", "tree", "tree", "terrain_lrbe", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "terrain_lr", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "tree", "tree", "flowers", "grass", "grass", "grass", "tree", "diamond", "grass", "tree", "tree", "terrain_lr", "tree", "river_clb", "river_tb", "river_crt", "tree", "tree", "tree"],
        ["tree", "flowers", "grass", "grass", "grass", "tree", "grass", "tree", "tree", "grass", "tree", "river_lr", "terrain_clb", "terrain_tb", "terrain_tb", "wolf", "bridge_lr", "terrain_tb", "terrain_tbre", "tree"],
        ["tree", "grass", "grass", "flowers", "tree", "tree", "grass", "grass", "grass", "grass", "tree", "river_lr", "tree", "tree", "tree", "tree", "river_clb", "river_crt", "well", "tree"],
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree"]];

    var game = [["tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "tree", "river_lr", "house", "tree", "terrain_lrte", "tree", "human4", "flowers", "human2", "tree", "tree", "mountain", "diamond", "rocky", "rocky", "cave", "mountain"],
        ["tree", "tree", "tree", "tree", "river_clb", "river_crt", "flowers", "terrain_lr", "house", "house", "gate", "fountain", "tree", "tree", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain"],
        ["tree", "tree", "tree", "willow", "grass", "bridge_lr", "terrain_tb", "terrain_b", "terrain_tb", "terrain_crt", "house", "house", "human3", "tree", "tree", "tree", "tree", "tree", "tree", "mountain"],
        ["tree", "cave", "tree", "flowers", "grass", "river_clb", "river_crt", "stone", "stone", "terrain_clb", "terrain_crt", "tree", "terrain_l", "human1", "house", "house", "tree", "witch", "whouse", "tree"],
        ["tree", "rocky", "tree", "flowers", "grass", "stone", "river_clb", "river_tb", "river_crt", "grass", "terrain_clb", "terrain_tb", "terrain_r", "house", "human5", "tree", "tree", "dgrass", "wood", "tree"],
        ["tree", "rocky", "tree", "tree", "grass", "grass", "stone", "stone", "river_clb", "river_crt", "stone", "grass", "terrain_lr", "tree", "terrain_lr", "tree", "spider", "dgrass", "crack", "tree"],
        ["tree", "tree", "dog", "tree", "tree", "tree", "grass", "stone", "stone", "river_lr", "stone", "house", "terrain_l", "terrain_tb", "terrain_r", "tree", "crack", "dtree", "dgrass", "tree"],
        ["tree", "fhouse", "grass", "wood", "wood", "wood", "terrain_clt", "terrain_tb", "terrain_tb", "bridge_blr", "house", "house", "human6", "house", "terrain_clb", "dgrass", "dgrass", "dgrass", "dgrass", "tree"],
        ["tree", "terrain_clb", "terrain_tb", "terrain_tb", "forester", "terrain_tb", "terrain_crb", "tree", "tree", "river_clb", "river_tb", "river_t", "bridge_tb", "river_tb", "river_crt", "tree", "grave", "grave", "grave", "tree"],
        ["tree", "wood", "tree", "tree", "terrain_lrbe", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "terrain_lr", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "tree", "tree", "flowers", "grass", "grass", "grass", "tree", "diamond", "grass", "tree", "tree", "terrain_lr", "tree", "river_clb", "river_tb", "river_crt", "tree", "tree", "tree"],
        ["tree", "flowers", "grass", "grass", "grass", "tree", "grass", "tree", "tree", "grass", "tree", "river_lr", "terrain_clb", "terrain_tb", "terrain_tb", "wolf", "bridge_lr", "terrain_tb", "terrain_tbre", "tree"],
        ["tree", "me", "grass", "flowers", "tree", "tree", "grass", "grass", "grass", "grass", "tree", "river_lr", "tree", "tree", "tree", "tree", "river_clb", "river_crt", "well", "tree"],
        ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree", "river_lr", "tree", "tree"]];


    var map_elements = {"tree": "images/tree.png",
        "dtree": "images/dtree.png",
        "rocky": "images/rocky.jpg",
        "mountain": "images/mountain.png",
        "terrain": "images/terrain.png",
        "wood": "images/wood.png",
        "cave": "images/cave.png",
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
        "gate": "images/gate.png",
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
            else if((i === 7 && j === 17) || (i === 8 && j === 15) || ground[i][j] === "grave" || ground[i][j] === "crack" || ground[i][j] === "witch" || ground[i][j] === "whouse" || (ground[i][j] === "wood" && j === 18) || ground[i][j] === "spider") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["dgrass"];
            }
            else if(ground[i][j] === "cave" || ground[i][j] === "mountain" || (ground[i][j] === "diamond" && i === 1) || (ground[i][j] === "tree" && (i === 3 || i === 4 || i === 5) && (j === 0 || j === 1))) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["rocky"];
            }
            else if(ground[i][j] === "forester") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
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

    image = new Image();
    image.onload = drawCanvasImageElem(ctx, image, 8, 15);
    image.src = map_elements["gate"];

    var charI = getCharactherCoord()[0];
    var charJ = getCharactherCoord()[1];
    image = new Image();
    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
    image.src = map_elements["me"];

    var map = {};
    document.body.addEventListener("keydown", function(e){
        map[e.keyCode] = e.type === 'keydown';
        if(map[105]){
            rightUpDiagonal();
            map = {};
        }
        if(map[103]) {
            leftUpDiagonal();
            map = {};
        }
        if(map[97]) {
            leftDownDiagonal();
            map = {};
        }
        if(map[99]) {
            rightDownDiagonal();
            map = {};
        }
        else if(map[37]){
            leftArrowPressed();
            map = {};
        }
        else if(map[39]){
            rightArrowPressed();
            map = {};
        }
        else if(map[38]){
            upArrowPressed();
            map = {};
        }
        else if(map[40]){
            downArrowPressed();
            map = {};
        }
        e.preventDefault();
        return false;
    });

    function leftArrowPressed() {
        console.log("Stanga");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveLeft(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ-1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI][charJ-1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function rightArrowPressed() {
        console.log("Dreapta");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveRight(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ+1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI][charJ+1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function upArrowPressed() {
        console.log("Sus");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveUp(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI-1][charJ] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function downArrowPressed() {
        console.log("Jos");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveDown(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI+1, charJ);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI+1][charJ] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function rightUpDiagonal(){
        console.log("Dreapta Sus Diagonala");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveRightUpDiagonal(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ+1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI-1][charJ+1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function leftUpDiagonal() {
        console.log("Stanga Sus Diagonala");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveLeftUpDiagonal(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI-1, charJ-1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI-1][charJ-1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function leftDownDiagonal() {
        console.log("Stanga Jos Diagonala");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveLeftDownDiagonal(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI+1, charJ-1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI+1][charJ-1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function rightDownDiagonal(){
        console.log("Stanga Dreapta Diagonala");
        getCharactherCoord();
        var charI = getCharactherCoord()[0];
        var charJ = getCharactherCoord()[1];

        if(checkMoveRightDownDiagonal(charI, charJ) === true) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI+1, charJ+1);
            image.src = map_elements["me"];

            game[charI][charJ] = ground[charI][charJ];
            game[charI+1][charJ+1] = "me";

            // image = new Image();
            // image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            // image.src = map_elements["grass"];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
            image.src = map_elements[ground[charI][charJ]];
        }
        else {
            alert("You can't jump over obstacles!");
        }
    }

    function getCharactherCoord(){
        var coord = [];
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 20; j++) {
                if(game[i][j] === "me") {
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
            || game[charI][charJ - 1] === "terrain_crt" || game[charI][charJ - 1] === "dgrass" || game[charI][charJ - 1] === "rocky" || game[charI][charJ - 1] === "forester" || game[charI][charJ - 1] === "dog";
    }

    function checkMoveRight(charI, charJ) {
        return game[charI][charJ + 1] === "grass" || game[charI][charJ + 1] === "flowers" || game[charI][charJ + 1] === "terrain_lr" ||
            game[charI][charJ + 1] === "terrain_tb" || game[charI][charJ + 1] === "terrain_t" || game[charI][charJ + 1] === "terrain_b" || game[charI][charJ + 1] === "terrain_l"
            || game[charI][charJ + 1] === "terrain_r" || game[charI][charJ + 1] === "terrain_lrte" || game[charI][charJ + 1] === "terrain_tble" || game[charI][charJ + 1] === "terrain_lrbe"
            || game[charI][charJ + 1] === "terrain_tbre" || game[charI][charJ + 1] === "terrain_clb" || game[charI][charJ + 1] === "terrain_crb" || game[charI][charJ + 1] === "terrain_clt"
            || game[charI][charJ + 1] === "terrain_crt" || game[charI][charJ + 1] === "dgrass" || game[charI][charJ + 1] === "rocky" || game[charI][charJ + 1] === "forester" || game[charI][charJ + 1] === "dog";
    }

    function checkMoveUp(charI, charJ) {
        return game[charI - 1][charJ] === "grass" || game[charI - 1][charJ] === "flowers" || game[charI - 1][charJ] === "terrain_lr" ||
            game[charI - 1][charJ] === "terrain_tb" || game[charI - 1][charJ] === "terrain_t" || game[charI - 1][charJ] === "terrain_b" || game[charI - 1][charJ] === "terrain_l"
            || game[charI - 1][charJ] === "terrain_r" || game[charI - 1][charJ] === "terrain_lrte" || game[charI - 1][charJ] === "terrain_tble" || game[charI - 1][charJ] === "terrain_lrbe"
            || game[charI - 1][charJ] === "terrain_tbre" || game[charI - 1][charJ] === "terrain_clb" || game[charI - 1][charJ] === "terrain_crb" || game[charI - 1][charJ] === "terrain_clt"
            || game[charI - 1][charJ] === "terrain_crt" || game[charI - 1][charJ] === "dgrass" || game[charI - 1][charJ] === "rocky" || game[charI - 1][charJ] === "forester" || game[charI - 1][charJ] === "dog";
    }

    function checkMoveDown(charI, charJ) {
        return game[charI + 1][charJ] === "grass" || game[charI + 1][charJ] === "flowers" || game[charI + 1][charJ] === "terrain_lr" ||
            game[charI + 1][charJ] === "terrain_tb" || game[charI + 1][charJ] === "terrain_t" || game[charI + 1][charJ] === "terrain_b" || game[charI + 1][charJ] === "terrain_l"
            || game[charI + 1][charJ] === "terrain_r" || game[charI + 1][charJ] === "terrain_lrte" || game[charI + 1][charJ] === "terrain_tble" || game[charI + 1][charJ] === "terrain_lrbe"
            || game[charI + 1][charJ] === "terrain_tbre" || game[charI + 1][charJ] === "terrain_clb" || game[charI + 1][charJ] === "terrain_crb" || game[charI + 1][charJ] === "terrain_clt"
            || game[charI + 1][charJ] === "terrain_crt" || game[charI + 1][charJ] === "dgrass" || game[charI + 1][charJ] === "rocky" || game[charI + 1][charJ] === "forester" || game[charI + 1][charJ] === "dog";
    }

    function checkMoveRightUpDiagonal(charI, charJ){
        return game[charI - 1][charJ + 1] === "grass" || game[charI - 1][charJ + 1] === "flowers" || game[charI - 1][charJ + 1] === "terrain_lr" ||
            game[charI - 1][charJ + 1] === "terrain_tb" || game[charI - 1][charJ + 1] === "terrain_t" || game[charI - 1][charJ + 1] === "terrain_b" || game[charI - 1][charJ + 1] === "terrain_l"
            || game[charI - 1][charJ + 1] === "terrain_r" || game[charI - 1][charJ + 1] === "terrain_lrte" || game[charI - 1][charJ + 1] === "terrain_tble" || game[charI - 1][charJ + 1] === "terrain_lrbe"
            || game[charI - 1][charJ + 1] === "terrain_tbre" || game[charI - 1][charJ + 1] === "terrain_clb" || game[charI - 1][charJ + 1] === "terrain_crb" || game[charI - 1][charJ + 1] === "terrain_clt"
            || game[charI - 1][charJ + 1] === "terrain_crt" || game[charI - 1][charJ + 1] === "dgrass" || game[charI - 1][charJ + 1] === "rocky" || game[charI - 1][charJ + 1] === "forester" || game[charI - 1][charJ + 1] === "dog";
    }

    function checkMoveLeftUpDiagonal(charI, charJ){
        return game[charI - 1][charJ - 1] === "grass" || game[charI - 1][charJ - 1] === "flowers" || game[charI - 1][charJ - 1] === "terrain_lr" ||
            game[charI - 1][charJ - 1] === "terrain_tb" || game[charI - 1][charJ - 1] === "terrain_t" || game[charI - 1][charJ - 1] === "terrain_b" || game[charI - 1][charJ - 1] === "terrain_l"
            || game[charI - 1][charJ - 1] === "terrain_r" || game[charI - 1][charJ - 1] === "terrain_lrte" || game[charI - 1][charJ - 1] === "terrain_tble" || game[charI - 1][charJ - 1] === "terrain_lrbe"
            || game[charI - 1][charJ - 1] === "terrain_tbre" || game[charI - 1][charJ - 1] === "terrain_clb" || game[charI - 1][charJ - 1] === "terrain_crb" || game[charI - 1][charJ - 1] === "terrain_clt"
            || game[charI - 1][charJ - 1] === "terrain_crt" || game[charI - 1][charJ - 1] === "dgrass" || game[charI - 1][charJ - 1] === "rocky" || game[charI - 1][charJ - 1] === "forester" || game[charI - 1][charJ - 1] === "dog";
    }

    function checkMoveLeftDownDiagonal(charI, charJ){
        return game[charI + 1][charJ - 1] === "grass" || game[charI + 1][charJ - 1] === "flowers" || game[charI + 1][charJ - 1] === "terrain_lr" ||
            game[charI + 1][charJ - 1] === "terrain_tb" || game[charI + 1][charJ - 1] === "terrain_t" || game[charI + 1][charJ - 1] === "terrain_b" || game[charI + 1][charJ - 1] === "terrain_l"
            || game[charI + 1][charJ - 1] === "terrain_r" || game[charI + 1][charJ - 1] === "terrain_lrte" || game[charI + 1][charJ - 1] === "terrain_tble" || game[charI + 1][charJ - 1] === "terrain_lrbe"
            || game[charI + 1][charJ - 1] === "terrain_tbre" || game[charI + 1][charJ - 1] === "terrain_clb" || game[charI + 1][charJ - 1] === "terrain_crb" || game[charI + 1][charJ - 1] === "terrain_clt"
            || game[charI + 1][charJ - 1] === "terrain_crt" || game[charI + 1][charJ - 1] === "dgrass" || game[charI + 1][charJ - 1] === "rocky" || game[charI + 1][charJ - 1] === "forester" || game[charI + 1][charJ - 1] === "dog";
    }

    function checkMoveRightDownDiagonal(charI, charJ){
        return game[charI + 1][charJ + 1] === "grass" || game[charI + 1][charJ + 1] === "flowers" || game[charI + 1][charJ + 1] === "terrain_lr" ||
            game[charI + 1][charJ + 1] === "terrain_tb" || game[charI + 1][charJ + 1] === "terrain_t" || game[charI + 1][charJ + 1] === "terrain_b" || game[charI + 1][charJ + 1] === "terrain_l"
            || game[charI + 1][charJ + 1] === "terrain_r" || game[charI + 1][charJ + 1] === "terrain_lrte" || game[charI + 1][charJ + 1] === "terrain_tble" || game[charI + 1][charJ + 1] === "terrain_lrbe"
            || game[charI + 1][charJ + 1] === "terrain_tbre" || game[charI + 1][charJ + 1] === "terrain_clb" || game[charI + 1][charJ + 1] === "terrain_crb" || game[charI + 1][charJ + 1] === "terrain_clt"
            || game[charI + 1][charJ + 1] === "terrain_crt" || game[charI + 1][charJ + 1] === "dgrass" || game[charI + 1][charJ + 1] === "rocky" || game[charI + 1][charJ + 1] === "forester" || game[charI + 1][charJ + 1] === "dog";
    }
}