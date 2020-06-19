class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  loadPage(pathname) {
    this.root.innerHTML = '';
    this.root.append(this.routes[pathname]);
  }

  navigation() {
    if (!window.location.href.match(/#\/.*$/)) {
      return;
    }
    const route = window.location.href.match(/#\/.*$/)[0];
    this.root.innerHTML = '';
    this.routes[route]();
  }

  init() {
    this.root = document.querySelector('.root');
    window.onpopstate = this.navigation.bind(this);
    if (!window.location.href.match(/#\/.*$/)) {
      window.history.replaceState({}, '#/', `${window.location.origin}#/`);
      this.navigation('#/');
    } else {
      this.navigation();
    }
  }
}

export default Routing;
