async function getImg() {
  try {
    const imgKey = 'uqKnWKJjxeW_UdkP5R_DOLfSPSZ7Ry0LqkqDRtFUmJQ';
    const res = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${imgKey}`);
    // const res2 = await fetch(`https://api.unsplash.com/collections/1065976/photos?client_id=${imgKey}`);
    if (res.ok) {
      const imgData = await res.json();
      console.log(imgData);
      return imgData;
    }
    throw new Error(`${res.status}`);
  } catch (e) {
    return e.toString();
  }
}

export default getImg;
