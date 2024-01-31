describe('Set', () => {
  beforeAll(() => {
    console.log('Before All');
  });
  test('Caso 1', () => {
    console.log('Caso 1');
    expect(1 + 1).toBe(2);
  });
  test('Caso 2', () => {
    console.log('Caso 2');
    expect(1 + 3).toBe(4);
  });

  describe('Group 01', () => {
    test('Caso 3', () => {
      console.log('Caso 3');
      expect(1 + 4).toBe(5);
    });
    test('Caso 4', () => {
      console.log('Caso 4');
      expect(1 + 3).toBe(4);
    });
  });

  describe('Group 02', () => {
    beforeAll(() => {
      console.log('Before All');
    });
    test('Caso 5', () => {
      console.log('Caso 5');
      expect(1 + 4).toBe(5);
    });
    test('Caso 6', () => {
      console.log('Caso 6');
      expect(1 + 3).toBe(4);
    });
  });
});
