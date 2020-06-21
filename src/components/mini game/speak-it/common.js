export default function createDomElem(
  tag, className, content, attribute,
) {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  if (content instanceof Array) elem.append(...content);
  if (attribute instanceof Array) {
    attribute.forEach((arr) => {
      const [name, val] = arr;
      elem.setAttribute(name, val);
    });
  }
  return elem;
}

export function createAudio(
  src, audioName, audioClass, sourceClass,
) {
  const [
    cardAudio,
    cardAudioSource,
  ] = [
    createDomElem('audio', [audioClass]),
    createDomElem('source', [sourceClass]),
  ];
  cardAudioSource.setAttribute('src', src);
  cardAudioSource.setAttribute('type', 'audio/mpeg');
  cardAudio.setAttribute('data-name', audioName);
  cardAudio.append(cardAudioSource, 'Your browser does not support the audio element.');
  return cardAudio;
}
