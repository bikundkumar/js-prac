// Declaration
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// Expression; the class is annonymous but assigned to a variable
// const Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// Expression; the class has its own name
// const Rectangle = class Rectangle2 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// Methods

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height + this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1, p2));

// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); /* call the super class constructor and pass in the \
                            name parameter   */
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const noise = new Animal("Dogesh");
noise.speak();
const d = new Dog("Mitzie");
d.speak();