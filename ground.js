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
        ["tree", "fhouse", "grass", "wood", "wood", "wood", "terrain_clt", "terrain_tb", "terrain_tb", "bridge_blr", "house", "house", "human6", "house", "terrain_clb", "gate", "dgrass", "dgrass", "dgrass", "tree"],
        ["tree", "terrain_clb", "terrain_tb", "terrain_tb", "forester", "terrain_tb", "terrain_crb", "tree", "tree", "river_clb", "river_tb", "river_t", "bridge_tb", "river_tb", "river_crt", "tree", "grave", "grave", "grave", "tree"],
        ["tree", "wood", "tree", "tree", "terrain_lrbe", "tree", "tree", "tree", "tree", "tree", "tree", "river_lr", "terrain_lr", "tree", "river_lr", "tree", "tree", "tree", "tree", "tree"],
        ["tree", "tree", "tree", "flowers", "grass", "grass", "grass", "tree", "diamond", "grass", "tree", "tree", "terrain_lr", "tree", "river_clb", "river_tb", "river_crt", "tree", "tree", "tree"],
        ["tree", "flowers", "grass", "grass", "grass", "tree", "grass", "tree", "tree", "grass", "tree", "river_lr", "terrain_clb", "terrain_tb", "terrain_tb", "wolf", "bridge_lr", "terrain_tb", "terrain_tbre", "tree"],
        ["tree", "grass", "grass", "flowers", "tree", "tree", "grass", "grass", "grass", "grass", "tree", "river_lr", "tree", "tree", "tree", "tree", "river_clb", "river_crt", "well", "tree"],
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

    for (var i = 0; i < ground.length; i++) {
        for (var j = 0; j < ground[i].length; j++) {
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
}