export const createUserWord = async ({ userId, wordId, word, token}) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw new Error('Error creating word for user');
};
