import gamePage from './gamePage';
import createElement from '../../shared/createElement';


class StartPage {
  constructor(func) {
    this.createElement = func;
  }

  createTitle() {
    const title = this.createElement('h1', 'audiocall-title');
    title.innerText = 'Audio Call';
    return title;
  }

  createDescription() {
    const desc = this.createElement('div', 'audiocall-description');
    desc.innerText = 'Listen to the word and choose the right translation';
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
    const container = this.createElement('div', 'container');
    container.append(this.createTitle(), this.createDescription(), this.createButton());
    root.append(container);
  }

  startGame() {
    const root = document.querySelector('.root');
    const container = this.createElement('div', 'container');
    container.append(gamePage.createPage());
    root.removeChild(root.firstChild);
    root.append(container);
  }

}

const startPage = StartPage(createElement);

export default startPage;
