import model from "./savanna-model";
const control = {
  startClick: function () {
    const btn = document.getElementsByClassName("btn-primary")[0];
    btn.addEventListener("click", () => model.generateGameLayout());
  },
  click: function () {
    document.addEventListener("click", (event) => console.log(event));
  },
};
export default control;
