// Task 3
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

describe('My calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  //   Addition
  describe('My calculator with additions', () => {
    test('Add 1 + 2 = 3', () => {
      expect(calc.add(1, 2)).toBe(3);
    });

    test('Add -6 + 10 = 4', () => {
      expect(calc.add(-6, 10)).toBe(4);
    });

    test('Add 0 + 0 = 0', () => {
      expect(calc.add(0, 0)).toBe(0);
    });
  });

  //   Subtraction
  describe('My calculator with subtractions', () => {
    test('Sub 4 - 3 = 1', () => {
      expect(calc.subtract(4, 3)).toBe(1);
    });

    test('Sub -8 - 3 = -11', () => {
      expect(calc.subtract(-8, 3)).toBe(-11);
    });

    test('Sub 4 - 7 = -3', () => {
      expect(calc.subtract(4, 7)).toBe(-3);
    });
  });

  //  Multiplication
  describe('My calculator with multiplications', () => {
    test('Mul 3 x 6 = 18', () => {
      expect(calc.multiply(3, 6)).toBe(18);
    });

    test('Mul 4 x 0 = 0', () => {
      expect(calc.multiply(4, 0)).toBe(0);
    });

    test('Mul 1 x 1 = 1', () => {
      expect(calc.multiply(1, 1)).toBe(1);
    });
  });

  //   Division
  describe('My calculator with divisions', () => {
    test('Div 6 / 3 = 2', () => {
      expect(calc.divide(6, 3)).toBe(2);
    });

    test('Div 0 / 1 = 0', () => {
      expect(calc.divide(0, 1)).toBe(0);
    });

    test('Div 4 / -2 = -2', () => {
      expect(calc.divide(4, -2)).toBe(-2);
    });
  });
});
