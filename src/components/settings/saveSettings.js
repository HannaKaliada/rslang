import saveSettingsToLocalStorage from './saveSettingsToLocalStorage';

export default function saveSettings() {
  saveSettingsToLocalStorage();

  document.querySelector('.save-btn').addEventListener('click', () => {
    const checkboxes = document.querySelector('.info-settings').querySelectorAll('input');

    if ([...checkboxes].some((checkbox) => checkbox.checked)) {
      document.querySelector('.warning').classList.add('hidden');

      saveSettingsToLocalStorage();

      document.querySelector('.success-notification').classList.remove('hidden');
    } else {
      document.querySelector('.success-notification').classList.add('hidden');
      document.querySelector('.warning').classList.remove('hidden');
    }
  });
}
