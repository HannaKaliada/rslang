class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  navigation(pathname) {
    const root = document.querySelector('.root');
    root.innerHTML = '';
    root.append(this.routes[pathname]);
  }
}

export default Routing;
