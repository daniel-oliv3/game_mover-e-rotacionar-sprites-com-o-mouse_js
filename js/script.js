var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');

var img = new Image();
img.src = "img/aviao.png";

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
    requestAnimationFrame(loop, cnv){
        update();
        render();
    }
}

function update(){
    
}

function render(){
    
}