var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');

var img = new Image();
img.src = "img/aviao.png";
img.addEventListener('load', function(){
    loop();
}, false);

var objs = {
    x: 100,
    y: 100,
    width: 800,
    height: 64,
    rotation: 0,
    img: img,
    centerX: function(){
        return this.x + this.width/2;
    },
    centerY: function(){
        return this.y + this.height/2;
    }
};

var mouse = {};

cnv.addEventListener("mousemove", function(e){
    mouse.x = e.clientX - cnv.offsetLeft;
    mouse.y = e.clientY - cnv.offsetTop;
}, false);

function loop(){
    requestAnimationFrame(loop, cnv);
        update();
        render();
}

function update(){
    var dx = mouse.x - objs.centerX();
    var dy = mouse.y - objs.centerY();
    var distance = Math.sqrt(dx*dx + dy*dy);

    if(distance >= 1){
        objs.x += dx * .1;
        objs.y += dy * .1;
    }
}

function render(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.save();
    ctx.translate(objs.centerX(), objs.centerY());
    ctx.rotate(objs.rotation);
    ctx.drawImage(
        objs.img, 0, 0, objs.width, objs.height,
        -objs.width/2, -objs.height/2, objs.width, objs.height
    );
    ctx.restore();
}