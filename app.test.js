// Task 1
const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw Error('String must be in range 1 - 10');
  }
  return str.length;
};

test('Returns the correct length of string', () => {
  expect(stringLength('abc')).toBe(3);
});

test('String has greater than 0 chars', () => {
  expect(() => stringLength('')).toThrow(/range/);
});

test('String has at most 10 chars', () => {
  expect(() => stringLength('0123456789abcd')).toThrow(/range/);
});

// Task 2

const reverseString = (str) => str.split('').reverse().join('');

test('Function returns the reverse of a string', () => {
  expect(reverseString('hannan')).toBe('nannah');
});
