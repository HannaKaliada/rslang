function formatData(data) {
  return data.map((elem) => {
    const newElem = elem;
    const { image, audio } = newElem;
    newElem.image = image.replace('files', '/assets/image');
    newElem.audio = audio.replace('files', '/assets/audio');
    return elem;
  });
}

async function getWords(page, group) {
  try {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${Math.floor(page / 2)}&group=${group}`;
    const res = await fetch(url);
    if (res.ok) {
      let data = Array.from(await res.json());
      if (page % 2 === 0) data = data.slice(0, 10);
      else data = data.slice(10);
      return formatData(data);
    }
    throw new Error(`${res.status}`);
  } catch (e) {
    return e.toString();
  }
}

export default getWords;
