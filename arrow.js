var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "#000000";

// Arrow
function Arrow () {
    this.x = 0;
    this.y = 50;
    this.dx = 1;
    this.dy = 1;
    // make it in the center
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.color = "#ffff00";
    this.rotation = 0;
    this.targetX = this.x;
    this.targetY = this.y;
}

Arrow.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(-50, -25);
    context.lineTo(0, -25);
    context.lineTo(0, -50);
    context.lineTo(50, 0);
    context.lineTo(0, 50);
    context.lineTo(0, 25);
    context.lineTo(-50, 25);
    context.lineTo(-50, -25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
};

var arrow = new Arrow();
arrow.draw(ctx);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    // Move arrow towards target position
    arrow.x += (arrow.targetX - arrow.x) * 0.08;
    arrow.y += (arrow.targetY - arrow.y) * 0.08;
    arrow.draw(ctx);
}

canvas.addEventListener('mousemove', function(event){
    var dx = event.clientX - arrow.x;
    var dy = event.clientY - arrow.y;
    arrow.rotation = Math.atan2(dy, dx);
    // Update target position to mouse position
    arrow.targetX = event.clientX;
    arrow.targetY = event.clientY;
},false);

animate();
