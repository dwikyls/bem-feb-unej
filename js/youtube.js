$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC28h1S_kId35V6n0wR749yLrndF0yZyXM&part=snippet&channelId=UC22Cj9PBlfylKMgtubob9Yw&order=date&maxResults=1', (result) =>{
  let video = result.items[0].id.videoId;

  $('#embvideo').append(`
    <iframe width="345px" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)
})