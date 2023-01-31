//버튼 -> stop -> 정지 부르기, start -> 시작 부르기

const NavEvent = new class{

    
    #Button = document.querySelector("#media-player-button") as HTMLElement;
    #ButtonLabel = document.querySelector('#media-player-buttonL') as HTMLElement;

    #Source = document.querySelector("#media-player-source") as HTMLElement;
  
    #Volume = document.querySelector("#media-player-volume") as HTMLElement;
    #SeekBar = document.querySelector("#seekBar") as HTMLElement;

    constructor(){
    
      this.#Button.onclick = ():void => {
        
          this.#ButtonLabel.innerText = NavFCT.player(this.#ButtonLabel.innerText);

      }
      this.#Source.onclick = ():void => {

        // window.location.href = CurrentWeather.getSourceData();
        window.open(CurrentWeather.getSourceData());
     
      }
      this.#Volume.onclick = (e:any):void =>{

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

    if(bar.classList.contains('hidden')){ 
        
     
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


    }
    
    bar.classList.toggle('hidden');
    
    target.classList.toggle('strong');
        
   
  }
}


const seekBarFCT = new class{

  #SeekbarBox = document.querySelector('#seekBar-box') as HTMLElement;
  
  #SeekbarBTN = document.querySelector('#seekBar-box-btn') as HTMLElement;



  #beforeX: number = 0;
  #clientX_gab: number = 0;
  #leftVal: number = 0;
  #movingVal: number = 0;

  constructor(){

    this.#SeekbarBTN.onmousedown = (e: MouseEvent):void =>{
      e.preventDefault();
   
        this.#beforeX = e.clientX;

        document.onmousemove = (e:MouseEvent):void => {
          e.preventDefault();
          seekBarFCT.move(e,this.#SeekbarBox,this.#SeekbarBTN);
        
        }
        document.onmouseup = (e:MouseEvent):void => {
          e.preventDefault();
          seekBarFCT.stop(e);

        }
    }
    
  }
  move(e:MouseEvent, box: HTMLElement, btn: HTMLElement):void{
    
    
    // 상대적-> 현재  - 이전 값 
    console.log('e',e);
    this.#clientX_gab = e.clientX - this.#beforeX;

    // 현재 값 
    this.#beforeX = e.clientX;
    
    // btn.style.left  = (btn.offsetLeft + this.#clientX_gab) + "px";
    // offsetleft -> box left  
    this.#movingVal = btn.offsetLeft + this.#clientX_gab;
    

    // left, right
    if(this.#movingVal < 0){
    
      this.#leftVal = 0;
      console.log(this.#movingVal,box.offsetLeft,box.clientWidth);
    }else if(this.#movingVal >= box.clientWidth){
      
      this.#leftVal = box.clientWidth;
  
    }else{
      this.#leftVal = this.#movingVal;
    }
    // console.log(btn.offsetLeft, this.#clientX_gab);
    // // 현재 left 
    //   console.log('btn', btn.offsetLeft);
    // if(btn.offsetLeft + this.#clientX_gab < 0 || this.#beforeX < box.offsetLeft){
    //     this.#leftVal = 0;
    //     alert('1');
    // }else if((btn.offsetLeft + this.#clientX_gab) > box.clientWidth || this.#beforeX > (box.offsetLeft+box.clientWidth)){
      
     
    //   this.#leftVal = box.clientWidth;
   
    // }else{
    
    //   this.#leftVal = (btn.offsetLeft + this.#clientX_gab);
    
    // }

    btn.style.left  = this.#leftVal +"px";
    console.log(btn.style.left);
  }
  stop(e:any):void{

    document.onmouseup = null;
   
    document.onmousemove = null;

  }

}

