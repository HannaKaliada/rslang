export const loginUser = async user => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (rawResponse.ok) {
    console.log (await rawResponse.json());
  }
  throw new Error('Authorization error');
}

