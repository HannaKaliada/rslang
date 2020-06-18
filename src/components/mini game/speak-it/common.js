export default function createDomElem(
  tag, className, content,
) {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  if (content) elem.append(...content);
  return elem;
}
