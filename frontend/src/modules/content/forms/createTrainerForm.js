import { createObject } from "../../helpers/createObject";
import { postTrainer } from "../../requests/postTrainer";

export const createTrainerForm = () => {
  const trainerForm = document.createElement('form');
  trainerForm.classList.add('submit-form');

  const surname = document.createElement('div');
  const surnameLabel = document.createElement('label');
  surnameLabel.textContent = 'Фамилия*';
  const surnameInput = document.createElement('input');
  surnameInput.setAttribute('type', 'text');
  surnameInput.setAttribute('name', 'surname');
  surnameInput.setAttribute('id', 'surname');
  surnameInput.required = true;

  surname.appendChild(surnameLabel);
  surname.appendChild(surnameInput);
  
  const name = document.createElement('div');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Имя*';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  nameInput.required = true;

  name.appendChild(nameLabel);
  name.appendChild(nameInput);

  const middleName = document.createElement('div');

  const middleNameLabel = document.createElement('label');
  middleNameLabel.textContent = 'Отчество';

  const middleNameInput = document.createElement('input');
  middleNameInput.setAttribute('type', 'text');
  middleNameInput.setAttribute('name', 'middle-name');
  middleNameInput.setAttribute('id', 'middle-name');

  middleName.appendChild(middleNameLabel);
  middleName.appendChild(middleNameInput);

  const phone = document.createElement('div');

  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Телефон*';

  const phoneInput = document.createElement('input');
  phoneInput.setAttribute('type', 'text');
  phoneInput.setAttribute('name', 'phone');
  phoneInput.setAttribute('id', 'phone');
  phoneInput.required = true;

  phone.appendChild(phoneLabel);
  phone.appendChild(phoneInput);

  const email = document.createElement('div');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email*';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.required = true;

  email.appendChild(emailLabel);
  email.appendChild(emailInput);

  const specialty = document.createElement('div');

  const specialtyLabel = document.createElement('label');
  specialtyLabel.textContent = 'Специальность*';

  const specialtyInput = document.createElement('input');
  specialtyInput.setAttribute('type', 'text');
  specialtyInput.setAttribute('name', 'specialty');
  specialtyInput.setAttribute('id', 'specialty');
  specialtyInput.setAttribute('placeholder', 'Общая');
  specialtyInput.required = true;

  specialty.appendChild(specialtyLabel);
  specialty.appendChild(specialtyInput);

  const description = document.createElement('div');

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Описание';

  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('id', 'description');

  description.appendChild(descriptionLabel);
  description.appendChild(descriptionInput);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Добавить';
  submit.setAttribute('id', 'submit');

  submit.addEventListener('click', async (event) => {
    event.preventDefault();
    const trainerObject = createObject(trainerForm);
    await postTrainer(trainerObject);
    trainerForm.reset();

    alert('Тренер добавлен');
  });

  trainerForm.appendChild(surname);
  trainerForm.appendChild(name);
  trainerForm.appendChild(middleName);
  trainerForm.appendChild(email);
  trainerForm.appendChild(phone);
  trainerForm.appendChild(specialty);
  trainerForm.appendChild(description);
  trainerForm.appendChild(submit);

  return trainerForm;
}