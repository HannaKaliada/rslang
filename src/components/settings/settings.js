import changeLimits from './changeLimits';
import renderContent from './renderContent';
import './settings.scss';

export default function settings() {
  renderContent();
  changeLimits();
}
