import createDomElem from '../common';

function createList(count, name) {
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const elem = createDomElem('li', ['dropdown-item', `dropdown-${name}`], [`${
      name[0].toUpperCase() + name.substring(1)
    }: ${i + 1}`]);
    elem.setAttribute(`data-${name}`, `${i}`);
    items.push(elem);
  }
  const dropdown = createDomElem('ul', ['dropdown-menu', `speak-it__${name}`], items);
  const style = 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);';
  dropdown.setAttribute('style', style);
  return dropdown;
}

export function createPages(page) {
  const btn = createDomElem('button', ['btn', 'btn-primary', 'dropdown-toggle'], [`Page: ${page + 1}`]);
  btn.setAttribute('data-lvl', 'page');
  return createDomElem('div', ['dropdown', 'speak-it__controls-pages'], [btn, createList(60, 'page')]);
}

export function createGroups(group) {
  const btn = createDomElem('button', ['btn', 'btn-primary', 'dropdown-toggle'], [`Level: ${group + 1}`]);
  btn.setAttribute('data-lvl', 'group');
  return createDomElem('div', ['dropdown', 'speak-it__controls-groups'], [btn, createList(6, 'level')]);
}

export function createAppControls() {
  return ['restart', 'speak', 'result'].map((str) => {
    const control = createDomElem('button', ['speak-it__controls-app__btn', 'btn', 'btn-primary'], [str.toUpperCase()]);
    control.setAttribute('data-action', str);
    return control;
  });
}
