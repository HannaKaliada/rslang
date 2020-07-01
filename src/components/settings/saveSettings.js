import saveSettingsToLocalStorage from './saveSettingsToLocalStorage';

export default function saveSettings() {
  document.querySelector('.save-btn').addEventListener('click', () => {
    const checkboxes = document.querySelector('.main-settings').querySelectorAll('input');
    const warning = document.querySelector('.warning');
    const success = document.querySelector('.success-notification');

    if ([...checkboxes].some((checkbox) => checkbox.checked)) {
      warning.classList.add('hidden');

      saveSettingsToLocalStorage();

      success.classList.remove('hidden');
    } else {
      success.classList.add('hidden');
      warning.classList.remove('hidden');
    }
  });
}
