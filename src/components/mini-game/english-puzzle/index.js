import createStartPage from './start-page/index';

function ready() {
  const startPage = createStartPage();
  const root = document.querySelector('.root');
  root.textContent = '';
  root.append(startPage);
}

export default ready;
