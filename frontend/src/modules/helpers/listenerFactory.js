import { createTrainingsTable } from "../content/createTrainingsTable";
import { createTrainersCards } from "../content/createTrainersCards";
import { createMembersTable } from "../content/createMembersTable";

import { createNav } from "../content/forms/createNav";
import { createTrainerForm } from "../content/forms/createTrainerForm";

const removeChildren = (parent) => {
  if (!parent) return;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const getActiveButton = () => document.querySelector('.btn-active');

const swapActiveButton = (event) => {
  const activeButton = getActiveButton();

  if (activeButton) {
    activeButton.classList.remove('btn-active');
    activeButton.classList.add('btn-inactive');
    
    const clickedButton = event.target;
    clickedButton.classList.remove('btn-inactive');
    clickedButton.classList.add('btn-active');
  } else {
    event.target.classList.add('btn-active');
    event.target.classList.remove('btn-inactive');
  }
};

export const listenerFactory = () => {
  const content = document.querySelector('#content');
  
  const scheduleHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(content);
    createTrainingsTable();
  };

  const trainersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(content);
    createTrainersCards();
  };

  const membersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(content);
    createMembersTable();
  };

  const addHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(content);

    const addContainer = document.createElement('div');
    addContainer.classList.add('add-container');
    content.appendChild(addContainer);
    createNav();

    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'form-container');
    addContainer.appendChild(formContainer);
  };

  return {scheduleHandler, trainersHandler, membersHandler, addHandler};
};


const getAddActiveButton = () => document.querySelector('.btn-add-active');

const swapAddActiveButton = (event) => {
  const activeButton = getAddActiveButton();

  if (activeButton) {
    activeButton.classList.remove('btn-add-active');
    activeButton.classList.add('btn-add-inactive');
    
    const clickedButton = event.target;
    clickedButton.classList.remove('btn-add-inactive');
    clickedButton.classList.add('btn-add-active');
  } else {
    event.target.classList.add('btn-add-active');
    event.target.classList.remove('btn-add-inactive');
  }
};

export const formFactory = () => {
  const trainerFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');
    
    event.preventDefault();
    swapAddActiveButton(event);
    removeChildren(formContainer);
    const trainerForm = createTrainerForm();

    formContainer.appendChild(trainerForm);
  };

  return {trainerFormHandler};
};