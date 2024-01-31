const {
  sum, multiply, divide, power,
} = require('./02-math');

test('add 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('multiply 1 * 3 should be 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test('divide 4 / 2 should be 2', () => {
  const rta = divide(4, 2);
  expect(rta).toBe(2);
  const rta2 = divide(6, 3);
  expect(rta2).toBe(2);
});

test('divide for zero', () => {
  const rta = divide(4, 0);
  expect(rta).toBe(null);
  const rta2 = divide(6, 0);
  expect(rta2).toBe(null);
});

test('power of the base number', () => {
  const rta = power(2, 2);
  expect(rta).toBe(4);
  const rta2 = power(2, 0);
  expect(rta2).toBe(1);
});
