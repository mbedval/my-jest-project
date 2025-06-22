// __tests__/math.test.js
const math = require('../math');

test('mocking add function', () => {
  const mockAdd = jest.fn(math.add);
  
  // Call the mock function
  const result = mockAdd(1, 2);
  
  // Check the result
  expect(result).toBe(3);
  
  // Check if the mock function was called
  expect(mockAdd).toHaveBeenCalled();
  expect(mockAdd).toHaveBeenCalledWith(1, 2);
});
