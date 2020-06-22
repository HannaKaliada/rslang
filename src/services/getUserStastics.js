const getUserStatistic = async ({ userId, token }) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  else {
    throw new Error('Error to get user statistics');
  }
};
