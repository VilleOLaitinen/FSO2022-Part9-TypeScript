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
