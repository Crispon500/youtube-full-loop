// Load the YouTube iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a player object
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'EColTNIbOko',
    playerVars: {
      'autoplay': 1,
      'showinfo': 0,
      'controls': 0,
      playlist: 'EColTNIbOko,E-lbpHIkaTo',
      'loop': 1,
      'mute': 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Optional event listeners
function onPlayerReady(event) {
  // Do something when the player is ready
}

function onPlayerStateChange(event) {
  // Do something when the player state changes
}