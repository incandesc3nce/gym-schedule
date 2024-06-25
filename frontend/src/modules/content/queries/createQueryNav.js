import { membersTrainings } from "../../requests/queries/membersTrainings";

export const createQueryNav = () => {
  const queryContainer = document.querySelector('.query-container');
  
  const queryNav = document.createElement('nav');
  
  const memberTrainingsBtn = document.createElement('button');
  memberTrainingsBtn.textContent = 'На какие тренировки ходят посетители';
  memberTrainingsBtn.classList.add('btn-query-inactive');
  memberTrainingsBtn.setAttribute('id', 'member-trainings');
  
  const dateTrainingsBtn = document.createElement('button');
  dateTrainingsBtn.textContent = 'Тренировки по видам';
  dateTrainingsBtn.classList.add('btn-query-inactive');
  dateTrainingsBtn.setAttribute('id', 'date-trainings');

  queryNav.appendChild(memberTrainingsBtn);
  queryNav.appendChild(dateTrainingsBtn);
  
  queryContainer.appendChild(queryNav);
};