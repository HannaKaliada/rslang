const updateUserWord = async ({
  userId, wordId, word, token,
}) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return content;
  }
  throw new Error('Error updating word for user');
};

export default updateUserWord;
