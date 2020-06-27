import createStartPage from './start-page/index';

function ready() {
  const startPage = createStartPage();
  const { body } = document;
  body.textContent = '';
  body.append(startPage);
}

export default ready;
