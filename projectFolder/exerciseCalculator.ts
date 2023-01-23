interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (exerciseHours: Array<number>, target: number): Result => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((hours) => hours > 0).length;
  const average: number =
    exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength;
  const success: boolean = average > target;

  let rating: number = 1;
  let ratingDescription: string = 'not good, try to do better';

  if (average > target + 0.5) {
    rating = 3;
    ratingDescription = 'great job, keep it up';
  } else if (average > target - 0.3) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
