const loginUser = async (user) => {
  const rawResponse = await fetch('http://pacific-castle-12388.herokuapp.com/signin', {
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
  throw new Error('Authorization error');
};

export default loginUser;
