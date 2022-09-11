export default class Slider{
  constructor({
    container = null,
    btns = null,
    prev = null,
    next = null,
    activeClass = '',
    animate,
    autoplay,
    btnWrapper = null,
    nextmodule = null,
    prevmodule = null,
    } = {}){
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (error) {}
    this.prevmodule = document.querySelectorAll(prevmodule);
    this.nextmodule = document.querySelectorAll(nextmodule);
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.btnWrapper = document.querySelector(btnWrapper);
    this.slideIndex = 1;
  }
}