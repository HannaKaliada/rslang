export default function hideSuccessNotification() {
  document.querySelector('.info-settings').addEventListener('click', (event) => {
    if (event.target.classList.contains('settings-to-save')) {
      document.querySelector('.success-notification').classList.add('hidden');
      document.querySelector('.warning').classList.add('hidden');
    }
  });
}
