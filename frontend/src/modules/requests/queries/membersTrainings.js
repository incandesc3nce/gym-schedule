import { getTrainings } from "../getTrainings";
import { getMembers } from "../getMembers";
import { getTrainers } from "../getTrainers";


export const getMembersTrainings = async () => {
  const members = await getMembers();
  const trainings = await getTrainings();
  const trainers = await getTrainers();

  const memberData = {};

  trainings.forEach(training => {
    const trainerSpecialty = trainers.find(trainer => trainer._id === training.trainer).specialty;

    training.members.forEach(member => {
      const memberEntry = member["member"];
      const memberName = `${members.find(m => m._id === memberEntry).name} ${members.find(m => m._id === memberEntry).surname}`;

      const memberID = member["member"];

      if (!memberData[memberID]) {
        memberData[memberID] = {
          name: memberName,
          specialties: new Set(),
          trainingCount: 0
        };
      }

      memberData[memberID].specialties.add(trainerSpecialty);
      memberData[memberID].trainingCount++;
    });
  });

  return Object.values(memberData).map(member => ({
    name: member.name,
    specialties: Array.from(member.specialties),
    trainingCount: member.trainingCount
  }));
}