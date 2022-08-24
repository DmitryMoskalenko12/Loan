import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/main-slider/mainSlider';
import MiniSlider from './modules/main-slider/sliderMini';

window.addEventListener('DOMContentLoaded', ()=>{
const slider = new MainSlider({container: '.page', btns: '.next'});
slider.render();

const miniSlider = new MiniSlider({
container: '.showup__content-slider',
prev: '.showup__prev',
next: '.showup__next',
activeClass: 'card-active',
animate: true
})
miniSlider.init();

const modulesSlider = new MiniSlider({
container: '.modules__content-slider',
prev: '.modules__info-btns .slick-prev',
next: '.modules__info-btns .slick-next',
activeClass: 'card-active',
animate: true,
autoplay: true,
btnWrapper: '.modules__info-btns'
})
modulesSlider.init();

const feedSlider = new MiniSlider({
container: '.feed__slider',
prev: '.feed__slider .slick-prev',
next: '.feed__slider .slick-next',
activeClass: 'feed__item-active'
})
feedSlider.init();

const player = new VideoPlayer('.showup .play', '.overlay');
player.init()
});