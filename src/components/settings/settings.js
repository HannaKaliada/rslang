import changeLimits from './changeLimits';
import renderContent from './renderContent';
import './settings.scss';
import saveSettings from './saveSettings';

export default function settings() {
  renderContent();
  changeLimits();
  saveSettings();
}
