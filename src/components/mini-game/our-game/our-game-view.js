import model from "./our-game-model";
const view = {
   generateGameLayout() {
    model.getLevelDifficulty();
    model.wordsShuffle();
    const page = document.querySelector(".our-game-wrapper");
    const gameLayout = document.createElement("div");
    gameLayout.classList.add("game-layout", "mx-auto");
    const gameWords = document.createElement("div");
    const spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("spinner-container", "mx-auto");
    gameWords.classList.add("game-words", "mx-auto");
    gameLayout.insertAdjacentElement("beforeend", spinnerContainer);
    gameLayout.insertAdjacentElement("beforeend", gameWords);
    this.remove(page);
    page.insertAdjacentElement("beforeend", gameLayout);
    this.preparationPage();
  },
  async generateSideLayout() {
    const sideContainer = document.createElement("div");
    const greenSide = document.createElement("div");
    const redSide = document.createElement("div");
    greenSide.classList.add("green-side", "our-side");
    redSide.classList.add("red-side", "our-side");
    sideContainer.classList.add("side-container");
    document
      .querySelector(".game-layout")
      .insertAdjacentElement("beforeend", sideContainer);
    sideContainer.insertAdjacentElement("afterbegin", redSide);
    sideContainer.insertAdjacentElement("afterbegin", greenSide);
    const wordRed = document.createElement("p");
    wordRed.classList.add("word-red");
    const wordGreen = document.createElement("p");
    wordGreen.classList.add("word-green");
    redSide.insertAdjacentElement("afterbegin", wordRed);
    greenSide.insertAdjacentElement("afterbegin", wordGreen);
    const learnWord = document.createElement("p");
    learnWord.classList.add("learn-word");
    document
      .querySelector(".game-words")
      .insertAdjacentElement("afterbegin", learnWord);
  },
  remove(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  },
  spinner() {
    const spinnerContainer = document.getElementsByClassName(
      "spinner-container"
    )[0];
    const spinner = `
    <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>`;
    spinnerContainer.insertAdjacentHTML("beforeend", spinner);
  },
  removeSpinner() {
    this.remove(document.getElementsByClassName("spinner-container")[0]);
  },
  preparationPage() {
    let index = 3;
    const gameWords = document.getElementsByClassName("game-words")[0];
    this.remove(gameWords);
    const timer = document.createElement("span");
    timer.classList.add("timer");
    this.spinner();
    document
      .getElementsByClassName("spinner-border")[0]
      .insertAdjacentElement("beforebegin", timer);
    timer.innerText = index;
    const interval = setInterval(() => {
      index -= 1;
      timer.innerText = index;
      if (index <= 0) {
        clearInterval(interval);
        this.removeSpinner();
        this.generateSideLayout();
        model.wordInner();
      }
    }, 1000);
  },
  wordInner() {
    console.log(model.getWords(1, 1));
  },
};

export default view;
