var videos = window.videos;

var pad = function(num){
  return num < 10 ? '0' + num : num;
}

var durationToString = function(duration){
  var hours = duration.hours > 0 ? `${duration.hours}:` : '';
  return `${hours}${pad(duration.minutes)}:${pad(duration.seconds)}`;
}

var videosHtml = videos.map((video) => {
  console.log(video.views)
  return `
  <li>
    <a href='https://www.youtube.com/watch?v=${video.id}'>
      <img src='http://img.youtube.com/vi/${video.id}/hqdefault.jpg' alt='${video.title}'>
      <h2>${video.title}</h2>
      <ul classs='metadata'>
        <li>${durationToString(video.duration)}</li>
        <li>${video.views} views</li>
        <li>${video.keyword}</li>
      </ul>
      <strong>${video.views}</strong>
    </a>
  </li>
  `
}).reduce((prev, curr) => prev + curr);
console.log(videosHtml)

document.getElementById('videos').insertAdjacentHTML('beforeend', videosHtml);
