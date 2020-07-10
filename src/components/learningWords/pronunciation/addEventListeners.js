import properties from '../properties';

export default function addEventListeners() {
  const soundIcon = document.querySelector('.sound-block__sound-icon');
  soundIcon.addEventListener('click', () => {
    document.querySelector('.sound-on').classList.toggle('hidden');
    document.querySelector('.sound-off').classList.toggle('hidden');
    properties.sound = properties.sound === true;
  });
}
