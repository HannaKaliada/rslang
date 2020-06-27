const getUserSettings = async ({ userId, token }) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    },
  });
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return content;
  }
  throw new Error('Error to get user settings');
};

export default getUserSettings;
