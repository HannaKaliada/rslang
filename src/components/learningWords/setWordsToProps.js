import getWords from '../../shared/getWords';
import properties from './properties';

export default async function setWordsToProps() {
  const words = await getWords(localStorage.currentPage, localStorage.currentGroup);
  [properties.missingWord] = words[localStorage.currentWord].textExample.match(/(?<=\>).*(?=\<)/);
  properties.words = words;
}
