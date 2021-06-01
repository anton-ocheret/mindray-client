import debounce from 'lodash.debounce';
import { setDynamicProp } from '@shared/utils';

const DEBOUNCE_TIMEOUT = 1000;
const getWithTag = ({ tag }) => tag;
const getReact = (vueElement) => vueElement.elm.getBoundingClientRect();
const getTopRightElementPosition = (vueElements) => {
  const positions =  vueElements.map((element) => getReact(element).y);
  const topRightElemIndex = positions.lastIndexOf(positions[0]);
  return vueElements[topRightElemIndex];
};

export default {
  inserted(el, bindings, node) {
    if (!bindings.value.execute) return;
    const childHtmlElements = node.children.filter(getWithTag);
    el.__updatePositionValue__ = () => {
      const topRightElement = getTopRightElementPosition(childHtmlElements);
      const { offsetWidth, offsetLeft } = topRightElement.elm;
      const hintActivatorLeftPositon = offsetLeft + offsetWidth;
      setDynamicProp(node.context, bindings.value.propName, hintActivatorLeftPositon);
    };

    el.__debouncedUpdatePositionValue__ = debounce(el.__updatePositionValue__, DEBOUNCE_TIMEOUT);

    window.addEventListener('resize', el.__debouncedUpdatePositionValue__);
    setTimeout(() => el.__updatePositionValue__(), DEBOUNCE_TIMEOUT / 20);
  },
  unbind(el) {
    window.removeEventListener('resize', el.__debouncedUpdatePositionValue__);
  },
};
