function mainPage() {
    const page = document.querySelector('.root');
    const header = document.createElement('h2');
    header.innerText = 'This is main page';
    const list = document.createElement('ul');
    list.innerHTML = '<li><a href="#/statis-tics">Statistic page</a></li><li><a href="#/game">Game page</a></li><li><a href="#/about-team">About team page</a>';
    page.append(header, list);
}

function statistics() {
    const page = document.querySelector('.root');
    const header = document.createElement('h2');
    header.innerText = 'This is statistics page';
    const list = document.createElement('ul');
    list.innerHTML = '<li><a href="#/">Main page</a></li><li><a href="#/game">Game page</a></li>';
    page.append(header, list);
}

function game() {
    const page = document.querySelector('.root');
    const header = document.createElement('h2');
    header.innerText = 'This is game page';
    const list = document.createElement('ul');
    list.innerHTML = '<li><a href="#/statis-tics">Statistic page</a></li><li><a href="#/">Main page</a></li>';
    page.append(header, list);
}

function aboutTeam() {
    const page = document.querySelector('.root');
    const header = document.createElement('h2');
    header.innerText = 'This is about team page';
    const list = document.createElement('ul');
    list.innerHTML = '</li><li><a href="#/">Main page</a></li>';
    page.append(header, list);
}

const routes = {
    '#/': mainPage,
    '#/statis-tics': statistics,
    '#/game': game,
    '#/about-team': aboutTeam,
};

export default routes;