import createDomElem from './common';

function loader() {
  const content = ` <div class="ldio-dcnxrt1cujs">
  <div></div>
  <div></div>
  <div><div></div></div>
  <div><div></div></div>
  </div>`;
  const loaderElem = createDomElem('div', ['loadingio-spinner-double-ring-fpglzxn5wk8']);
  loaderElem.innerHTML = content;
  return loaderElem;
}

export default loader;
