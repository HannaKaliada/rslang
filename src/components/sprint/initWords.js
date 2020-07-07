import getJsonWords from '../../services/getWords';

const  initCollection = () => {
  return getJsonWords(localStorage.getItem('round_sprint'), localStorage.getItem('level_sprint'))
    .then(data => {
      const collection = data.map(item => { return {eng: item.word, rus: item.wordTranslate}} );
      return collection;
   });
}

export default initCollection;
