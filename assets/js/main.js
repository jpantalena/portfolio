$(document).ready(() => {
  console.log('ready');

  setTimeout(function () {
    $('.top_info')
    .transition({
      animation : 'slide right',
      duration  : 800,
      interval  : 300
    })
    ;
  }, 500)
  $('.menuIcon').click(() => {
    $('.sidebar')
      .sidebar('toggle')
    ;
  })
})
