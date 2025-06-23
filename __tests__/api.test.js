// // __tests__/api.test.js
const api = require('../api');
const request = require('supertest');

describe('Validate student get endpoint', () => {
    const baseUrl = 'http://localhost:3000'; // URL of the running Docker container

    it('should return a list of 10 students', async () => {
        const response = await request(baseUrl).get('/api/students');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(10);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: expect.any(String) })
        ]));
    });
});



jest.mock('../api'); // Mock the entire module

test('mocking fetchData function', async () => {
  // Set the mock implementation
  api.fetchData.mockResolvedValue('mocked data');

  const data = await api.fetchData();
  
  expect(data).toBe('mocked data');
  expect(api.fetchData).toHaveBeenCalled();
});

const myMock = jest.fn().mockImplementation(() => 'default value');


test('mock implementation', () => {
  expect(myMock()).toBe('default value');
});




