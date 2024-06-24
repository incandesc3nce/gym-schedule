import { createTrainingsTable } from "./modules/createTrainingsTable";
import { createTrainersCards } from "./modules/createTrainersCards";
import { createMembersTable } from "./modules/createMembersTable";
import { listenerFactory } from "./modules/helpers/listenerFactory";
import './style.css';


const navHandler = (function(){
  const {scheduleHandler, trainersHandler, membersHandler} = listenerFactory();

  const scheduleBtn = document.querySelector('#schedule');
  const trainersBtn = document.querySelector('#trainers');
  const membersBtn = document.querySelector('#members');
  const addBtn = document.querySelector('#add');

  scheduleBtn.addEventListener('click', scheduleHandler);
  trainersBtn.addEventListener('click', trainersHandler);
  membersBtn.addEventListener('click', membersHandler);
})();