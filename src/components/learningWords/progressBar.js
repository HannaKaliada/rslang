import createElement from '../../shared/createElement';
import get

function getAmountOfDoneCards() {

  const amountOfCards =
}

function createBar() {
  const attrs = [['role', 'progressbar'], [] ['aria-valuemin', '0'], ['aria-valuemax', '100']];
  const bar = createElement('div', ['progress-bar', 'bg-success'], attrs);
  return bar;
}

function createProgressBar() {
  const wrapper = createElement('div', 'progress-bar-wrapper');
  const doneCards = createElement('p', 'cards-amount-done');
  doneCards.textContent = getAmountOfDoneCards();
  const cardsToDo = createElement('p', 'cards-amount-all');
  cardsToDo.textContent = localStorage.getItem('cardsLimit') || 80;
  const barWrapper = createElement('div', 'progress');
  barWrapper.append(createBar());
  wrapper.append(doneCards, barWrapper, cardsToDo);
  return wrapper;
}

export default createProgressBar;
