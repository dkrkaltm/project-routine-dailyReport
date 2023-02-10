

<<<<<<< HEAD
(async function(){

  await CurrentWeather.setData();
  
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
}());

=======
>>>>>>> 962b350d15ee4f7e715df1d49dfc253c23e25906

 function onYouTubeIframeAPIReady() {

  let player;
  
  player = new YT.Player('player', {
     height: '100%',
     width: '100%',
     playerVars:{
      'autoplay': 1, // 자동재생여부
      'controls': 1, // 컨트롤 여부 
      'fs':0, // 전체화면 false= 0 true=1
      'loop':1, // 첫 번째 영상 반복재생
      'playsinline':1, // 전체화면 여부 -> 안 됌
      'rel':0, // 관련동영상 표시할지 여부
      // 'playlist':`Km71Rr9K-Bw,v7bnOxV4jAc,Ccz123Jlflc`, // loop 사용하기 위해서 같이 사용해야함
      'mute':true,
      'enablejsapi':1,
      'origin':'a',
      
   },
  
     events: {
       'onReady': (e) => {
        MediaPlayer.onPlayerReady(e);
       },
       'onStateChange':(e) =>{
        MediaPlayer.onPlayerStateChange(e);
       },
       'onError':() =>{
        MediaPlayer.onError();
       }
     }
   });
 }

const MediaPlayer = new class{

  
  #done = false;
  #Background;
  #player;

  constructor(){}

  onPlayerReady(event) {

    this.#player = event.target;

    this.#Background = document.querySelector('#player');
    
    this.#player.setSize(1950,1500);
    //  event.target.loadVideoById('av',30,'default');
    //  event.target.setVolume(0);

  //  CurrentWeather.getMediaData()
    this.#player.loadVideoById(CurrentWeather.getMediaData(),30,'default');

    // if('YouTube video player' === Background.title){
      
    //   return onError();

    // }
    
    // CurrentWeather.getMediaData()
    this.#player.playVideo();
    //  document.querySelector("#media-player i").className = "fas fa-solid fa-play-pause";
   }

  onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING && !this.#done) {
        this.#done = true;
     
      }
   }
  onError(err){

    //요청 오류 
   this.#Background.src = `/image/${CurrentWeather.getPhotoData()}`;

  }
 stopVideo() {
   
  this.#player.stopVideo();
  
  }
 setLoadVideo(media,second, type){

  this.#player.loadVideoById(media,second,type);

}
sound(v){

  this.#player.isMuted() ? this.#player.unMute(): '';

  this.#player.setVolume(v);


}
  
}






 


  




//  function onPlayerReady(event) {
 
//   event.target.setSize(1950,1500);
//    event.target.loadVideoById( CurrentWeather.getMediaData(),30,'default');
//   //  event.target.setVolume(0);
//   event.target.playVideo();
//   event.target.unMute();
//   // CurrentWeather.getMediaData()
 
//   //  document.querySelector("#media-player i").className = "fas fa-solid fa-play-pause";

//  }
 



