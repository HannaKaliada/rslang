export const createUser = async user => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw new Error('Creating account error');
};
