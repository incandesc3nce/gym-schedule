export const getTrainings = async () => {
  const response = await fetch('http://localhost:3000/trainings');
  const trainings = await response.json();
  return trainings;
}