import { getTrainingsByType } from "../../requests/queries/getTrainingsByType.js";
import { getTrainers } from "../../requests/getTrainers.js";
import { removeChildren } from "../../helpers/listenerFactory.js";
import { formatDate } from "../../helpers/formatDate.js";

const sortTrainings = (arr) => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    const timeA = a.start_time.split(":").map(Number);
    const timeB = b.start_time.split(":").map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }

    return timeA[1] - timeB[1];
  });
};

export const trainingsTypeTable = async () => {
  const trainers = await getTrainers();  
  const resultsContainer = document.querySelector('.results-container');

  const form = document.createElement('form');
  form.classList.add('submit-form');

  const type = document.createElement('div');
  const typeLabel = document.createElement('label');
  typeLabel.textContent = 'Тип тренировки*';
  const typeSelect = document.createElement('select');
  typeSelect.setAttribute('name', 'type');
  typeSelect.setAttribute('id', 'type');

  trainers.forEach(trainer => {
    const option = document.createElement('option');
    option.value = trainer.specialty;
    option.textContent = trainer.specialty;
    typeSelect.appendChild(option);
  });

  type.appendChild(typeLabel);
  type.appendChild(typeSelect);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Показать';

  form.appendChild(type);
  form.appendChild(submit);

  resultsContainer.appendChild(form);

  const tableContainer = document.createElement('div');
  tableContainer.classList.add('table-container');
  resultsContainer.appendChild(tableContainer);

  form.addEventListener('submit', async (event) => {
    removeChildren(tableContainer);
    
    event.preventDefault();


    const formData = new FormData(form);
    const type = formData.get('type');
    let trainingsByType = await getTrainingsByType(type);
    trainingsByType = sortTrainings(trainingsByType);

    if (trainingsByType.length === 0) {
      const noResults = document.createElement('p');
      noResults.textContent = 'По вашему запросу ничего не найдено';
      tableContainer.appendChild(noResults);
    } else {
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
      tableHeaderGroupSize.textContent = 'Придет (n человек)';
      const tableHeaderTrainer = document.createElement('th');
      tableHeaderTrainer.textContent = 'Тренер';

      tableHeader.appendChild(tableHeaderDate);
      tableHeader.appendChild(tableHeaderStartTime);
      tableHeader.appendChild(tableHeaderEndTime);
      tableHeader.appendChild(tableHeaderType);
      tableHeader.appendChild(tableHeaderGroupSize);
      tableHeader.appendChild(tableHeaderTrainer);
      table.appendChild(tableHeader);

      trainingsByType.forEach((training) => {
        const trainingTrainer = trainers.find(
          (trainer) => trainer._id === training.trainer
        );

        const row = document.createElement('tr');

        const date = document.createElement('td');
        const formattedDate = formatDate(new Date(training.date));
        date.textContent = formattedDate;

        const startTime = document.createElement('td');
        startTime.textContent = training.start_time;

        const endTime = document.createElement('td');
        endTime.textContent = training.end_time;

        const type = document.createElement('td');
        type.textContent = trainingTrainer.specialty;
        const groupSize = document.createElement('td');
        groupSize.textContent = training.members.length;
        const trainer = document.createElement('td');
        trainer.textContent = `${trainingTrainer.name} ${trainingTrainer.surname}`;
        row.appendChild(date);
        row.appendChild(startTime);
        row.appendChild(endTime);
        row.appendChild(type);
        row.appendChild(groupSize);
        row.appendChild(trainer);
        table.appendChild(row);
      });
      tableContainer.appendChild(table);
    }
  });
}