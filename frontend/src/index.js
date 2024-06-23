import { createTrainingsTable } from "./modules/createTrainingsTable";
import { createTrainersCards } from "./modules/createTrainersCards";
import './style.css';

const removeChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const getActiveButton = () => document.querySelector('.btn-active');

const swapActiveButton = (event) => {
  const activeButton = getActiveButton();
  activeButton.classList.remove('btn-active');
  activeButton.classList.add('btn-inactive');
  
  const clickedButton = event.target;
  clickedButton.classList.remove('btn-inactive');
  clickedButton.classList.add('btn-active');
};

const listenerFactory = () => {
  const scheduleHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(document.querySelector('#content'));
    createTrainingsTable();
  };

  const trainersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(document.querySelector('#content'));
    createTrainersCards();
  };

  return {scheduleHandler, trainersHandler};
};


const navHandler = (function(){
  const {scheduleHandler, trainersHandler} = listenerFactory();

  const scheduleBtn = document.querySelector('#schedule');
  const trainersBtn = document.querySelector('#trainers');
  const addBtn = document.querySelector('#add');

  scheduleBtn.addEventListener('click', scheduleHandler);
  trainersBtn.addEventListener('click', trainersHandler);
})();