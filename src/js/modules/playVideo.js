export default class VideoPlayer {
  constructor(triggers, overlay){
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
    bindTrigger(){
      this.btns.forEach(item =>{
        item.addEventListener('click', () =>{
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';
          }else{
            const path =  item.getAttribute('data-url');
            this.createPlayer(path);
          }
        })
      })
      
    }
    closeBtn(){
      this.close.addEventListener('click', ()=>{
        this.overlay.style.display = 'none';
        this.player.stopVideo();
      });
    }
    init(){
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTrigger();
      this.closeBtn();
    }
    createPlayer(url){
      this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: `${url}`
      });
      this.overlay.style.display = 'flex'
    }

}