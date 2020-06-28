function formatData(data) {
  return data.map((elem) => {
    const newElem = elem;
    const {
      image, audio, textExample, audioExample,
    } = newElem;
    newElem.textExample = textExample.replace(/<\/?b>/g, '');
    newElem.audioExample = `https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/${audioExample}`;
    newElem.image = `https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/${image}`;
    newElem.audio = `https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/${audio}`;
    return elem;
  });
}

async function getWords(page, group) {
  try {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}&wordsPerExampleSentenceLTE=10&wordsPerPage=10`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return formatData(data);
    }
    throw new Error(`${res.status}`);
  } catch (e) {
    return e.toString();
  }
}

export default getWords;
