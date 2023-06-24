
// Class Polygon accepts sides as a parameter
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0)
    }
}


// Class triangle has a single getter method to determine if the given
// 3 sides for a triagle is valid using Pythogorean theorem
class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            const [side1, side2, side3] = this.sides;
            return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
        }
        return false;
    }
}

// Class square has a getter method to determine if all 4 sides are valid
// Also has getter method to determine area
class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side1 === side3 && side1 === side4;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        const side = this.sides[0];
        return side * side;
      }
      return undefined;
    }
  }