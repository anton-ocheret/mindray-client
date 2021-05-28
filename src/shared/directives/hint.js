export default {
  bind(el, bindings, node) {
    if (!bindings.value.execute) return;
    // const { child: elVueComponent } = node.parent;
    // elVueComponent.items = [1, 2, 3, 4, 5];
    console.log(node, bindings);
    node.children.forEach(child => {
      setTimeout(() => {
        //child.elm.getBoundingClientRect().y
        console.log(child, child.elm);
        console.log(child.tag);
      });
    });
    // el.__mouseHoverHandler__ = () => {
    //   gsap.to(`.${value.cls}`, {
    //     rotation: value.rotation,
    //   });
    // };
    // el.addEventListener('mouseenter', el.__mouseHoverHandler__);
    // el.addEventListener('mouseleave', el.__mouseHoverHandler__);
  },
  // unbind() {
    // el.removeEventListener('mouseenter', el.__mouseHoverHandler__);
    // el.removeEventListener('mouseleave', el.__mouseHoverHandler__);
  // },
};
