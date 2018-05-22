//Adds video button features
$('video').mediaelementplayer({
  features:['playpause','current','progress','volume','fullscreen']
});


var video = document.getElementById("video");
var text = document.querySelectorAll('span');


// cycle through text and hi-light in-time with video
video.addEventListener('timeupdate', () => {
    for (let i=0; i <text.length; i++){

      if (video.currentTime >= text[i].getAttribute("data-start") && video.currentTime <= text[i].getAttribute("data-end")){
      text[i].style.color = 'orange';
  } else {
    text[i].style.color = 'black';
  }
 }
});

// if text is "clicked" jump video to that time

  for (let i = 0; i < text.length; i++){
    text[i].addEventListener('click', () => {
      let jump =  text[i].getAttribute('data-start');
         video.currentTime = jump;
  });
}

// document.addEventListener('click', (event) => {
//   console.log(event.target);
// });
