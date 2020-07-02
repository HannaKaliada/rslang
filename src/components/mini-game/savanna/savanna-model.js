const { default: view } = require("./savanna-view");
const { default: getWords } = require("../../../shared/get-words");
const model = {
  answer: "",
  rightAnswer: 0,
  level: 1,
  index: 0,
  difficulty: localStorage.getItem("level") % 3,
  mistakes: 0,
  timer: 0,
  arrayOfAnswers: [],
  playMusic: function (event) {
    event.target.children[0].play();
  },
  endGame: function () {
    console.log("КОНЕЦ ИГРЫ", this.mistakes);
    view.remove(document.getElementsByClassName("lives-container")[0]);
    clearTimeout(this.timer);
    view.remove(document.getElementsByClassName("game-words")[0]);
    view.gameResult();
    if (this.mistakes < 5) {
      localStorage.setItem("savanna-level", this.level++);
    } else document.getElementById("next-level-btn").classList.add("disabled");
  },
  trueCheck: function (word) {
    clearTimeout(this.timer);
    console.log(this.index, "  ", this.mistakes);
    if (this.index > (this.level % 3) * 20 || this.mistakes >= 5)
      this.endGame();
    else {
      if (word == this.answer) {
        this.rightAnswer++;
        this.arrayOfAnswers[this.index % 20]["answer"] = "true";
      } else {
        this.mistakes++;
        this.arrayOfAnswers[this.index % 20]["answer"] = "false";
      }
      this.index++;
      console.log("true");
      view.wordInner();
    }
  },
  processArray: async function () {
    let content = "";
    const createArray = (length) => Array.from({ length: length }, (v, k) => k);
    const shuffle = (array) => array.sort((a, b) => Math.random() - 0.5);
    let array = shuffle(createArray(10));
    console.log((this.level % 3) * 20);
    view.spinner();
    console.log(this.index, " ", this.difficulty);

    let word = await getWords(this.index, this.difficulty);
    console.log(word);

    view.removeSpinner();
    let min = array[0];
    let translate = word[array[0]].wordTranslate;
    let answer = word[array[0]].word;
    for (let i = 0; i < 4; i++) {
      if (min > array[i]) {
        min = array[i];
        translate = word[array[i]].wordTranslate;
        answer = word[array[i]].word;
      }
      content += `<button type="button" id="word-btn" class="btn word-btn btn-secondary">
       ${word[array[i]].word}</button>`;
    }
    this.arrayOfAnswers.push(word[min]);
    console.log(this.arrayOfAnswers);

    content += `<div class="translation">${translate}</div>`;
    console.log(this.index, "  ", this.mistakes);

    this.answer = answer;
    console.log(this.index % 20,"dwadwa");

    this.arrayOfAnswers[this.index % 20]["answer"] = "false";
    this.timer = setTimeout(() => {
      this.mistakes++;
      this.index++;

      if (this.index > (this.level % 3) * 20 || this.mistakes >= 5) {
        this.endGame();
        clearTimeout(this.timer);
      } else view.wordInner();
    }, 9000000000);
    return content;
  },
};

export default model;
