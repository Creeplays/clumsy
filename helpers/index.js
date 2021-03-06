
var path = require('path');
var fs = require('fs');

var takeGifName = function(){
    return path.basename(process.argv[1], '.js').replace('-build', '') + '.gif';
}

var takePngName = function(){
    return path.basename(process.argv[1], '.js').replace('-build', '') + '.png';
}

module.exports = {
    takeGifName: takeGifName,
    takePngName: takePngName,
    prepareEncoder: function(ctor, canvas, name, repeat, delay, quality){
        if(!ctor || !canvas){
            throw('First and second arguments are required. Pass constructor of GIFEncoder as first, and instance of Canvas as second');
        };

        var encoder = new ctor(canvas.width, canvas.height);
        encoder.createReadStream().pipe(
            fs.createWriteStream(
                name || takeGifName()));

        encoder.setRepeat(repeat || 0);   // 0 for repeat, -1 for no-repeat
        encoder.setDelay(delay || 50);  // frame delay in ms
        encoder.setQuality(quality || 10); // image quality. 10 is default.
        return encoder;
    },
    saveAsPng: function(clumsy){
        if(!clumsy){
            throw('First argument are required. It must be instance of Clumsy');
        };

        var name = takePngName();
        var out = fs.createWriteStream(path.join('./', name));
        clumsy.canvas.pngStream().pipe(out);
    }
}
