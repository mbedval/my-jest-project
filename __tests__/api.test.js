// // __tests__/api.test.js
// const api = require('../api');

// jest.mock('../api'); // Mock the entire module

// test('mocking fetchData function', async () => {
//   // Set the mock implementation
//   api.fetchData.mockResolvedValue('mocked data');

//   const data = await api.fetchData();
  
//   expect(data).toBe('mocked data');
//   expect(api.fetchData).toHaveBeenCalled();
// });

const myMock = jest.fn().mockImplementation(() => 'default value');


test('mock implementation', () => {
  expect(myMock()).toBe('default value');
});

const axios = require('axios');


test.skip ('should return the correct number of records', async () => {
    const response = await axios.get('http://localhost:3000/posts');
    
    // Check if the response status is 200
    expect(response.status).toBe(200);
    
    // Verify the number of records
    const records = response.data; // Assuming the response data is an array
    expect(Array.isArray(records)).toBe(true); // Check if it's an array
    expect(records.length).toBeGreaterThan(0); // Check if there are records
    console.log(`Number of records: ${records.length}`); // Log the number of records

    console.log(records);
  });




