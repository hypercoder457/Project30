class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("blue");
            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else {
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            pop();
        }
    }
}