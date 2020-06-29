import model from "./savanna-model";
import view from "./savanna-view";
const control = {
  startClick: function () {
    const btn = document.getElementsByClassName("btn-primary")[0];
    btn.addEventListener("click", () => view.generateGameLayout());
  },
  click: function () {
    document.addEventListener("click", (event) => {
      if (event.target.id == "word-btn") {
        model.trueCheck(event.target.innerText);
      }
    });
  },
};
export default control;
