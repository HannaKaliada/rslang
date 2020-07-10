const model = {
  level: 0,
  difficulty: 0,
  words: [],
  index: 0,
  answer:0,
  getLevelDifficulty() {
    this.level = localStorage.getItem("our-game-level");
    this.difficulty = localStorage.getItem("our-game-difficulty");
  },
  formatData(data) {
    return data.map((elem) => {
      const newElem = elem;
      const { image, audio } = newElem;
      newElem.image = `https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/${image}`;
      newElem.audio = `https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/${audio}`;
      return elem;
    });
  },
  async getWords(page, group) {
    try {
      const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
      const res = await fetch(url);
      if (res.ok) {
        let data = Array.from(await res.json());
        return this.formatData(data);
      }
      throw new Error(`${res.status}`);
    } catch (e) {
      return e.toString();
    }
  },
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  async wordsShuffle() {
    this.words = await this.getWords(0, 0);
    this.shuffle(this.words);
  },
  wordInner() {

    console.log(this.words);
    console.log(this.index);
    this.answer=Math.round(Math.random());

    const wordAnswer=this.words[this.index+this.answer].word;
    console.log(wordAnswer);
    document
      .querySelector(".word-red")
      .insertAdjacentHTML(
        "afterend",
        `${this.words[this.index].textMeaning.replace(/\<.*\>/, "...")}`
      );

    document
      .querySelector(".word-green")
      .insertAdjacentHTML(
        "afterend",
        `${this.words[++this.index].textMeaning.replace(/\<.*\>/, "...")}`
      );
      document.querySelector(".learn-word").insertAdjacentHTML('afterbegin',wordAnswer);

  },
};
export default model;
