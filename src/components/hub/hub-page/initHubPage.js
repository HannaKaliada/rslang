import info from './info';
import renderHeader from '../../../shared/header/renderHeader';
import renderHubPage from './renderHubPage';
import renderMenu from '../../../shared/menu/renderMenu';
import '../../../styles/header.scss';
import '../../../styles/hub-page.scss';
import '../../../styles/menu.scss';
import createElement from '../../../shared/createElement';
import burgerIconHandler from '../../../shared/menu/burgerIconHandler';
import setItemActiveState from '../../../shared/menu/setItemActiveState';

export default function initHubPage() {
  const root = document.querySelector('.root');
  const hub = createElement('div', 'hub');
  hub.append(renderHeader(), renderHubPage(info), renderMenu());
  root.append(hub);
  burgerIconHandler();
  setItemActiveState();
}
