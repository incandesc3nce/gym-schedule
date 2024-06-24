import { listenerFactory, formFactory } from "./modules/helpers/listenerFactory";
import './style.css';


const navHandler = (function(){
  const {scheduleHandler, trainersHandler, membersHandler, addHandler} = listenerFactory();

  const scheduleBtn = document.querySelector('#schedule');
  const trainersBtn = document.querySelector('#trainers');
  const membersBtn = document.querySelector('#members');
  const addBtn = document.querySelector('#add');

  scheduleBtn.addEventListener('click', scheduleHandler);
  trainersBtn.addEventListener('click', trainersHandler);
  membersBtn.addEventListener('click', membersHandler);
  addBtn.addEventListener('click', addHandler);
})();