// import createDomElem from '../common';
import getWords from '../../../../shared/get-words';

export default getWords;
// export async function getWords(page, group) {
//   try {
//     const res = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${Math.floor(page / 2)}&group=${group}`);
//     if (res.ok) {
//       let data = Array.from(await res.json());
//       if (page % 2 === 0) data = data.slice(0, 10);
//       else data = data.slice(10);
//       console.log(data);
//       return data.map((obj) => {
//         const { image, textExampleTranslate } = obj;
//         let { textExample, audioExample } = obj;
//         textExample = textExample.replace(/<\/?b>/g, '');
//         audioExample = audioExample.replace('files', '/assets/audio');
//         return {
//           audioExample,
//           image,
//           textExample,
//           textExampleTranslate,
//         };
//       });
//     }
//     throw new Error(`${res.status}`);
//   } catch (e) {
//     const errors = document.querySelector('.errors');
//     const error = createDomElem('div', ['alert', 'alert-danger'], [e.toString()]);
//     errors.append(error);
//     return e.toString();
//   }
// }
