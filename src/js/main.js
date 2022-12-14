import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/main-slider/mainSlider';
import MiniSlider from './modules/main-slider/sliderMini';
import Difference from './modules/difference';
import Form from './modules/form';
import Accordion from './modules/accordion';
import Download from './modules/download'

window.addEventListener('DOMContentLoaded', ()=>{
const slider = new MainSlider({container: '.page', btns: '.next'});
slider.render();

const modulePage = new MainSlider({
  container: '.moduleapp',
  btns: '.next',
  prevmodule: '.prevmodule',
  nextmodule: '.nextmodule'
})

modulePage.render();
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

const player = new VideoPlayer('.play', '.overlay');
player.init();

const playerModules = new VideoPlayer('.module__video-item .play', '.overlay');
playerModules.init();

const diferent = new Difference('.officernew', '.officerold', '.officer__card-item');
diferent.init();

const mainform = new Form('.form', 'http://localhost:3000/postData');
mainform.init();

new Accordion({btns: '.plus__content'}).init();
new Download({
  triggers: '.download',
  downd: 'assets/img/feed_1.png'}).init();
});