export const postTrainer = async (object) => {
  return await fetch('http://localhost:3000/trainers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  })
}