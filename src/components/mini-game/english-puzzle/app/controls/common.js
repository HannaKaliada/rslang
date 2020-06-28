import createDomElem from '../../common';

function createList(count, name) {
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const elem = createDomElem('li', ['dropdown-item'], [`${
      name[0].toUpperCase() + name.substring(1)
    }: ${i + 1}`]);
    elem.setAttribute(`data-${name}`, `${i}`);
    items.push(elem);
  }
  return createDomElem('ul', ['dropdown-menu'], items);
}

function createDropdown(curNum, name, listNum) {
  const btn = createDomElem(
    'button',
    ['btn', 'btn-primary', 'dropdown-toggle'],
    [`${name[0].toUpperCase() + name.substring(1)}: ${curNum + 1}`],
    [['type', 'button'], ['data-toggle', 'dropdown'], ['aria-haspopup', 'true'], ['aria-expanded', 'false']],
  );
  const tooltipText = `Select game ${name}`;
  const dropdown = createDomElem('div', [
    'dropdown',
    `puzzle__controls-${name}s`],
  [btn, createList(listNum, name)],
  [['data-toggle', 'tooltip'], ['data-placement', 'right'], ['title', tooltipText]]);
  // eslint-disable-next-line no-undef
  $(dropdown).tooltip('show');
  return dropdown;
}

function createPages(curPage) {
  const name = 'page';
  const listNum = 30;
  return createDropdown(curPage, name, listNum);
}

export function createGroups(curGroup) {
  const name = 'level';
  const listNum = 6;
  return createDropdown(curGroup, name, listNum);
}

export function createDataControls(data) {
  const { group, page } = data;
  return createDomElem('div', ['puzzle__controls-data'], [createGroups(group), createPages(page)]);
}

function createBtn(type) {
  const btn = createDomElem('button', ['puzzle__controls-options__btn', type, 'btn', 'btn-primary']);
  btn.setAttribute('data-type', type);
  return btn;
}

export function createOptionsControls() {
  const tips = ['sound', 'translate', 'melody', 'image'];
  const tipBtns = tips.map((str) => createBtn(str));
  return createDomElem('div', ['puzzle__controls-options'], tipBtns);
}
