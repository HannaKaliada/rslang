import createDomElem from '../common';

function createList(count, name) {
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const elem = createDomElem('li', ['dropdown-item', `dropdown-${name}`], [`${
      name[0].toUpperCase() + name.substring(1)
    }: ${i + 1}`], [[`data-${name}`, `${i}`]]);
    items.push(elem);
  }
  return createDomElem('ul', ['dropdown-menu', `speak-it__${name}`], items);
}

export function createGroups(group) {
  const btn = createDomElem(
    'button',
    ['btn', 'btn-primary', 'dropdown-toggle'],
    [`Level: ${group + 1}`],
    [['type', 'button'], ['data-toggle', 'dropdown'], ['aria-haspopup', 'true'], ['aria-expanded', 'false']],
  );
  const dropdown = createDomElem('div', [
    'dropdown',
    'speak-it__controls-groups'],
  [btn, createList(6, 'level')],
  [['data-toggle', 'tooltip'], ['data-placement', 'right'], ['title', 'Select game level']]);
  // eslint-disable-next-line no-undef
  $(dropdown).tooltip('show');
  return dropdown;
}

export function createAppControls() {
  return ['restart', 'speak', 'result'].map((str) => createDomElem(
    'button', ['speak-it__controls-app__btn', 'btn', 'btn-primary'],
    [str.toUpperCase()], [['data-action', str]],
  ));
}
