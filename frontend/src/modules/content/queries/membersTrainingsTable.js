import { getMembersTrainings } from "../../requests/queries/membersTrainings";

export const membersTrainingsTable = async () => {
  const membersTrainings = await getMembersTrainings();
  console.log(membersTrainings);
  
  const resultsContainer = document.querySelector('.results-container');
  
  const table = document.createElement('table');
  
  const tableHeader = document.createElement('tr');
  const tableHeaderName = document.createElement('th');
  tableHeaderName.textContent = 'Посетитель';
  const tableHeaderSpecialty = document.createElement('th');
  tableHeaderSpecialty.textContent = 'На какие тренировки ходит';
  const tableHeaderTrainingCount = document.createElement('th');
  tableHeaderTrainingCount.textContent = 'Количество тренировок в неделю';
  tableHeader.appendChild(tableHeaderName);
  tableHeader.appendChild(tableHeaderSpecialty);
  tableHeader.appendChild(tableHeaderTrainingCount);

  table.appendChild(tableHeader);
  
  membersTrainings.forEach((member) => {
    const memberRow = document.createElement('tr');
    const memberName = document.createElement('td');
    memberName.textContent = `${member.name}`;
    const memberSpecialty = document.createElement('td');
    memberSpecialty.textContent = member.specialties.join(', ');
    const memberTrainingCount = document.createElement('td');
    memberTrainingCount.textContent = member.trainingCount;
    memberRow.appendChild(memberName);
    memberRow.appendChild(memberSpecialty);
    memberRow.appendChild(memberTrainingCount);
    table.appendChild(memberRow);
  });
  
  resultsContainer.appendChild(table);
};