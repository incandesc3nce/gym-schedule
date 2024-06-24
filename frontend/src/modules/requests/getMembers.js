export const getMembers = async () => {
  const response = await fetch('http://localhost:3000/members');
  const members = await response.json();
  return members;
}