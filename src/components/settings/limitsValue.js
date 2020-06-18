export default function limitsValue(){
  const wordsLimit = document.querySelector('#words-limit');
  const output = document.querySelector('.words-limit-output');

  output.textContent = wordsLimit.value;

  wordsLimit.addEventListener('input', function () {
    output.textContent = wordsLimit.value;
  });
}
