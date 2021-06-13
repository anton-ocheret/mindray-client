import { gsap } from 'gsap/all';

const hoverRotate = {
  bind(el, { value = { cls: 'hover-rotate', rotation: '+=30' } }) {
    const tl = gsap.timeline();
    el.__mouseHoverHandler__ = () => {
      tl.progress(1);
      tl.to(`.${value.cls}`, {
        rotation: value.rotation,
        duration: 0.5,
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

export default hoverRotate;
