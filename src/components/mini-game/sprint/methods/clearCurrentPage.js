const clearCurrentPage = () => {
  let card = document.querySelector('.root');
  for (let i = card.childNodes.length - 1; i >= 0; i--) {
    card.removeChild(card.childNodes[i]);
 }
}
export default clearCurrentPage;
