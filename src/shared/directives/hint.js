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
      console.log('here');
      const topRightElement = getTopRightElementPosition(childHtmlElements);
      const { offsetWidth, offsetLeft } = topRightElement.elm;
      const hintActivatorLeftPositon = offsetLeft + offsetWidth;
      setDynamicProp(node.context, bindings.value.propName, hintActivatorLeftPositon);
    };

    el.__debaoncedUpdatePositionValue__ = debounce(el.__updatePositionValue__, DEBOUNCE_TIMEOUT);

    window.addEventListener('resize', el.__debaoncedUpdatePositionValue__);
    el.__updatePositionValue__();
  },
  unbind(el) {
    document.removeEventListener('resize', el.__debaoncedUpdatePositionValue__);
  },
};
