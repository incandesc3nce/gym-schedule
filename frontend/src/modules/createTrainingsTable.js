import { getTrainings } from './requests/getTrainings';
import { getTrainers } from './requests/getTrainers';
import { formatDate } from './formatDate';

const sortSchedule = (arr) => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    const timeA = a.start_time.split(':').map(Number);
    const timeB = b.start_time.split(':').map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }

    return timeA[1] - timeB[1];
  })
}

export const createTrainingsTable = async () => {
  const trainings = await getTrainings();
  const trainers = await getTrainers();

  const content = document.querySelector('#content');
  const table = document.createElement('table');

  const tableHeader = document.createElement('tr');
  const tableHeaderDate = document.createElement('th');
  tableHeaderDate.textContent = 'Дата';
  const tableHeaderStartTime = document.createElement('th');
  tableHeaderStartTime.textContent = 'Начало';
  const tableHeaderEndTime = document.createElement('th');
  tableHeaderEndTime.textContent = 'Конец';
  const tableHeaderType = document.createElement('th');
  tableHeaderType.textContent = 'Тип тренировки';
  const tableHeaderGroupSize = document.createElement('th');
  tableHeaderGroupSize.textContent = 'Размер группы';
  const tableHeaderTrainer = document.createElement('th');
  tableHeaderTrainer.textContent = 'Тренер';
  
  tableHeader.appendChild(tableHeaderDate);
  tableHeader.appendChild(tableHeaderStartTime);
  tableHeader.appendChild(tableHeaderEndTime);
  tableHeader.appendChild(tableHeaderType);
  tableHeader.appendChild(tableHeaderGroupSize);
  tableHeader.appendChild(tableHeaderTrainer);

  table.appendChild(tableHeader);

  const sortedTrainings = sortSchedule(trainings);

  for (let i = 0; i < sortedTrainings.length; i++) {
    const trainer = trainers.find(trainer => trainer._id === sortedTrainings[i].trainer);
    
    const tableRow = document.createElement('tr');

    const tableRowDate = document.createElement('td');
    const date = new Date(sortedTrainings[i].date);
    const formattedDate = formatDate(date);

    tableRowDate.textContent = formattedDate;

    const tableRowStartTime = document.createElement('td');
    tableRowStartTime.textContent = sortedTrainings[i].start_time;

    const tableRowEndTime = document.createElement('td');
    tableRowEndTime.textContent = sortedTrainings[i].end_time;

    const tableRowType = document.createElement('td');
    tableRowType.textContent = trainer.specialty;

    const tableRowGroupSize = document.createElement('td');
    tableRowGroupSize.textContent = sortedTrainings[i].members.length;

    const tableRowTrainer = document.createElement('td');
    tableRowTrainer.textContent = `${trainer.name} ${trainer.surname}`;
    
    tableRow.appendChild(tableRowDate);
    tableRow.appendChild(tableRowStartTime);
    tableRow.appendChild(tableRowEndTime);
    tableRow.appendChild(tableRowType);
    tableRow.appendChild(tableRowGroupSize);
    tableRow.appendChild(tableRowTrainer);

    table.appendChild(tableRow);
  }

  content.appendChild(table);
}