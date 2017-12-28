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

var diamonds = 0;
var points = 0;

function init() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 15; j++) {
                var image = new Image();
                image.onload = drawCanvasImage(ctx, image, i, j);
                if (i < 3 && j < 3) {
                    image.src = "water_images/grass.jpg";
                }
                else {
                    image.src = "water_images/ground.png";
                }
            }
        }
    }

    var water = [["tree", "tree", "tree", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["tree", "stairs_to_heaven", "tree", "wall", "river", "ground", "ground", "ground", "wall", "river", "river", "river", "river", "wall", "ground", "river", "stone", "me", "well_stairs", "wall"],
        ["tree", "tree", "well", "wall", "river", "ground", "wall", "ground", "wall", "ground", "river", "ground", "river", "wall", "ground", "river", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "wall", "well_stairs", "river", "ground", "wall", "ground", "wall", "river", "stone", "stone", "stone", "wall", "ground", "river", "river", "river", "river", "wall"],
        ["wall", "ground", "minotaur", "river", "river", "stone", "wall", "serpent", "wall", "ground", "ground", "ground", "diamond", "wall", "ground", "ground", "ground", "ground", "rat", "wall"],
        ["wall", "ground", "river", "river", "river", "river", "river", "river", "river", "river", "river", "river", "wall", "wall", "wall", "ground", "wall", "wall", "wall", "wall"],
        ["wall", "river", "river", "dark_voice", "ground", "ground", "river", "ground", "river", "river", "wall", "stone", "wall", "diamond", "ground", "ground", "ground", "ground", "rat", "wall"],
        ["wall", "stone", "wall", "wall", "ground", "river", "river", "stone", "river", "river", "wall", "ground", "wall", "wall", "wall", "wall", "ground", "wall", "wall", "wall"],
        ["wall", "ground", "wall", "ground", "river", "river", "river", "river", "river", "wall", "wall", "ground", "gate", "ground", "ground", "ground", "ground", "ground", "ground", "wall"],
        ["wall", "spikes", "wall", "ground", "river", "ground", "wall", "stone", "river", "stone", "ground", "ground", "wall", "wall", "stone", "ground", "ground", "river", "river", "wall"],
        ["wall", "ground", "wall", "river", "medusa2", "river", "river", "ground", "river", "ground", "ground", "ground", "wall", "river", "river", "river", "river", "river", "ground", "wall"],
        ["wall", "spikes", "wall", "ground", "river", "ground", "river", "ground", "river", "wall", "wall", "wall", "wall", "river", "river", "ground", "ground", "ground", "stone", "wall"],
        ["wall", "ground", "wall", "wall", "wall", "ground", "river", "ground", "river", "river", "river", "river", "wall", "river", "river", "river", "river", "river", "river", "wall"],
        ["wall", "ground", "ground", "spikes", "ground", "ground", "river", "ground", "ground", "ground", "ground", "food", "wall", "river", "medusa1", "ground", "ground", "ground", "ground", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]];

    var game = [[],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []];


    var map_elements = {
        "tree": "water_images/tree.png",
        "wall": "water_images/wall.png",
        "stairs_to_heaven": "water_images/stairs_to_heaven.png",
        "grass": "water_images/grass.jpg",
        "river": "water_images/river.png",
        "stone": "water_images/stone.png",
        "me": "water_images/character.png",
        "well_stairs": "water_images/well_stairs.png",
        "diamond": "water_images/diamond_map.png",
        "minotaur": "water_images/minotaur.png",
        "serpent": "water_images/serpent.png",
        "rat": "water_images/rat.png",
        "dark_voice": "water_images/dark_voice.png",
        "medusa1": "water_images/medusa1.png",
        "medusa2": "water_images/medusa2.png",
        "gate": "water_images/gate.png",
        "spikes": "water_images/spikes.png",
        "food": "water_images/food.png",
        "well": "water_images/well.png"
    };

    for (i = 0; i < water.length; i++) {
        for (j = 0; j < water[i].length; j++) {
            if (water[i][j] === "diamond" && i === 4) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["river"];
            }

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, i, j);
            image.src = map_elements[water[i][j]];
        }
    }
}