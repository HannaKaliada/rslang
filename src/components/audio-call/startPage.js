import gamePage from './gamePage';
import createElement from '../../shared/createElement';
import loginUser from '../../services/loginUser';

export const state = {};

class StartPage {
  constructor(createHTML, startGame) {
    this.createElement = createHTML;
    this.gameClass = startGame;
  }

  createTitle() {
    const title = this.createElement('h1', 'audiocall-title');
    title.innerText = 'Audio Call';
    return title;
  }

  createDescription() {
    const desc = this.createElement('div', 'audiocall-description');
    const p1 = this.createElement('p');
    p1.innerText = 'Listen to the word and choose the right translation.';
    const p2 = this.createElement('p');
    p2.innerText = 'Difficult? Use a hint: listen to the meaning of the word.';
    const p3 = this.createElement('p');
    p3.innerText = 'You get 2 points for right answer, 1 point for right answer with hint and 0 in other cases.';
    desc.append(p1, p2, p3);
    return desc;
  }

  createButton() {
    const button = this.createElement('button', ['btn', 'btn-primary']);
    button.innerText = 'Start';
    button.addEventListener('click', this.startGame.bind(this));
    return button;
  }

  createPage() {
    const root = document.querySelector('.root');
    const container = this.createElement('div', ['container', 'audio-call']);
    container.append(this.createTitle(), this.createDescription(), this.createButton());
    root.append(container);
  }

  startGame() {
    this.gameClass.init.call(this.gameClass);
  }
}

export const startPage = new StartPage(createElement, gamePage);
