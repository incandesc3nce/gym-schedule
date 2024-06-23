export const getTrainers = async () => {
  const response = await fetch('http://localhost:3000/trainers');
  const trainers = await response.json();
  return trainers;
}