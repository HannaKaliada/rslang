import createElement from '../../shared/createElement';
import createProgressBar from './createProgressBar';

export default function renderWordBlock(wordInfo) {
  const wordBlock = createElement('div', 'vocabulary__word');
  const dataUrl = 'https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/';
  wordBlock.append(createProgressBar(wordInfo.intervals));
  wordBlock.insertAdjacentHTML('beforeend', `
  <div class="word__block">
    <div class="word__name">
      <p>${wordInfo.word}</p>
    </div>
    <button type="button" class="btn btn-primary word__delete-btn">Delete word</button>
  </div>
  <div class="word__image">
    <img src="${dataUrl}${wordInfo.image}" alt="${wordInfo.word}">
  </div>
  <div class="word__descript">
    <p class="descript__transcript">${wordInfo.transcription}</p>
    <p class="descript__translate">${wordInfo.wordTranslate}</p>
    <div class="descript__audio">
      <audio src="${dataUrl}${wordInfo.audio}"></audio>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note audio-icon" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
        <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
      </svg>
    </div>
  </div>
  <div class="word__usage">
    <p class="usage__meaning">Meaning: ${wordInfo.textMeaning}</p>
    <p class="usage__example">Example: ${wordInfo.textExample}</p>
  </div>
  `);
  return wordBlock;
}
