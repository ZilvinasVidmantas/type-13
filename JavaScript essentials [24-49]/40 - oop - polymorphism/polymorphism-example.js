// Polimorfizas(daug kūnų) - tai skirtingų veiksmų vykdymas, kuris užsirašo vienodai.
class Rectangle {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //  Skirtingas veiksmas 1
  get perimeter() {
    console.log('executing Rectangle.perimeter getter')
    return 2 * this.x + 2 * this.y;
  }
}

class Circle {
  r;

  constructor(r) {
    this.r = r;
  }

  //  Skirtingas veiksmas 2
  get perimeter() {
    console.log('executing Circle.perimeter getter')
    return 2 * Math.PI * this.r;
  }
}

const shapes = [
  new Rectangle(5, 10),
  new Rectangle(7, 7),
  new Circle(5),
  new Circle(7),
  new Circle(9),
];

//                                     tas pats užrašas
shapes.forEach((shape) => console.log(shape.perimeter));
