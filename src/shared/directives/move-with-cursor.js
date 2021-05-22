import { gsap } from 'gsap/all';

export default {
  bind(el) {
    el.style.position = 'fixed';
    el.__posX__ = 0;
    el.__posY__ = 0;
    el.__mouseX__ = 0;
    el.__mouseY__ = 0;

    gsap.to({}, {
      duration: 0.016,
      repeat: -1,
      onRepeat() {
        el.__posX__ += (el.__mouseX__ - el.__posX__ - el.offsetWidth / 2) / 9;
        el.__posY__ += (el.__mouseY__ - el.__posY__ - el.offsetHeight / 2) / 9;

        gsap.set(el, {
          css: {
            left: el.__posX__ - 12,
            top: el.__posY__ - 12,
          },
        });
      },
    });
    el.__mouseMoveHandler__ = (event) => {
      el.__mouseX__ = event.clientX;
      el.__mouseY__ = event.clientY;
    };
    document.body.addEventListener('mousemove', el.__mouseMoveHandler__);
  },
  unbind(el) {
    document.body.removeEventListener('mousemove', el.__mouseMoveHandler__);
  },
};
