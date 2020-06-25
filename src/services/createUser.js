const createUser = async user => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return content;
  }
  throw new Error('Creating account error');
};

export default createUser;
