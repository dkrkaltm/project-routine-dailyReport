
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


 var player;
 function onYouTubeIframeAPIReady() {
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
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange,
       'onError':onError
     }
   });
 }



let done = false;
let Background;
 function onPlayerReady(event) {
    
    Background = document.querySelector('#player');
    event.target.setSize(1950,1500);
    //  event.target.loadVideoById('av',30,'default');
    //  event.target.setVolume(0);

   
    event.target.loadVideoById(CurrentWeather.getMediaData(),30,'default');

    // if('YouTube video player' === Background.title){
      
    //   return onError();

    // }
    
    // CurrentWeather.getMediaData()
    event.target.playVideo();
    //  document.querySelector("#media-player i").className = "fas fa-solid fa-play-pause";
   ;
   }

   
  function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING && !done) {
       done = true;
     
      }
      console.log(event,YT.PlayerState,done);
   }
   
  function stopVideo() {
   
     player.stopVideo();
   
     
   
    }
  function onError(err){

    //요청 오류 
    Background.src = `/image/${CurrentWeather.getPhotoData()}`;

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
 



