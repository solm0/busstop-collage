function Raindrop(x, y, w, h) {
    var options = {
        friction: 0,
        restitution: 1,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.isOffScreen = function() {
        var pos = this.body.position;
        return (pos.y > height - 200);
    }

    this.removeFromWorld = function() {
        World.remove(world, this.body);
    }

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(128);
        rect(0, 0, w, h);
        pop();
    }
}