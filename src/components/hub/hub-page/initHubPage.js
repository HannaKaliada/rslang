import info from './info';
import renderHeader from '../../../shared/header/renderHeader';
import renderHubPage from './renderHubPage';
import '../../../styles/header.scss';
import '../../../styles/hub-page.scss';
import logoutButtonHandler from '../../../shared/header/logoutButtonHandler';

export default function initHubPage() {
  renderHeader();
  renderHubPage(info);
  logoutButtonHandler();
}
