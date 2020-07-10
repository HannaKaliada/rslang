import properties from './properties';

export default function fillCardDueToSettings() {
  const meaning = document.querySelector('.meaning');
  const sentence = document.querySelector('.sentence');
  const settings = properties.settings.optional;

  if (settings.wordTranslation === 'true') {
    properties.missingWord = properties.words[settings.currentWord].word;

    document.querySelector('.translation-input').insertAdjacentHTML('beforeend',
      `<input type="text" class="form-control word-input" maxlength="30">
    <span span class= "input-top-layer hidden" ></span >`);

    document.querySelector('.word__card .translation').textContent = properties.words[settings.currentWord].wordTranslate;

    if (settings.wordExample === 'true') {
      sentence.insertAdjacentHTML('beforeend', `${properties.words[settings.currentWord].textExample.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
    if (settings.wordMeaning === 'true') {
      meaning.insertAdjacentHTML('beforeend', `${properties.words[settings.currentWord].textMeaning.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
  } else if (settings.wordExample === 'true' && settings.wordTranslation === 'false') {
    [properties.missingWord] = properties.words[settings.currentWord].textExample.match(/(?<=\>).*(?=\<)/);

    sentence.insertAdjacentHTML('beforeend', `${properties.words[settings.currentWord].textExample.replace(/\<.*\>/,
      `<input type="text" class="form-control word-input" maxlength="30">
    <span class="input-top-layer hidden"></span>`)}`);

    if (settings.wordMeaning === 'true') {
      meaning.insertAdjacentHTML('beforeend', `${properties.words[settings.currentWord].textMeaning.replace(/\<.*\>/,
        '<span class="hidden-word">[...]</span>')}`);
    }
  } else {
    [properties.missingWord] = properties.words[settings.currentWord].textMeaning.match(/(?<=\>).*(?=\<)/);

    meaning.insertAdjacentHTML('beforeend', `${properties.words[settings.currentWord].textMeaning.replace(/\<.*\>/,
      `<input type="text" class="form-control word-input" maxlength="30">
    <span class="input-top-layer hidden"></span>`)}`);
  }

  if (settings.wordTranscription === 'true') {
    document.querySelector('.transcription').textContent = properties.words[settings.currentWord].transcription;
  }
  // if (settings.wordImage === 'true') {
  //   document.querySelector('word__card .image').src = '';
  // }
}
