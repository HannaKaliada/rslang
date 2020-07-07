import getDate from '../../shared/getDate';

function updateAmountOfDoneCards() {
  const today = getDate();
  let amountOfCards;
  let date;
  if (localStorage.getItem('doneCards')) {
    [date, amountOfCards] = localStorage.getItem('doneCards');
    if (today === date) {
      amountOfCards += 1;
      localStorage.setItem('doneCards', [date, amountOfCards]);
      return amountOfCards;
    }
  }
  amountOfCards = 1;
  localStorage.setItem('doneCards', [today, amountOfCards]);
  return amountOfCards;
}

function getAmountOfDoneCards() {
  const today = getDate();
  if (localStorage.getItem('doneCards')) {
    const [date, amountOfCards] = localStorage.getItem('doneCards');
    return today === date ? amountOfCards : 0;
  }
  return 0;
}
export { getAmountOfDoneCards, updateAmountOfDoneCards };
