import changeLimits from './changeLimits';
import renderContent from './renderContent';
import './settings.scss';
import saveButtonHandler from './saveButtonHandler';
import hideSuccessNotification from './hideSuccessNotification';
import setCheckedToChosenSettings from './setCheckedToChosenSettings';

export default function settings() {
  renderContent();
  changeLimits();
  saveButtonHandler();
  setCheckedToChosenSettings();
  hideSuccessNotification();
}
