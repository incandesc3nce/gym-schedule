export const createTrainingObject = (form) => {
  const formData = new FormData(form);
  const object = {};

  for (const pair of formData.entries()) {
    if (pair[0] === 'members') {
      object[pair[0]] = [];
      const selectedOptions = form.querySelectorAll('#members option:checked');
      selectedOptions.forEach((option) => {
        object[pair[0]].push({
          member: option.value,
        });
      });
    } else {
      object[pair[0]] = pair[1];
    }
  }

  return object;
}