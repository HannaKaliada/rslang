import changeLimits from './changeLimits';
import renderContent from './renderContent';
import './settings.scss';
import saveSettings from './saveSettings';
import hideSuccessNotification from './hideSuccessNotification';
import setCheckedToChosenSettings from './setCheckedToChosenSettings';

export default function settings() {
  renderContent();
  changeLimits();
  saveSettings();
  setCheckedToChosenSettings();
  hideSuccessNotification();
}
