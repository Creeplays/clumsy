
# Clumsy

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][travis-image]][travis-url]


Clumsy.js is a library for creating math figures on HTMLCanvas in XKCD style.

This library can be used with Node.js libraries `canvas` and `gifencoder`:

```shell
$ npm install canvas gifencoder
```

## Preparing for drawing

Before drawing it needs to create Canvas and pass this canvas to constructor of object Clumsy. By default clumsy object have padding in 100px and ranges [-1, 1] in both directions. This can be changed by special methods:

```js
// Adds canvas module from npm repository for example
var Canvas = require('canvas');

// Adds this module
var clumsy = require('clumsy');

// And some helpers for interaction with canvas and gifencoder modules
var helpers = require('clumsy/helpers');

// Inits objects
var canvas = new Canvas(800, 600)
var clumsy = new Clumsy(canvas);

// Sets padding and ranges before drawing
clumsy.padding(150);
clumsy.range(0, 2*Math.PI, -1.5, 1.5);
```

## Drawing a figure

Pass arrays with points to method draw. Each point must consider x and y field, e.g. {x: 0, y: 0} - begin coordinate system.

```js
var Canvas = require('canvas');
var clumsy = require('clumsy');
var helpers = require('clumsy/helpers');

var canvas = new Canvas(800, 600)
var clumsy = new Clumsy(canvas);

clumsy.padding(150);
clumsy.range(0, 2*Math.PI, -1.5, 1.5);

var sine = [];

for(var t=0; t < 2*Math.PI; t += 0.01){
    sine.push({
        x: t,
        y: Math.sin(t)
    });
};

clumsy.draw(sine);

helpers.saveAsPng(clumsy); // save as png of same name
```

Result:

![alt tag](https://raw.github.com/kreshikhin/clumsy/master/examples/readme-sine.png)


## Drawing a figure with scaled axis and title

```javascript
var Canvas = require('canvas');
var Clumsy = require('clumsy');
var helpers = require('clumsy/helpers');

var canvas = new Canvas(800, 600)
var clumsy = new Clumsy(canvas);

clumsy.ctx.font = '24px VoronovFont';
clumsy.padding(100);
clumsy.range(0, 7, -1.5, 1.5);

var sine = [];

for(var t=0; t < 2*Math.PI; t += 0.01){
    sine.push({
        x: t,
        y: Math.sin(t)
    });
};

clumsy.draw(sine);

clumsy.drawAxis('x', 0, 7, {
    limits: [0.5, 6.5],
    step: 0.5,
    tick_size: 5
});

clumsy.ctx.fillStyle = 'black';

clumsy.drawAxis('y', -2, 2, {
    limits: [-1.5, 1.5],
    step: 0.5
});

clumsy.fillTextAtCenter('Синус', clumsy.canvas.width/2, 50);

helpers.saveAsPng(clumsy);

```

Result:

![alt tag](https://raw.github.com/kreshikhin/clumsy/master/examples/readme-axis.png)

## Animation

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/clumsy.svg
[npm-url]: https://npmjs.org/package/clumsy
[downloads-image]: https://img.shields.io/npm/dm/clumsy.svg
[downloads-url]: https://npmjs.org/package/clumsy
[travis-image]: https://img.shields.io/travis/kreshikhin/clumsy/master.svg
[travis-url]: https://travis-ci.org/kreshikhin/clumsy
