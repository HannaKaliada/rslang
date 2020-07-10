import model from "./our-game-model";
import view from "./our-game-view";
const control = {
  startClick() {
    const btn = document.getElementsByClassName('btn-primary')[0];
    btn.addEventListener('click', () => view.generateGameLayout());
  },
  click() {
    document
      .querySelector(".our-game-wrapper")
      .addEventListener("click", (event) => {
        switch (event.target.id) {
          default:
            break;
        }
      });
  },
};
export default control;
