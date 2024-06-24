import { createTrainerForm } from "./createTrainerForm";
import { formFactory } from "../../helpers/listenerFactory";

export const createNav = () => {
  const {trainerFormHandler} = formFactory();
  
  const addContainer = document.querySelector('.add-container');

  const nav = document.createElement('nav');

  const addTraining = document.createElement('button');
  addTraining.textContent = 'Тренировка';
  addTraining.classList.add('btn-add-inactive');

  const addTrainer = document.createElement('button');
  addTrainer.textContent = 'Тренер';
  addTrainer.classList.add('btn-add-inactive');

  const addMember = document.createElement('button');
  addMember.textContent = 'Посетитель';
  addMember.classList.add('btn-add-inactive');

  nav.appendChild(addTraining);
  nav.appendChild(addTrainer);
  nav.appendChild(addMember);

  addContainer.appendChild(nav);
};