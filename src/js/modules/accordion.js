export default class Accordion{
  constructor({btns} = {}){
    this.btns = document.querySelectorAll(btns)
  }
  init(){
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          btn.closest('.module__info-show').nextElementSibling.classList.add('animated', 'fadeIn');
          btn.closest('.module__info-show').nextElementSibling.style.marginTop = '20px';
          btn.closest('.module__info-show').nextElementSibling.classList.toggle('msg'); 
        } catch (error) {
          
        }
      
      })
    });
  }
}