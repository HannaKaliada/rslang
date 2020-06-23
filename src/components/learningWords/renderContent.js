export default function renderContent() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
    <div class="word">
      <div class="word__card card text-center">
      <p class="sentence">
      I <input type="text" class="form-control" maxlength="100" onkeydown="this.style.width = ((this.value.length + 1) * 8) + 24 + 'px';"> every day
      </p>
      <p class="sentence-translation">
      Я бегаю каждое утро
      </p>
      </div>
      <p class="word__translation">Бегать, бежать</p>
      </div>
    </p>`);
}
