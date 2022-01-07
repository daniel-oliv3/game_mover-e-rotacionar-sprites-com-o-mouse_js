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
}

function loop(){
    requestAnimationFrame(loop, cnv);
        update();
        render();
}

function update(){
    
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