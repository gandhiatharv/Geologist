class Iron{
    constructor(x, y, width, height) {
        var options = {
            density:10,
            friction:0.4,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke("black")
        fill("maroon"); 
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop(); 
        textSize(24);
        fill("white");
        text("Iron", pos.x-30, pos.y+5);
    }
}