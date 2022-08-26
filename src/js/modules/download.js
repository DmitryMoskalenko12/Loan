export default class Download {
  constructor({triggers, downd}){
    this.triggers = document.querySelectorAll(triggers);
    this.downd = downd;
  }
  linkDownload(e){
    const link = document.createElement('a');
    link.setAttribute('href', this.downd)
    link.setAttribute('download', 'picture');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  init(){
    this.triggers.forEach(item => {
      item.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        this.linkDownload();
      });
    });
  }
}