//버튼 -> stop -> 정지 부르기, start -> 시작 부르기

const NavEvent = new class{

    
    #Button = document.querySelector("#media-player-button") as HTMLElement;
    #ButtonLabel = document.querySelector('#media-player-buttonL') as HTMLElement;

    #Source = document.querySelector("#media-player-source") as HTMLElement;
  
    #Volume = document.querySelector("#media-player-volume") as HTMLElement;
    #SeekBar = document.querySelector("#seekBar") as HTMLElement;

    constructor(){
    
      this.#Button.onclick = () => {
        
          this.#ButtonLabel.innerText = NavFCT.player(this.#ButtonLabel.innerText);

      }
      this.#Source.onclick = () => {

        // window.location.href = CurrentWeather.getSourceData();
        window.open(CurrentWeather.getSourceData());
     
      }
      this.#Volume.onclick = (e:any) =>{

            console.log(typeof(e.target));

            e.target.style.color !='tomato' ? NavFCT.seekBarShow(e.target,this.#SeekBar,'tomato'):NavFCT.seekBarShow(e.target,this.#SeekBar,'white');
      }
    }
  
}

const NavFCT = new class{


  constructor(){}

  player(text:string): string{
    
    if(text === 'STOP'){
          
        stopVideo();
          
          return 'START';
          
    }else if( text === 'START'){
      
        // player.playVideo();
        player.loadVideoById(CurrentWeather.getMediaData(),30,'default');
        return 'STOP'

    }else{
      console.error('error');
    }

  }
  seekBarShow(target:any,bar: Element,color : string):void{

    if(color === 'tomato'){
        
      target.style.color = color;
        
      bar.className = '';

      bar.animate(
        {
          opacity:[0,1],
        }
        ,
        { 
          easing: "ease-in-out",
          fill : 'forwards',
          duration:800,
        });

    }else{
      
      target.style.color = color;

      bar.className = 'hidden';
    }
  }
}