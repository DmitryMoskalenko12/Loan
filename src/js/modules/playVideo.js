export default class VideoPlayer {
  constructor(triggers, overlay){
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
    bindTrigger(){
      this.btns.forEach((item, i) =>{
     try {
      const blockedElem = item.closest('.module__video-item').nextElementSibling;
      if (i % 2 == 0) {
        blockedElem.setAttribute('data-disabled', 'true');
      }
     } catch (error) {}

      item.addEventListener('click', () =>{
        
      if (!item.closest('.module__video-item') || item.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
        this.activeBtn = item;
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
          if (this.path !== item.getAttribute('data-url')) {
              this.path =  item.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
          }
        }else{
            this.path =  item.getAttribute('data-url');
            this.createPlayer(this.path); 
        }
      }
    });
  });
  
}
    closeBtn(){
      this.close.addEventListener('click', ()=>{
        this.overlay.style.display = 'none';
        this.player.stopVideo();
      });
    }
    init(){
     if (this.btns.length > 0) {
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTrigger();
      this.closeBtn();
     }
    }
    createPlayer(url){
      this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: `${url}`,
        events: {
          'onStateChange': this.onPlayerStateChange
        }
      });
      this.overlay.style.display = 'flex'
    }


    onPlayerStateChange(state){
      let blockedElem,
          playBtn;
          try {
            blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
          } catch (error) {}
       
        
      if (state.data === 0) {
       try {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = '1';
          blockedElem.style.filter = 'none';

          blockedElem.setAttribute('data-disabled', 'false');
        }
       } catch (error) {}
        
      }
    }
}