import { add, subtract, multiply, divide } from './Arithmetic';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divides 8 / 2 to equal 4', () => {
  expect(divide(8, 2)).toBe(4);
});

test('divides by zero', () => {
  expect(divide(8, 0)).toBe('Cannot divide by zero');
});
