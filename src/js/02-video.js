import Player from '@vimeo/player';

// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var _ = require('lodash.throttle');

player.on(
  'timeupdate',
  _(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

// localStorage.setItem('videoplayer-current-time', playTime);
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
