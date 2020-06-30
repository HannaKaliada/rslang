import checkToken from '../../services/checkToken';

export default async function checkTokenIsAlive() {
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = userInfo;
    const id = userInfo.userId;
    try {
      await checkToken(id, token);
      window.location.hash = '#/hub';
    } catch (error) {
      localStorage.clear();
    }
  }
}
