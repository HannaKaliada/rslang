class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  loadPage(pathname) {
    this.root.innerHTML = '';
    this.root.append(this.routes[pathname]);
  }

  navigation() {
    if (!window.location.href.match(/#\/\w*$/)) {
      return;
    }
    const route = window.location.href.match(/#\/\w*$/)[0];
    this.loadPage(route);
  }

  init() {
    this.root = document.querySelector('.root');
    window.history.replaceState({}, '#/', `${window.location.origin}#/`);
    this.navigation('#/');
    window.onpopstate = this.navigation.bind(this);
  }
}

export default Routing;
