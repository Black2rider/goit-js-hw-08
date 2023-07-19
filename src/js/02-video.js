import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
});

const play = function(data) {
  try {
    localStorage.setItem("videoplayer-current-time", data.seconds);  
  } catch(error) {
    console.log(error.name);
  }
};

player.on('timeupdate', throttle(play, 1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
});