import properties from '../properties';

export default function updateDifficulty(word) {
  const indexes = ['weak', 'good', 'hard', 'very hard'];
  const { difficulty } = word.difficulty;
  const newWord = word;
  indexes.forEach((el, i) => {
    if (el === difficulty) {
      newWord.difficulty = indexes[i + 1];
    }
  });
  return newWord;
}
