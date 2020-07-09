import getAllUserWords from '../../services/getAllUserWords';

export default async function getHardUserWords(userId, token) {
  const words = await getAllUserWords(userId, token);
  const hardWords = words.filter((word) => word.difficulty === 'hard');
  return hardWords;
}
