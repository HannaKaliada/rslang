export default class WordsSet {


  constructor(collection) {
    this.collection = collection;
  }

  getGamesPairWord() {
    let couple = new Object();
    console.log("TEST " + this.collection[2].rus + " " +this.collection[2].eng);
    if (this.randomInteger(1,3) == 3) {
      let firstIndex = this.randomInteger(0,19);
      let secondIndex = this.randomInteger(0,19);
      console.log("random " + firstIndex + ' and ' + secondIndex);
      couple.rus = this.collection[firstIndex].rus;
      couple.eng = this.collection[secondIndex].eng;
      couple.correct = firstIndex !== secondIndex ? false : true;
      console.log(couple.rus + " and " + couple.eng);
      console.log(couple.correct);
    }
    else {
      console.log('non-random');
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
