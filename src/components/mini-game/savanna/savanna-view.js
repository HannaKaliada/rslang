import model from "./savanna-model";
const view = {
  gameResult: function(){

  },
  generateGameLayout: async function () {
    if (!localStorage.getItem("savanna-level")) {
      localStorage.setItem("savanna-level", 1);
    }
    model.level = localStorage.getItem("savanna-level");
    const page = document.querySelector(".savanna-game-wrapper");
    const gameLayout = document.createElement("div");
    gameLayout.classList.add("game-layout", "mx-auto");
    const gameWords = document.createElement("div");
    const spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("spinner-container", "mx-auto");
    gameWords.classList.add("game-words", "mx-auto");
    gameLayout.insertAdjacentElement("beforeend", spinnerContainer);
    gameLayout.insertAdjacentElement("beforeend", gameWords);

    this.innerContent(gameLayout, page);
    this.preparationPage();
  },
  innerContent: function (gameLayout, page) {
    page.removeChild(page.children[2]);
    page.removeChild(page.children[1]);
    page.removeChild(page.children[0]);
    page.insertAdjacentElement("beforeend", gameLayout);
  },
  wordInner: async function () {
    const gameWords = document.getElementsByClassName("game-words")[0];
    this.remove(gameWords);
    let content = await model.processArray();
    gameWords.insertAdjacentHTML("beforeend", content);
    setTimeout(
      () =>
        document
          .getElementsByClassName("translation")[0]
          .classList.add("translation-move"),
      100
    );

  },
  remove: function (el) {
    const gameWords = document.getElementsByClassName("game-words")[0];
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  },
  spinner: function () {
    const spinnerContainer = document.getElementsByClassName(
      "spinner-container"
    )[0];
    const spinner = `
    <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>`;
    spinnerContainer.insertAdjacentHTML("beforeend", spinner);
  },
  removeSpinner: function () {
    this.remove(document.getElementsByClassName("spinner-container")[0]);
  },
  preparationPage: function () {
    const gameWords = document.getElementsByClassName("game-words")[0];
    this.remove(gameWords);

    const timer = document.createElement("span");
    timer.innerHTML = "3";
    timer.classList.add("timer");
    this.spinner();
    document
      .getElementsByClassName("spinner-border")[0]
      .insertAdjacentElement("beforebegin", timer);
    let index = 3;

    let interval = setInterval(() => {
      index--;
      timer.innerText = index;
      if (index <= 0) {
        clearInterval(interval);
        this.removeSpinner();
        console.log("timer");
        this.wordInner();
      }
    }, 1000);
  },
};
export default view;
