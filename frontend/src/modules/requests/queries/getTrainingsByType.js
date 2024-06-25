import { getTrainings } from "../getTrainings";
import { getTrainers } from "../getTrainers";

export const getTrainingsByType = async (specialty) => {
  const trainings = await getTrainings();
  const trainers = await getTrainers();
  const resultTrainings = trainings.filter(training => {
    const trainer = trainers.find(t => t._id === training.trainer);
    return trainer.specialty === specialty;
  });

  return resultTrainings;
}