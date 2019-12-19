import express, { Router } from 'express';
const app = express();
const router = Router();

export const memoryDB: any = {
  students: [],
};

router.post('/api/v1/students', (req, res) => {
  const studentId = req.params.id;
  const foundStudent = memoryDB.students.find((student) => student.id === studentId);
  if (foundStudent) {
    return res.sendStatus(409);
  }
  memoryDB.students.push({ id: studentId });
  res.sendStatus(201);
});

app.use(router);

export default app;
