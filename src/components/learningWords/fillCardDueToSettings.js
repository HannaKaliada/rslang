import properties from './properties';

export default function fillCardDueToSettings() {
  const meaning = document.querySelector('.meaning');
  const sentence = document.querySelector('.sentence');

  if (properties.wordTranslation === 'true') {
    properties.missingWord = properties.words[properties.currentWord].word;

    document.querySelector('.translation-input').insertAdjacentHTML('beforeend',
      `<input type="text" class="form-control word-input" maxlength="30">
    <span span class= "input-top-layer hidden" ></span >`);

    document.querySelector('.word__card .translation').textContent = properties.words[properties.currentWord].wordTranslate;

    if (properties.wordExample === 'true') {
      sentence.insertAdjacentHTML('beforeend', `${properties.words[properties.currentWord].textExample.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
    if (properties.wordMeaning === 'true') {
      meaning.insertAdjacentHTML('beforeend', `${properties.words[properties.currentWord].textMeaning.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
  } else if (properties.wordExample === 'true' && properties.wordTranslation === 'false') {
    [properties.missingWord] = properties.words[properties.currentWord].textExample.match(/(?<=\>).*(?=\<)/);

    sentence.insertAdjacentHTML('beforeend', `${properties.words[properties.currentWord].textExample.replace(/\<.*\>/,
      `<input type="text" class="form-control word-input" maxlength="30">
    <span class="input-top-layer hidden"></span>`)}`);

    if (properties.wordMeaning === 'true') {
      meaning.insertAdjacentHTML('beforeend', `${properties.words[properties.currentWord].textMeaning.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
  } else {
    [properties.missingWord] = properties.words[properties.currentWord].textMeaning.match(/(?<=\>).*(?=\<)/);

    meaning.insertAdjacentHTML('beforeend', `${properties.words[properties.currentWord].textMeaning.replace(/\<.*\>/,
      `<input type="text" class="form-control word-input" maxlength="30">
    <span class="input-top-layer hidden"></span>`)}`);
  }

  if (properties.wordTranscription === 'true') {
    document.querySelector('.transcription').textContent = properties.words[properties.currentWord].transcription;
  }
  if (properties.wordImage === 'true') {
    document.querySelector('.word__card .image').src = properties.words[properties.currentWord].image;
  }
}
