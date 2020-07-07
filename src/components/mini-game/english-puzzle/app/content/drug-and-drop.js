// eslint-disable-next-line import/no-cycle
import Field from './field';
import WordsPuzzle from './words-puzzle';
// eslint-disable-next-line import/no-cycle
import Content from './index';

export function handleDragStart(e) {
  e.target.classList.add('selected');
}

function swapContent(currentElement, activeElement, parent) {
  const nextElement = (currentElement === activeElement.nextElementSibling)
    ? currentElement.nextElementSibling
    : currentElement;
  parent.insertBefore(activeElement, nextElement);
}

export function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  const curPos = Content.create().getCurWords();
  const curField = Field.create().getFields()[curPos];
  const puzzle = WordsPuzzle.create().container;
  const activeElement = document.querySelector('.selected');
  const currentElement = e.target;
  if (activeElement === currentElement) return;
  if (activeElement.dataset.action === currentElement.dataset.action
    && activeElement.parentNode === puzzle) {
    swapContent(currentElement, activeElement, puzzle);
    return;
  }
  if (activeElement.dataset.action === currentElement.dataset.action
    && activeElement.parentNode === curField) {
    swapContent(currentElement, activeElement, curField);
    return;
  }
  if (activeElement.dataset.action !== currentElement.dataset.action
    && activeElement.dataset.action && currentElement.dataset.action) {
    return;
  }
  if (activeElement.parentNode === curField || activeElement.parentNode === puzzle) {
    console.log(e.target);
    return;
  }
  e.dataTransfer.dropEffect = 'none';
}

export function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  // const activeElement = document.querySelector('.selected');
  // const currentElement = e.target;
  // if (activeElement.dataset.action !== currentElement.dataset.action
  //   && activeElement.dataset.action && currentElement.dataset.action) {
  //   const value = activeElement.textContent;
  //   activeElement.textContent = currentElement.textContent;
  //   currentElement.textContent = value;
  // }
}

export function handleDragEnd(e) {
  e.target.classList.remove('selected');
}
