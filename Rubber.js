class Rubber{
    constructor() {
        var options = {
            density:1,
            friction:5,
            restitution:0.3
        }
        this.body = Bodies.circle(600, 100, 34, options);
        this.width = 34;
        this.height = 34;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("blue"); 
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);
        pop(); 
        textSize(16);
        fill("white");
        text("Rubber", pos.x-30, pos.y+5);
    }
}