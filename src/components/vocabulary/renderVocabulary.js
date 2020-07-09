import createElement from '../../shared/createElement';

export default function renderVocabulary() {
  const vocabulary = createElement('div', 'vocabulary__wrapper');
  vocabulary.insertAdjacentHTML('beforeend', `
  <div class="vocabulary__buttons">
    <button type="button" class="btn btn-primary vocabulary__btn" data-type="learningWords">Learning words</button>
    <button type="button" class="btn btn-primary vocabulary__btn" data-type="difficultWords">Difficult words</button>
    <button type="button" class="btn btn-primary vocabulary__btn" data-type="deletedWords">Deleted words</button>
  </div>
    <div class="vocabulary__tab">
  </div>
  `);
  return vocabulary;
}
