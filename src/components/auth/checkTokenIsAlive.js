import checkToken from '../../services/checkToken';

export default function checkTokenIsAlive() {
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = userInfo;
    const id = userInfo.userId;
    checkToken(id, token)
      .then(() => {
        window.location.hash = '#/hub';
      })
      .catch((error) => {
        localStorage.clear();
      });
  }
}
