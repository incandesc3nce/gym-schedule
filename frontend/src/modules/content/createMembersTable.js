import { getMembers } from "../requests/getMembers";
import { formatDate } from "../helpers/formatDate";

export const createMembersTable = async () => {
  const members = await getMembers();

  const content = document.querySelector("#content");

  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");

  const tableHeaderSurname = document.createElement("th");
  tableHeaderSurname.textContent = "Фамилия";

  const tableHeaderName = document.createElement("th");
  tableHeaderName.textContent = "Имя";

  const tableHeaderPhone = document.createElement("th");
  tableHeaderPhone.textContent = "Телефон";

  const tableHeaderEmail = document.createElement("th");
  tableHeaderEmail.textContent = "Email";

  const tableHeaderSince = document.createElement("th");
  tableHeaderSince.textContent = "Дата регистрации";

  tableHeader.appendChild(tableHeaderSurname);
  tableHeader.appendChild(tableHeaderName);
  tableHeader.appendChild(tableHeaderPhone);
  tableHeader.appendChild(tableHeaderEmail);
  tableHeader.appendChild(tableHeaderSince);

  table.appendChild(tableHeader);

  members.forEach((member) => {
    const tableRow = document.createElement("tr");

    const tableRowSurname = document.createElement("td");
    tableRowSurname.textContent = member.surname;

    const tableRowName = document.createElement("td");
    tableRowName.textContent = member.name;

    const tableRowPhone = document.createElement("td");
    tableRowPhone.textContent = member.phone;

    const tableRowEmail = document.createElement("td");
    tableRowEmail.textContent = member.email;

    const tableRowSince = document.createElement("td");
    const date = new Date(member.member_since);
    const formattedDate = formatDate(date);

    tableRowSince.textContent = formattedDate;

    tableRow.appendChild(tableRowSurname);
    tableRow.appendChild(tableRowName);
    tableRow.appendChild(tableRowPhone);
    tableRow.appendChild(tableRowEmail);
    tableRow.appendChild(tableRowSince);

    table.appendChild(tableRow);
  });

  content.appendChild(table);
};
