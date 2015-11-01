
function StandingGroup(clumsy, shift){
    var canvas = clumsy.canvas;

    clumsy.clean('white');
    clumsy.ctx.font = '24px VoronovFont';
    clumsy.padding(100);
    clumsy.range(0, 1.1, -1, 1);
    clumsy.radius = 3;
    clumsy.step = 10;
    clumsy.lineWidth(2);

    clumsy.color('black');
    clumsy.axis('x', 0, 1.1);
    clumsy.axis('y', -1, 1);

    var f0 = 5;

    var wave = clumsy.tabulate(0, 1.01, 0.01, function(t0){
        var dt = shift / f0;
        var t = t0 + dt;
        return 0.5 * Math.sin(2*Math.PI*f0*t) * Math.exp(-15*(t0-0.5)*(t0-0.5));
    });

    clumsy.color('red');
    clumsy.draw(wave);

    clumsy.fillTextAtCenter("Стоячая волна, Vгр = 0", canvas.width/2, 50);
    clumsy.fillText("x(t)", 110, 110);
    clumsy.fillText("t", 690, 330);
}

if(typeof module != 'undefined' && module.exports){
    module.exports = StandingGroup;
}