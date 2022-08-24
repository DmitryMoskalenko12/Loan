export default class Difference {
  constructor(newcard, oldcard, items){
    this.newcard = document.querySelector(newcard);
    this.oldcard = document.querySelector(oldcard);
    this.items = items;
  }
hideCard(){
  this.newcard.querySelectorAll(this.items).forEach((elem, i, arr) => {
    if (i !== arr.length - 1) {
      elem.style.display = 'none'
    }
  });

  this.oldcard.querySelectorAll(this.items).forEach((elem, i, arr) => {
    if (i !== arr.length - 1) {
      elem.style.display = 'none'
    }
  });
}
  init(){
  this.hideCard()
  }
}