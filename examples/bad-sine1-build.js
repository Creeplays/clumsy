
var Canvas = require('canvas');
var Clumsy = require('../clumsy');
var helpers = require('../helpers');
var fs = require('fs');
var path = require('path');

var canvas = new Canvas(800, 600);
var clumsy = new Clumsy(canvas);

clumsy.padding(50);
clumsy.range(0, 2*Math.PI, -1.5, 1.5);
clumsy.font('24px VoronovFont');

clumsy.radius(30);
clumsy.step(1);
clumsy.lineWidth(2);

var sine = clumsy.tabulate(0, 2*Math.PI, 0.1, Math.sin);

clumsy.color('black');
clumsy.draw(sine);
clumsy.fillTextAtCenter('Неправильный шаг', clumsy.canvas.width/2, 50);

var name = helpers.takePngName();
var out = fs.createWriteStream(path.join('./', name));
canvas.pngStream().pipe(out);
