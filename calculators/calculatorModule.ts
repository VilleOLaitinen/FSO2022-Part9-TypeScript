interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateBmi = (heightInCm: number, weightInKg: number): string => {
  const bmi: number = weightInKg / (heightInCm / 100) ** 2;

  if (bmi >= 30) {
    return 'Obese';
  } else if (bmi >= 25) {
    return 'Overweight';
  } else if (bmi >= 18.5) {
    return 'Normal (healthy weight)';
  } else {
    return 'Underweight';
  }
};

export const calculateExercises = (
  exerciseHours: Array<number>,
  target: number
): Result => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((hours) => hours > 0).length;
  const average: number =
    exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength;
  const success: boolean = average > target;

  let rating = 1;
  let ratingDescription = 'bad';

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
