const video = document.getElementById("video");
const text = document.querySelectorAll('span');


//Adds video button features
$('video').mediaelementplayer({
  features:['playpause','current','progress','volume','fullscreen']
});


// cycle through text and hi-light in-time with video
video.addEventListener('timeupdate', ()=> {
    for (let i=0; i <text.length; i++){
      if (video.currentTime >= text[i].dataset.start && video.currentTime <= text[i].dataset.end){
      text[i].style.color = 'orange';
  } else {
    text[i].style.color = 'black';
  }
 }
});

// if text is "clicked" jump video to that time

//   for (let i = 0; i < text.length; i++){
//     text[i].addEventListener('click', ()=> {
//
//   });
// }
