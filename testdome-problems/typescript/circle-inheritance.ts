class GameObject {
    constructor(public x: number, public y: number){}
}

class Circle extends GameObject {
    public radius: number;

    constructor(x: number, y: number, radius: number){
        super(x, y);
        this.radius = radius;
    }
}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"