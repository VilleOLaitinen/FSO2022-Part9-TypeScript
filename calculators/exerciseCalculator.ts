interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface CalculationArgs {
  exerciseHours: Array<number>;
  target: number;
}

const parseExerciseArgs = (args: Array<string>): CalculationArgs => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const asNumbers: Array<number> = args.slice(2).map(Number);

  asNumbers.forEach((element) => {
    if (isNaN(element)) {
      throw new Error('Every argument has to be a number!');
    } else if (element < 0) {
      throw new Error('No negative numbers allowed!');
    }
  });

  const target: number = asNumbers[0];
  const exerciseHours: Array<number> = asNumbers.slice(1);

  return {
    exerciseHours,
    target,
  };
};

const calculateExercises = (exerciseHours: Array<number>, target: number): Result => {
  const periodLength: number = exerciseHours.length;
  const trainingDays: number = exerciseHours.filter((hours) => hours > 0).length;
  const average: number =
    exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength;
  const success: boolean = average > target;

  let rating = 1;
  let ratingDescription = 'not good, try to do better';

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

try {
  const { exerciseHours, target } = parseExerciseArgs(process.argv);
  console.log(calculateExercises(exerciseHours, target));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
