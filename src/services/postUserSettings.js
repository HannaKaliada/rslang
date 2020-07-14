const postUserSettings = async (settings) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log(settings);
  await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userInfo.userId}/settings`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
    body: JSON.stringify(settings),
  });
};
export default postUserSettings;
