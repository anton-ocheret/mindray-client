import debounce from 'lodash.debounce';

const DEBOUNCE_TIMEOUT = 1000;
const getRect = (elem) => elem.getBoundingClientRect();
const getTopRightElementPosition = (elems) => {
  const positions =  Array.from(elems).map((element) => getRect(element).y);
  const topRightElemIndex = positions.lastIndexOf(positions[0]);
  return elems[topRightElemIndex];
};
const removeEmptyElements = (array) => array.filter(Boolean);
const createTemplate = (wordsArray) => wordsArray.map((word) => `<span>${word}</span> `).join('');

export default {
  inserted(el, bindings) {
    const { elementClass } = bindings.value;
    const relativeElement = document.querySelector(elementClass);
    const rawTextContent = relativeElement.textContent.split(' ');
    const textContent = removeEmptyElements(rawTextContent);
    const html = createTemplate(textContent);
    relativeElement.innerHTML = html;

    el.__updatePositionValue__ = () => {
      const topRightElement = getTopRightElementPosition(relativeElement.children);
      const { offsetWidth, offsetLeft } = topRightElement;
      const left = offsetLeft + offsetWidth;
      if (el && left) {
        el.style.left = `${left}px`;        
      }
    };

    el.__debouncedUpdatePositionValue__ = debounce(el.__updatePositionValue__, DEBOUNCE_TIMEOUT);

    window.addEventListener('resize', el.__debouncedUpdatePositionValue__);
    setTimeout(() => el.__updatePositionValue__(), DEBOUNCE_TIMEOUT / 10);
  },
  unbind(el) {
    window.removeEventListener('resize', el.__debouncedUpdatePositionValue__);
  },
};
