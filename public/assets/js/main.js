$(document).ready(() => {
  console.log('ready');
  $(".main_box").mouseenter((event) => {
    let div = event.target;
    if ($(div).hasClass('main_box')) {
      $(div).attr('style', 'height: 200px;')
      let children = $(div).children();
      let hidden = children[1];
      $(hidden).attr('style', 'display: flex')
    }
  })
})
