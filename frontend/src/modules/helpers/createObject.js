export const createObject = (form) => {
  const formData = new FormData(form);
  const object = {};
  for (let [key, value] of formData) {
    object[key] = value;
  }
  return object;
};