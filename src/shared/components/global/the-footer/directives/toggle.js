export default {
  bind(el, { value = { cls: 'footer-opened', closeEl: 'footer-close', cancelCls: 'footer-link' } }) {
    const html = document.querySelector('html');

    el.__mouseClickHandler__ = (event) => {
      if (event.target.classList.contains(value.cancelCls)) {
        return false;
      }

      html.classList.add(value.cls);
      const closeEl = document.querySelector(`.${value.closeEl}`);
      closeEl.addEventListener('click', el.__handleClose__);
    };
    el.__handleClose__ = () => {
      html.classList.remove(value.cls);
      const closeEl = document.querySelector(`.${value.closeEl}`);
      closeEl.removeEventListener('click', el.__handleClose__);
    };
    el.addEventListener('click', el.__mouseClickHandler__);
  },
  unbind(el) {
    el.removeEventListener('click', el.__mouseClickHandler__);
  },
};
