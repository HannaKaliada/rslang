function mainPage() {
  const page = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = 'This is main page';
  const list = document.createElement('ul');
  list.innerHTML = '<li><a href="#/statistics">Statistic page</a></li><li><a href="#/game">Game page</a></li>';
  page.append(header, list);
  return page;
}
function statistics() {
  const page = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = 'This is statistics page';
  const list = document.createElement('ul');
  list.innerHTML = '<li><a href="#/">Main page</a></li><li><a href="#/game">Game page</a></li>';
  page.append(header, list);
  return page;
}
function game() {
  const page = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = 'This is game page';
  const list = document.createElement('ul');
  list.innerHTML = '<li><a href="#/statistics">Statistic page</a></li><li><a href="#/">Main page</a></li>';
  page.append(header, list);
  return page;
}
const routes = {
  '#/': mainPage(),
  '#/statistics': statistics(),
  '#/game': game(),
};

export default routes;
