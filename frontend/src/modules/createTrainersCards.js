import { getTrainers } from './requests/getTrainers';

export const createTrainersCards = async () => {
  const trainers = await getTrainers();

  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('card-container');
  content.appendChild(container);

  trainers.forEach((trainer) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const mainInfo = document.createElement('div');
    

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = `${trainer.name} ${trainer.surname}`;

    const specialty = document.createElement('p');
    specialty.classList.add('specialty');
    specialty.textContent = trainer.specialty;

    mainInfo.appendChild(name);
    mainInfo.appendChild(specialty);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = trainer.description;

    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const phone = document.createElement('p');
    phone.classList.add('phone');
    const label = document.createElement('span');
    label.classList.add('label');
    label.textContent = 'Телефон: ';
    phone.appendChild(label);
    const phoneNumber = document.createElement('span');
    phoneNumber.textContent = `${trainer.phone}`;
    phone.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.classList.add('email');
    const emailLabel = document.createElement('span');
    emailLabel.classList.add('label');
    emailLabel.textContent = 'Почта: ';
    email.appendChild(emailLabel);
    const emailValue = document.createElement('span');
    emailValue.textContent = `${trainer.email}`;
    email.appendChild(emailValue);

    contacts.appendChild(phone);
    contacts.appendChild(email);

    card.appendChild(mainInfo);
    card.appendChild(description);
    card.appendChild(contacts);

    container.appendChild(card);
  });
}