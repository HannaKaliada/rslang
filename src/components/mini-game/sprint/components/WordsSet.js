export default class WordsSet {


  constructor(collection) {
    this.collection = collection;
  }

  getGamesPairWord() {
    let couple = new Object();
    if (this.randomInteger(1,3) == 3) {
      let firstIndex = this.randomInteger(0,19);
      let secondIndex = this.randomInteger(0,19);
      couple.rus = this.collection[this.randomInteger(0,19)].rus;
      couple.eng = this.collection[this.randomInteger(0,19)].eng;
      couple.correct = firstIndex != secondIndex ? false : true;
    }
    else {
      const index = this.randomInteger(0,19);
      couple.rus = this.collection[index].rus;
      couple.eng = this.collection[index].eng;
      couple.correct = true;
    }
    return couple;
   }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  isCorrect(word) {
    return word.correct;
  }

}
