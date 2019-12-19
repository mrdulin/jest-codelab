import request from 'supertest';
import app, { memoryDB } from './app';

describe('student routes', () => {
  afterEach(() => {
    memoryDB.students = [];
  });

  test('Create student', async () => {
    const response = await request(app).post('/api/v1/students?id=lee');
    expect(response.status).toEqual(201);
  });

  test('Create duplicate student test', async () => {
    const response1 = await request(app).post('/api/v1/students?id=lee');
    const response2 = await request(app).post('/api/v1/students?id=lee');
    expect(response2.status).toEqual(409);
  });
});
