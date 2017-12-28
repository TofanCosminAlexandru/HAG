var drawCanvasImage = function(ctx, image, row, col) {
    return function() {
        ctx.drawImage(image, row * 200, col * 200, 200, 200);
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
                image.src = "water_images/stone.jpg";
            }
        }
    }

    var water = [[],
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

    };

}