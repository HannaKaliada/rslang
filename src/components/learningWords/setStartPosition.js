export default function setStartPosition() {
  if (!localStorage.getItem('currentPage')) {
    localStorage.setItem('currentPage', 0);
    localStorage.setItem('currentGroup', 0);
    localStorage.setItem('currentWord', 0);
    localStorage.setItem('currentWordIndex', 0);
  }
}
