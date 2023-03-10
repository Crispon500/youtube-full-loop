// Load the YouTube iframe API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a player object
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '7nnmvuC4NLc',
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'loop': 1,
      'mute': 1
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