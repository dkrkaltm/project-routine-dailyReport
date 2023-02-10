//버튼 -> stop -> 정지 부르기, start -> 시작 부르기

const NavEvent = new class{

    
  #Button = document.querySelector("#media-player-button") as HTMLElement;
  #ButtonLabel = document.querySelector('#media-player-buttonL') as HTMLElement;

  #Source = document.querySelector("#media-player-source") as HTMLElement;

  #Volume = document.querySelector("#media-player-volume") as HTMLElement;
  #SeekBar = document.querySelector("#seekBar") as HTMLElement;

  constructor(){
  
<<<<<<< HEAD
    this.#Button.onclick = ():void => {
      
        this.#ButtonLabel.innerText = NavFCT.player(this.#ButtonLabel.innerText);

    }
    this.#Source.onclick = ():void => {

      // window.location.href = CurrentWeather.getSourceData();
      window.open(CurrentWeather.getSourceData());
   
    }
    this.#Volume.onclick = (e:any):void =>{

         NavFCT.seekBarShow(e.target,this.#SeekBar);
    }      
  }

=======
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

           NavFCT.seekBarShow(e.target,this.#SeekBar);
      }      
    }
  
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906
}
/////////////////////////////////////////////
const NavFCT = new class{


constructor(){}

<<<<<<< HEAD
player(text:string): string{
  
  if(text === 'STOP'){
=======
  player(text:string): string{
    
    if(text === 'STOP'){
          
        MediaPlayer.stopVideo();
          
          return 'START';
          
    }else if( text === 'START'){
      
        // player.playVideo();
        MediaPlayer.setLoadVideo(CurrentWeather.getMediaData(),30,'default');
       
        return 'STOP'

    }else{
      console.error('error');
    }

  }
  seekBarShow(target:any,bar: Element):void{

    if(bar.classList.contains('hidden')){ 
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906
        
      MediaPlayer.stopVideo();
        
        return 'START';
        
  }else if( text === 'START'){
    
      // player.playVideo();
      MediaPlayer.setLoadVideo(CurrentWeather.getMediaData(),30,'default');
     
      return 'STOP'

  }else{
    console.error('error');
  }
  return '0';
}
seekBarShow(target:any,bar: Element):void{

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

/////////////////////////////////////////////
const seekBarFCT = new class{

<<<<<<< HEAD
#SeekbarBox = document.querySelector('#seekBar-box') as HTMLElement;

#SeekbarBTN = document.querySelector('#seekBar-box-btn') as HTMLElement;
#SeekbarColor = document.querySelector('#seekBar-box-color') as HTMLElement;
#SeekbarNumber = document.querySelector('#seekBar-box-number') as HTMLElement;

#BoxRect:DOMRect;
=======
  #SeekbarBox = document.querySelector('#seekBar-box') as HTMLElement;
  
  #SeekbarBTN = document.querySelector('#seekBar-box-btn') as HTMLElement;
  #SeekbarColor = document.querySelector('#seekBar-box-color') as HTMLElement;
  #SeekbarNumber = document.querySelector('#seekBar-box-number') as HTMLElement;
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

  #BoxRect:  DOMRect;

#beforeX: number = 0;
#clientX_gab: number = 0;
#leftVal: number = 0;
#checkValue: number = 0;
#percentValue: number = 0;

<<<<<<< HEAD
constructor(){
=======
  #beforeX: number = 0;
  #clientX_gab: number = 0;
  #leftVal: number = 0;
  #checkValue: number = 0;
  #percentValue: number = 0;
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

  this.#SeekbarBTN.onmousedown = (e: MouseEvent):void =>{
    e.preventDefault();
 
      this.#beforeX = e.clientX;

<<<<<<< HEAD
      document.onmousemove = (e:MouseEvent):void => {
        
        e.preventDefault();
        
        seekBarFCT.move(e,this.#SeekbarBox,this.#SeekbarBTN, this.#SeekbarColor, this.#SeekbarNumber);
      
      }
      document.onmouseup = (e:MouseEvent):void => {
        
        e.preventDefault();
        
        seekBarFCT.stop(e);

      }
  }
  
}
move(e:MouseEvent, box: HTMLElement, btn: HTMLElement, color: HTMLElement, number: HTMLElement):void{
  
 
  this.#BoxRect = box.getBoundingClientRect();

  this.#leftVal = e.pageX - this.#BoxRect.left;
=======
    this.#SeekbarBTN.onmousedown = (e: MouseEvent):void =>{
      e.preventDefault();
   
        this.#beforeX = e.clientX;

        document.onmousemove = (e:MouseEvent):void => {
          
          e.preventDefault();
          
          seekBarFCT.move(e,this.#SeekbarBox,this.#SeekbarBTN, this.#SeekbarColor, this.#SeekbarNumber);
        
        }
        document.onmouseup = (e:MouseEvent):void => {
          
          e.preventDefault();
          
          seekBarFCT.stop(e);

        }
    }
    
  }
  move(e:MouseEvent, box: HTMLElement, btn: HTMLElement, color: HTMLElement, number: HTMLElement):void{
    
   
    this.#BoxRect = box.getBoundingClientRect();

    this.#leftVal = e.pageX - this.#BoxRect.left;

    if(this.#leftVal > this.#BoxRect.width) this.#leftVal = this.#BoxRect.width;
    
    if( this.#leftVal < 0) this.#leftVal = 0;

    btn.style.left = this.#leftVal-10 + 'px';

    this.#percentValue = this.#leftVal / this.#BoxRect.width * 100;

    color.style.width = this.#percentValue + "%";

    number.style.left =  btn.style.left ;

    number.style.opacity = '1';

    number.textContent = Math.floor(this.#percentValue) + '%';

    MediaPlayer.sound(this.#percentValue);


  }
  stop(e:any):void{
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

  if(this.#leftVal > this.#BoxRect.width) this.#leftVal = this.#BoxRect.width;
  
  if( this.#leftVal < 0) this.#leftVal = 0;

  btn.style.left = this.#leftVal-10 + 'px';

  this.#percentValue = this.#leftVal / this.#BoxRect.width * 100;

  color.style.width = this.#percentValue + "%";

  number.style.left =  btn.style.left ;

  number.style.opacity = '1';

  number.textContent = Math.floor(this.#percentValue) + '%';

  MediaPlayer.sound(this.#percentValue);


}
stop(e:any):void{

  document.onmouseup = null;
 
  document.onmousemove = null;

}
}