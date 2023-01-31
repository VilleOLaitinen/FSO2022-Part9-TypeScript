import { calculateBmi, calculateExercises } from './calculatorModule';
import express from 'express';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).send({ error: 'malformatted parameters' });
  } else {
    const bmi = calculateBmi(height, weight);
    res.send({ weight, height, bmi });
  }
});

app.use(express.json());
app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).send({ error: 'parameters missing' });
  } else if (
    !Array.isArray(daily_exercises) ||
    isNaN(Number(target)) ||
    Number(target) < 0 ||
    daily_exercises.length === 0
  ) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  const asNumbers: Array<number> = [];
  const targetAsNumber = Number(target);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  for (let i = 0; i < daily_exercises.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isNaN(Number(daily_exercises[i])) || Number(daily_exercises[i] < 0)) {
      res.status(400).send({ error: 'malformatted parameters' });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    asNumbers.push(Number(daily_exercises[i]));
  }

  res.send(calculateExercises(asNumbers, targetAsNumber));
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
