import loginUser from '../../services/loginUser';

export default function signInUser(credentials) {
  return loginUser(credentials)
    .then((result) => {
      const userInfo = {
        token: result.token,
        userId: result.userId,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('authorized', 'true');
      return true;
    });
}
