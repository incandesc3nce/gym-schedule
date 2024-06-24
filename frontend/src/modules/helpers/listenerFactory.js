const removeChildren = (parent) => {
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

  const membersHandler = (event) => {
    event.preventDefault();
    swapActiveButton(event);
    removeChildren(document.querySelector('#content'));
    createMembersTable();
  };

  return {scheduleHandler, trainersHandler, membersHandler};
};