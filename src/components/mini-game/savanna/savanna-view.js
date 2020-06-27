const view = {
  innerContent: function (gameLayout, page) {
    page.removeChild(page.children[2]);
    page.removeChild(page.children[1]);
    page.removeChild(page.children[0]);
    page.insertAdjacentElement("beforeend", gameLayout);
  },
};
export default view;
