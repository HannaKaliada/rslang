import info from './info';
import renderHeader from '../header/renderHeader';
import renderHubPage from './renderHubPage';
import '../../../styles/header.scss';
import '../../../styles/hub-page.scss';

export default function initHubPage() {
  renderHeader();
  renderHubPage(info);
}
