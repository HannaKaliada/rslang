export default class Buttons {

  renderButtons() {
    const container = document.querySelector('.card-body');
    container.insertAdjacentHTML('beforeend', `<div class="buttons mt-4">
    <button type="button" class="btn btn-danger">Неверно</button>
    <button type="button" class="btn btn-success">Верно</button>
  </div>`);
  }

  // initTrueButton() {
  //   const trueButton = document.querySelector('.btn-success');
  //   trueButton.addEventListener('click', () => {
  //     console.log('click true');
  //     return true;
  //    })
  // }

  // initFalseButton() {
  //   const trueButton = document.querySelector('.btn-danger');
  //   trueButton.addEventListener('click', () => {
  //     return false;
  //    })
  // }

}
