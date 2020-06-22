export const getWordById = async (id) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words/${id}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
  if (rawResponse.ok) {
    return (await rawResponse.json());
  }
  throw new Error('Error to get word by id');
}


