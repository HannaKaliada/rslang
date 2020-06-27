const { default: view } = require("./savanna-view");

const model = {
  generateGameLayout: function () {
    let content = `
  <button type="button" class="btn word-btn btn-secondary">word 1</button>
  <button type="button" class="btn word-btn btn-secondary">word 2</button>
  <button type="button" class="btn word-btn btn-secondary">word 3</button>
  <button type="button" class="btn word-btn btn-secondary">word 4</button>
  `;
    const page = document.querySelector(".savanna-game-wrapper");
    const gameLayout = document.createElement("div");
    gameLayout.classList.add("game-layout");
    const gameWords = document.createElement("div");
    gameWords.classList.add("game-words", "mx-auto");
    gameWords.insertAdjacentHTML("beforeend", content);
    gameLayout.insertAdjacentElement("beforeend", gameWords);
    view.innerContent(gameLayout, page);
  },
};

export default model;
