import { createTrainingObject } from "../../helpers/createTrainingObject";
import { getTrainers } from "../../requests/getTrainers";
import { getMembers } from "../../requests/getMembers";
import { postTraining } from "../../requests/postTraining";

export const createTrainingForm = () => {
  const trainingForm = document.createElement("form");
  trainingForm.classList.add("submit-form");

  const date = document.createElement("div");
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Дата*";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("id", "date");
  dateInput.required = true;

  date.appendChild(dateLabel);
  date.appendChild(dateInput);

  const startTime = document.createElement("div");
  const startTimeLabel = document.createElement("label");
  startTimeLabel.textContent = "Начало*";
  const startTimeInput = document.createElement("input");
  startTimeInput.setAttribute("type", "time");
  startTimeInput.setAttribute("name", "start_time");
  startTimeInput.setAttribute("id", "start_time");
  startTimeInput.required = true;

  startTime.appendChild(startTimeLabel);
  startTime.appendChild(startTimeInput);

  const endTime = document.createElement("div");
  const endTimeLabel = document.createElement("label");
  endTimeLabel.textContent = "Конец*";
  const endTimeInput = document.createElement("input");
  endTimeInput.setAttribute("type", "time");
  endTimeInput.setAttribute("name", "end_time");
  endTimeInput.setAttribute("id", "end_time");
  endTimeInput.required = true;

  endTime.appendChild(endTimeLabel);
  endTime.appendChild(endTimeInput);

  const trainer = document.createElement("div");
  const trainerLabel = document.createElement("label");
  trainerLabel.textContent = "Тренер*";
  const trainerSelect = document.createElement("select");
  trainerSelect.setAttribute("name", "trainer");
  trainerSelect.setAttribute("id", "trainer");
  trainerSelect.required = true;

  getTrainers().then((trainers) => {
    trainers.forEach((trainer) => {
      const option = document.createElement("option");
      option.value = trainer._id;
      option.textContent = `${trainer.surname} ${trainer.name} ${trainer.middle_name === undefined ? "" : trainer.middle_name} - ${trainer.specialty}`;
      trainerSelect.appendChild(option);
    });
  });

  trainer.appendChild(trainerLabel);
  trainer.appendChild(trainerSelect);

  const members = document.createElement("div");
  const membersLabel = document.createElement("label");
  membersLabel.textContent = "Посетители*";
  const membersSelect = document.createElement("select");
  membersSelect.setAttribute("name", "members");
  membersSelect.setAttribute("id", "members");
  membersSelect.multiple = true;
  membersSelect.required = true;

  getMembers().then((members) => {
    members.forEach((member) => {
      const option = document.createElement("option");
      option.value = member._id;
      option.textContent = `${member.surname} ${member.name}`;
      membersSelect.appendChild(option);
    });
  });

  members.appendChild(membersLabel);
  members.appendChild(membersSelect);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.textContent = "Добавить";

  submit.addEventListener("click", async (event) => {
    event.preventDefault();
    const trainingObject = createTrainingObject(trainingForm);
    console.log(trainingObject);
    await postTraining(trainingObject);
    trainingForm.reset();

    alert("Тренировка добавлена");
  });


  trainingForm.appendChild(date);
  trainingForm.appendChild(startTime);
  trainingForm.appendChild(endTime);
  trainingForm.appendChild(trainer);
  trainingForm.appendChild(members);
  trainingForm.appendChild(submit);

  return trainingForm;
};