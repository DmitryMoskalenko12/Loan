export default class Difference {
  constructor(newcard, oldcard, items){
    this.newcard = document.querySelector(newcard);
    this.oldcard = document.querySelector(oldcard);
    this.oldItems = this.oldcard.querySelectorAll(items);
    this.newItems = this.newcard.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }
  hideCard(item){
    item.forEach((elem, i, arr) => {
      if (i !== arr.length - 1) {
        elem.style.display = 'none'
      }
    });
  }

  bindTriggers(trigger, counter, item){
    trigger.querySelector('.plus').addEventListener('click', ()=>{
      if(counter !== item.length - 2){
        item[counter].style.display = 'flex';
        counter++
      }else{
        item[counter].style.display = 'flex';
        item[item.length - 1].remove();
      }
    });

}
  init(){
  this.hideCard(this.oldItems);  
  this.hideCard(this.newItems);
  this.bindTriggers(this.oldcard, this.oldCounter, this.oldItems);
  this.bindTriggers(this.newcard, this.newCounter, this.newItems);
  }
}