import { listenerFactory, formFactory } from "./modules/helpers/listenerFactory";
import './style.css';


const navHandler = (function(){
  const {scheduleHandler, trainersHandler, membersHandler, addHandler, queriesHandler} = listenerFactory();
  const {trainingFormHandler,trainerFormHandler, memberFormHandler} = formFactory();

  const scheduleBtn = document.querySelector('#schedule');
  const trainersBtn = document.querySelector('#trainers');
  const membersBtn = document.querySelector('#members');
  const addBtn = document.querySelector('#add');
  const queriesBtn = document.querySelector('#queries');

  scheduleBtn.addEventListener('click', scheduleHandler);
  trainersBtn.addEventListener('click', trainersHandler);
  membersBtn.addEventListener('click', membersHandler);
  addBtn.addEventListener('click', (event) => {
    addHandler(event);
    
    const addTraining = document.querySelector('#add-training');
    const addTrainer = document.querySelector('#add-trainer');
    const addMember = document.querySelector('#add-member');

    addTraining.addEventListener('click', trainingFormHandler);
    addTrainer.addEventListener('click', trainerFormHandler);
    addMember.addEventListener('click', memberFormHandler);
  });
  queriesBtn.addEventListener('click', queriesHandler);

})();