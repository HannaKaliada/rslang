import correctAnswer from './correctAnswer';
import properties from './properties';

export default function showAnswer() {
  const showAnswerBtn = document.querySelector('.show-answer-btn');
  showAnswerBtn.addEventListener('click', () => {
    properties.allWords[localStorage.getItem('currentWord')].answer = 'false';
    const input = document.querySelector('form input');
    input.value = properties.missingWord;
    input.classList.add('input_show-answer');
    correctAnswer();
    showAnswerBtn.classList.add('hidden');
  });
}
