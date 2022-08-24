import Slider from './slider';
export default class MainSlider extends Slider{
constructor(btns){
  super(btns);
}
showSlide(n){
  if (n > this.slides.length) {
    this.slideIndex = 1;
  }
  if (n < 1) {
    this.slideIndex = this.slides.length;
  }

  this.slides.forEach(elem => {
    elem.classList.add('animated', 'fadeIn');
    elem.style.display = 'none';
  });

  this.slides[this.slideIndex - 1].style.display = 'block';
  try {
    this.hanson.style.opacity = '0';
    this.hanson.addEventListener('click', () => {
      this.hanson.style.opacity = '0';
      this.hanson.classList.add('fadeOut');
      this.hanson.classList.remove('slideInUp');
    })
    if (n === 3) {
      this.hanson.classList.add('animated');
      setTimeout(()=>{
        this.hanson.style.opacity = '1';
        this.hanson.classList.add('slideInUp');
        this.hanson.classList.remove('fadeOut');
      }, 3000)
    }else{
      this.hanson.classList.remove('slideInUp');
      this.hanson.classList.remove('fadeOut');
    }
  } catch (error) {}
  

 /*  document.querySelector('.hanson').style.display = 'none';
  if (n === 2) {
    setTimeout(()=>{
      document.querySelector('.hanson').style.display = 'block';
      document.querySelector('.hanson').classList.add('animated','slideInUp');
    }, 5000)
  }else{
      document.querySelector('.hanson').style.display = 'none'
  }
  document.querySelector('.hanson').addEventListener('click', ()=>{
    document.querySelector('.hanson').style.display = 'none'
  }) */
}

plusSlide(n){
  this.showSlide(this.slideIndex += n);
}

render(){
  try {
    this.hanson = document.querySelector('.hanson');
  } catch (error) {}

  this.btns.forEach((but) => {
    but.addEventListener('click', () => {
      this.plusSlide(1);
    });

    but.parentNode.previousElementSibling.addEventListener('click', (e)=>{
      e.preventDefault();
      this.slideIndex = 1;
      this.showSlide(this.slideIndex);

    });
  });
 
  this.showSlide(this.slideIndex);
}
}