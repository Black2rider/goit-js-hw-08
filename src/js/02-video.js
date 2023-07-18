import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
});

player.on('timeupdate', function(data) {
  try {
    let local = localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));  
    local_.throttle(updatePosition, 100)
  } catch(error) {
    console.log(error.name);
  }
});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
});