export default async function setSettingsToLocalStorage(settings) {
  localStorage.setItem('wordsLimit', settings.wordsPerDay);

  for (const key in settings.optional) {
    if (Object.prototype.hasOwnProperty.call(settings.optional, key)) {
      localStorage.setItem(key, settings.optional[key]);
    }
  }
}
