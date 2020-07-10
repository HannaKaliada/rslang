import model from "./our-game-model";
import view from "./our-game-view";
const control = {
  startClick() {
    const btn = document.getElementsByClassName("btn-primary")[0];
    btn.addEventListener("click", () => view.generateGameLayout());
  },
  click() {
    document
      .querySelector(".our-game-wrapper")
      .addEventListener("click", (event) => {
        console.log(event.target.id);
        switch (event.target.id) {
          case "btn-green":
            document
              .querySelector(".learn-word")
              .classList.add("learn-word-slide-green");
            model.trueCheck(1);
            break;
          case "btn-red":
            model.trueCheck(0);
            document
              .querySelector(".learn-word")
              .classList.add("learn-word-slide-red");
            break;
          case "dropdown-difficulty":
            localStorage.setItem("our-game-difficulty", event.target.innerText);
            view.changeLevelDifficulty();
            break;
          case "dropdown-level":
            localStorage.setItem("our-game-level", event.target.innerText);
            view.changeLevelDifficulty();
            break;
          case "game-menu-btn":
            // eslint-disable-next-line
            location.reload();
            break;
          case "repeat-level-btn":
            model.mistakes = 0;
            model.arrayOfAnswers = [];
            model.index = 0;
            model.rightAnswers=0;
            view.generateGameLayout();
            break;
          default:
            break;
        }
      });
  },
};
export default control;
