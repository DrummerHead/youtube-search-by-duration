(function(window, document){
  'use strict';

  var videos = window.videos;

  var pad = function(num){
    return num < 10 ? '0' + num : num;
  };

  var stringToHue = function(string){
    return string.split('')
      .map((letter) => letter.charCodeAt())
      .reduce((prev, curr) => prev + curr) % 360;
  };

  var durationToString = function(duration){
    var hours = duration.hours > 0 ? `${duration.hours}:` : '';
    return `${hours}${pad(duration.minutes)}:${pad(duration.seconds)}`;
  };

  var videosHtml = videos.map((video) => {
    return `
    <li class='video'>
      <a class='video-thumb' href='https://www.youtube.com/watch?v=${video.id}'>
        <img src='http://img.youtube.com/vi/${video.id}/hqdefault.jpg' alt='${video.title}'>
        <ul class='metadata'>
          <li class='duration'>${durationToString(video.duration)}</li>
          <li class='views'>${video.views.toLocaleString()} views</li>
          <li class='keyword' style='background-color: hsla(${stringToHue(video.keyword)}, 100%, 50%, .5)'>${video.keyword}</li>
        </ul>
      </a>
      <h2 class='title'>
        <a href='https://www.youtube.com/watch?v=${video.id}'>
          ${video.title}
        </a>
      </h2>
    </li>
    `;
  }).reduce((prev, curr) => prev + curr);

  document.getElementById('videos').insertAdjacentHTML('beforeend', videosHtml);

})(window, document);
