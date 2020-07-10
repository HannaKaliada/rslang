export default function showMessage() {
  if (localStorage.getItem('currentWord') === localStorage.getItem('wordsLimit')) {
    const page = document.querySelector('.word');
    const content = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>You have fulfilled your norm for today, you can stop or continue to learn new words</p>
    <hr>
    <p class="mb-0">To close message click close btn</p>
    <button type="button" class="btn btn-success btn-close-show-message">Close</button>
  </div>`;

    page.insertAdjacentHTML('afterbegin', content);

    const btn = document.querySelector('.btn-close-show-message');
    btn.addEventListener('click', () => document.querySelector('.alert').remove());
  }
}
