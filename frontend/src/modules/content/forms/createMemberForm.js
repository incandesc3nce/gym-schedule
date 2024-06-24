import { createObject } from "../../helpers/createObject";
import { postMember } from "../../requests/postMember";

export const createMemberForm = () => {
  const memberForm = document.createElement("form");
  memberForm.classList.add("submit-form");

  const surname = document.createElement("div");
  const surnameLabel = document.createElement("label");
  surnameLabel.textContent = "Фамилия*";
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("name", "surname");
  surnameInput.setAttribute("id", "surname");
  surnameInput.required = true;

  surname.appendChild(surnameLabel);
  surname.appendChild(surnameInput);

  const name = document.createElement("div");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Имя*";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute('id', 'name');
  nameInput.required = true;

  name.appendChild(nameLabel);
  name.appendChild(nameInput);

  const phone = document.createElement("div");
  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Телефон*";
  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "text");
  phoneInput.setAttribute("name", "phone");
  phoneInput.setAttribute('id', 'phone');
  phoneInput.required = true;

  phone.appendChild(phoneLabel);
  phone.appendChild(phoneInput);

  const email = document.createElement("div");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email*";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute('id', 'email');
  emailInput.required = true;

  email.appendChild(emailLabel);
  email.appendChild(emailInput);

  const submit = document.createElement("button");
  submit.textContent = "Добавить";
  submit.setAttribute("type", "submit");
  submit.setAttribute('id', 'submit');

  submit.addEventListener("click", async (event) => {
    event.preventDefault();
    const memberObject = createObject(memberForm);
    await postMember(memberObject);
    memberForm.reset();

    alert("Посетитель добавлен");
  });

  memberForm.appendChild(surname);
  memberForm.appendChild(name);
  memberForm.appendChild(phone);
  memberForm.appendChild(email);
  memberForm.appendChild(submit);

  return memberForm;
}