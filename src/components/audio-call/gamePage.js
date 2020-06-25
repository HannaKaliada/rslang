import createElement from '../../shared/createElement';

class GamePage {
  constructor(func) {
    this.createElement = func;
  }

  createSoundIcon() {
    const icon = this.createElement('img', 'audiocall__speaker');
    icon.src = '../../assets/icons/speaker.svg';
    return icon;
  }

  createAnswerBlock() {
    const icon =
  }

  gameButtonHandler() {

  }

  startGame() {

  }

  createGameButton() {
    const button = this.createElement('button', 'audiocall__game-button');
    button.innerText = 'Начать';
    button.addEventListener('click', this.gameButtonHandler.bind(this));
    return button;
  }

  createSelectionBlock() {
    const levelBlock = this.createElement
  }

  createHit
}

const gamePage = GamePage(createElement);

export default gamePage;
