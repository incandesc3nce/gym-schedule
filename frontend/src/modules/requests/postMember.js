export const postMember = async (object) => {
  return await fetch('http://localhost:3000/members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  })
};