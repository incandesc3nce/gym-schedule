import { createTrainingsTable } from "./modules/createTrainingsTable";
import { createTrainersCards } from "./modules/createTrainersCards";
import './style.css';

const removeChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const listenerFactory = () => {
  const scheduleHandler = (event) => {
    event.preventDefault();
    removeChildren(document.querySelector('#content'));
    createTrainingsTable();
  };

  const trainersHandler = (event) => {
    event.preventDefault();
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