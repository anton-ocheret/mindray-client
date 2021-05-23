import { gsap } from 'gsap/all';

export default {
  bind(el, { value = { cls: 'hover-rotate', rotation: '+=30' } }) {
    console.log(value);
    el.__mouseHoverHandler__ = () => {
      gsap.to(`.${value.cls}`, {
        rotation: value.rotation,
      });
    };
    el.addEventListener('mouseenter', el.__mouseHoverHandler__);
    el.addEventListener('mouseleave', el.__mouseHoverHandler__);
  },
  unbind(el) {
    el.removeEventListener('mouseenter', el.__mouseHoverHandler__);
    el.removeEventListener('mouseleave', el.__mouseHoverHandler__);
  },
};
