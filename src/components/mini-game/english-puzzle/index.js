import createStartPage from './start-page/index';
import getImg from './data';

function ready() {
  getImg();
  // const startPage = createStartPage();
  // const { body } = document;
  // body.textContent = '';
  // body.append(startPage);
  createStartPage();
}

export default ready;
