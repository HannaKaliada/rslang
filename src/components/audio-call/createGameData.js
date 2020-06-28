import getWords from '../../shared/getWords';
import randomize from '../../shared/randomize';
import getWordDistance from './getWordDistance';

const gameData = [];

async function getPartOfSpeech(word) {
  const url = 'https://dictionary.skyeng.ru/api/public/v1/words/search?search=';
  const partOfSpeech = fetch(`${url}${word.word}`)
    .then((response) => response.json())
    .then((arr) => arr.filter((el) => el.meanings[0].partOfSpeechCode !== 'abb'))
    .then((res) => res[0].partOfSpeechCode);
  return partOfSpeech;
}

async function getRandomVariants(word) {
  let words = gameData.flat(1).slice(10);
  const partOfSpeech = await getPartOfSpeech(word);
  words = words.map((el) => {
    const newElem = el;
    newElem.distance = getWordDistance(word.wordTranslate, el.wordTranslate);
    return newElem;
  });
  words.sort((a, b) => b.distance - a.distance);
  async function addVariant(el) {
    const POS = await getPartOfSpeech(el);
    if (POS !== partOfSpeech) {
      const result = await addVariant(words.pop());
      return result;
    }
    return el;
  }
  const variants = Promise.all(words.splice(-3).map((el) => addVariant(el)));
  return variants;
}

async function createGameData() {
  const arr = [];
  for (let i = 0; i <= 59; i += 1) {
    arr.push(i);
  }
  const promises = arr.map(async (el) => {
    await getWords(el, 0)
      .then((res) => gameData.push(res));
  });
  await Promise.all(promises);
  const wordsInGame = randomize(gameData[0]);
  const promisesVariants = wordsInGame.map(async (el) => {
    const newEl = el;
    newEl.variants = await getRandomVariants(el);
    return newEl;
  });
  const result = Promise.all(promisesVariants);
  return result;
}

export default createGameData;
