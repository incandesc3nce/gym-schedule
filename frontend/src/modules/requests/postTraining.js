export const postTraining = async (object) => {
  return await fetch('http://localhost:3000/trainings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  })
}