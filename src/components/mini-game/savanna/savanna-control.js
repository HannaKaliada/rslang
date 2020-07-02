import model from "./savanna-model";
import view from "./savanna-view";
const control = {
  startClick: function () {
    const btn = document.getElementsByClassName("btn-primary")[0];
    btn.addEventListener("click", () => view.generateGameLayout());
  },
  click: function () {
    document.addEventListener("click", (event) => {
      switch (event.target.id) {
        case "word-btn":
          model.trueCheck(event.target.innerText);
          break;
        case "play-btn":
          model.playMusic(event);
          break;

        case "next-level-btn":
          if(!event.target.classList[2]=="disabled"){
          model.mistakes= 0,
          model.timer= 0,
          model.arrayOfAnswers= [],
          model.index=0;
          view.generateGameLayout();}
          break;
        case "repeat-level-btn":
          model.mistakes= 0,
          model.timer= 0,
          model.arrayOfAnswers= [],
          model.index=0;
          view.generateGameLayout();
          break;
        default:
          break;
      }
    });
  },
};
export default control;
