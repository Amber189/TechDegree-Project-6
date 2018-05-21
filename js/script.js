const video = document.getElementById("video");
const text = document.querySelectorAll('span');

$('video').mediaelementplayer({
  features:['playpause','progress','volume','fullscreen']
});



video.addEventListener('timeupdate', ()=> {
    for (let i=0; i <text.length; i++){
      if (video.currentTime >= text[i].dataset.start && video.currentTime <= text[i].dataset.end){
      text[i].style.backgroundColor = 'silver';
  } else {
    text[i].style.backgroundColor = 'white';
  }
 }
});


// video.ontimeupdate = () => {
//   console.log(video.currentTime);
// }
