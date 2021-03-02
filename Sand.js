class Sand{
    constructor() {
        var options = {
            density:1,
            friction:5,
            restitution:0.7
        }
        this.body = Bodies.circle(random(20, 780), 100, 5, options);
        this.width = 5;
        this.height = 5;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("black");
        fill("red"); 
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);
        pop(); 
        textSize(10);
        fill("white");
        text("Sand", pos.x-10, pos.y+5);
    }
}