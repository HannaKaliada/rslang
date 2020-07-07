

export default function renderResultPage(score) {
  let card = document.querySelector('.container');
  for (let i = card.childNodes.length - 1; i >= 0; i--) {
    card.removeChild(card.childNodes[i]);
 }
 card.insertAdjacentHTML('beforeend', `<div class="card">
 <div class="card-header text-center">
   YOUR RESULT: ${score.score}
 </div>
 <div class="card-body">
   <blockquote class="blockquote mb-0">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
     <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
   </blockquote>
 </div>
</div>`);
}
