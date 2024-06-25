export const createQueryNav = () => {
  const queryContainer = document.querySelector('.query-container');
  
  const queryNav = document.createElement('nav');
  
  const memberTrainings = document.createElement('button');
  memberTrainings.textContent = 'На какие тренировки ходят посетители';
  memberTrainings.classList.add('btn-query-inactive');
  memberTrainings.setAttribute('id', 'member-trainings');
  
  const dateTrainings = document.createElement('button');
  dateTrainings.textContent = 'Какие тренировки проводятся в определенную дату';
  dateTrainings.classList.add('btn-query-inactive');
  dateTrainings.setAttribute('id', 'date-trainings');

  queryNav.appendChild(memberTrainings);
  queryNav.appendChild(dateTrainings);
  
  queryContainer.appendChild(queryNav);
};