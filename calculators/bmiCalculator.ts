interface BmiValues {
  heightInCm: number;
  weightInKg: number;
}

const parseBmiArgs = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    if (Number(args[2]) > 0 && Number(args[3]) > 0) {
      return {
        heightInCm: Number(args[2]),
        weightInKg: Number(args[3]),
      };
    } else {
      throw new Error('Provided values have to be positive numbers');
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (heightInCm: number, weightInKg: number): string => {
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

try {
  const { heightInCm, weightInKg } = parseBmiArgs(process.argv);
  console.log(calculateBmi(heightInCm, weightInKg));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
