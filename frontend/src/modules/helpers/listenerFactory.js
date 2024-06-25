import { createTrainingsTable } from "../content/createTrainingsTable";
import { createTrainersCards } from "../content/createTrainersCards";
import { createMembersTable } from "../content/createMembersTable";

import { createNav } from "../content/forms/createNav";
import { createTrainingForm } from "../content/forms/createTrainingForm";
import { createMemberForm } from "../content/forms/createMemberForm";
import { createTrainerForm } from "../content/forms/createTrainerForm";

import { createQueryNav } from "../content/queries/createQueryNav";

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

  const queriesHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(content);
    
    const queriesContainer = document.createElement('div');
    queriesContainer.classList.add('query-container');
    content.appendChild(queriesContainer);
    createQueryNav();
  };

  return {scheduleHandler, trainersHandler, membersHandler, addHandler, queriesHandler};
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
  const trainingFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');

    event.preventDefault();
    swapAddActiveButton(event);
    removeChildren(formContainer);
    const trainingForm = createTrainingForm();
    
    formContainer.appendChild(trainingForm);
  };
  
  const memberFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');
    
    event.preventDefault();
    swapAddActiveButton(event);
    removeChildren(formContainer);
    const memberForm = createMemberForm();
    
    formContainer.appendChild(memberForm);
  };
  
  const trainerFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');
    
    event.preventDefault();
    swapAddActiveButton(event);
    removeChildren(formContainer);
    const trainerForm = createTrainerForm();

    formContainer.appendChild(trainerForm);
  };


  return {trainingFormHandler, trainerFormHandler, memberFormHandler};
};