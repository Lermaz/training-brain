class GameObject {
    constructor(public x: number, public y: number, public radius: number){}
}

class Circle extends GameObject {}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"