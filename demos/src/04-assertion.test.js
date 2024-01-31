test('test obj', () => {
  const data = { name: 'leandro' };
  data.lastname = 'bouza';
  expect(data).toEqual({ name: 'leandro', lastname: 'bouza' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Leandro').toMatch(/and/);
});

test('list / array', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  expect(numbers).toContain(7);
});
