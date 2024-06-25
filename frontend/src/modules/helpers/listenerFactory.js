import { createTrainingsTable } from "../content/createTrainingsTable";
import { createTrainersCards } from "../content/createTrainersCards";
import { createMembersTable } from "../content/createMembersTable";

import { createNav } from "../content/forms/createNav";
import { createTrainingForm } from "../content/forms/createTrainingForm";
import { createMemberForm } from "../content/forms/createMemberForm";
import { createTrainerForm } from "../content/forms/createTrainerForm";

import { createQueryNav } from "../content/queries/createQueryNav";
import { membersTrainingsTable } from "../content/queries/membersTrainingsTable";

const removeChildren = (parent) => {
  if (!parent) return;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const getActiveButton = (activeClass) => document.querySelector(activeClass);

const swapActiveButton = (event, activeClass, inactiveClass) => {
  const activeButton = getActiveButton(activeClass);

  if (activeButton) {
    activeButton.classList.remove(activeClass);
    activeButton.classList.add(inactiveClass);
    
    const clickedButton = event.target;
    clickedButton.classList.remove(inactiveClass);
    clickedButton.classList.add(activeClass);
  } else {
    event.target.classList.add(activeClass);
    event.target.classList.remove(inactiveClass);
  }
};

export const listenerFactory = () => {
  const content = document.querySelector('#content');
  
  const scheduleHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event, '.btn-active', '.btn-inactive');
    removeChildren(content);
    createTrainingsTable();
  };

  const trainersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event, '.btn-active', '.btn-inactive');
    removeChildren(content);
    createTrainersCards();
  };

  const membersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event, '.btn-active', '.btn-inactive');
    removeChildren(content);
    createMembersTable();
  };

  const addHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event, '.btn-active', '.btn-inactive');
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
    swapActiveButton(event, '.btn-query-active', '.btn-query-inactive');
    removeChildren(content);
    
    const queriesContainer = document.createElement('div');
    queriesContainer.classList.add('query-container');
    content.appendChild(queriesContainer);
    createQueryNav();

    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');
    queriesContainer.appendChild(resultsContainer);
  };

  return {scheduleHandler, trainersHandler, membersHandler, addHandler, queriesHandler};
};

export const formFactory = () => {
  const trainingFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');

    event.preventDefault();
    swapActiveButton(event, '.btn-add-active', '.btn-add-inactive');
    removeChildren(formContainer);
    const trainingForm = createTrainingForm();
    
    formContainer.appendChild(trainingForm);
  };
  
  const memberFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');
    
    event.preventDefault();
    swapActiveButton(event, '.btn-add-active', '.btn-add-inactive');
    removeChildren(formContainer);
    const memberForm = createMemberForm();
    
    formContainer.appendChild(memberForm);
  };
  
  const trainerFormHandler = (event) => {
    const formContainer = document.querySelector('#form-container');
    
    event.preventDefault();
    swapActiveButton(event, '.btn-add-active', '.btn-add-inactive');
    removeChildren(formContainer);
    const trainerForm = createTrainerForm();

    formContainer.appendChild(trainerForm);
  };


  return {trainingFormHandler, trainerFormHandler, memberFormHandler};
};

export const queryFactory = () => {
  const membersTrainingsHandler = (event) => {
    const resultsContainer = document.querySelector('.results-container');
    
    event.preventDefault();
    swapActiveButton(event, 'btn-active', 'btn-inactive');
    removeChildren(resultsContainer);
    
    membersTrainingsTable();
  };


  return {membersTrainingsHandler};
}