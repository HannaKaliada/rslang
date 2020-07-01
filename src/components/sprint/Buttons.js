export default class Buttons {

  renderButtons() {
    const container = document.querySelector('.card-body');
    container.insertAdjacentHTML('beforeend', `<div class="buttons mt-4">
    <button type="button" class="btn btn-danger">Неверно</button>
    <button type="button" class="btn btn-success">Верно</button>
  </div>`);
  }
}
