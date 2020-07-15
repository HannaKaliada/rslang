import createElement from '../../../shared/createElement';

export default function createHeader() {
  const header = createElement('header', 'audio-call__header');
  const button = createElement('a', ['btn', 'btn-info'], ['role', 'button']);
  button.addEventListener('click', () => {
    window.location.hash = '#/hub';
  });
  button.textContent = 'Go to Main Menu';
  header.append(button);
  return header;
}
