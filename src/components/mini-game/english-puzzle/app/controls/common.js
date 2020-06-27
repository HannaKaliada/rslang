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
  const dropdown = createDomElem('ul', ['dropdown-menu'], items);
  const style = 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);';
  dropdown.setAttribute('style', style);
  return dropdown;
}

function createPages(page) {
  const btn = createDomElem('button', ['btn', 'btn-primary', 'dropdown-toggle'], [`Page: ${page + 1}`]);
  btn.setAttribute('data-type', 'page');
  return createDomElem('div', ['dropdown', 'puzzle__controls-data__dropdown'], [btn, createList(60, 'page')]);
}

function createGroups(group) {
  const btn = createDomElem('ul', ['btn', 'btn-primary', 'dropdown-toggle'], [`Level: ${group + 1}`]);
  btn.setAttribute('data-type', 'group');
  return createDomElem('div', ['dropdown', 'puzzle__controls-data__dropdown'], [btn, createList(6, 'level')]);
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
