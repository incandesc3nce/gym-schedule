import { createTrainerForm } from "./createTrainerForm";

export const createNav = () => {
  const addContainer = document.querySelector('.add-container');

  const nav = document.createElement('nav');

  const addTraining = document.createElement('button');
  addTraining.textContent = 'Тренировка';
  addTraining.classList.add('btn-add-inactive');
  addTraining.setAttribute('id', 'add-training');

  const addTrainer = document.createElement('button');
  addTrainer.textContent = 'Тренер';
  addTrainer.classList.add('btn-add-inactive');
  addTrainer.setAttribute('id', 'add-trainer');

  const addMember = document.createElement('button');
  addMember.textContent = 'Посетитель';
  addMember.classList.add('btn-add-inactive');
  addMember.setAttribute('id', 'add-member');

  nav.appendChild(addTraining);
  nav.appendChild(addTrainer);
  nav.appendChild(addMember);

  addContainer.appendChild(nav);
};