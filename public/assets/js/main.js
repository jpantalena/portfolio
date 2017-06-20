$(document).ready(() => {
  console.log('ready');
  // $(".main_box").mouseenter((event) => {
  //   let div = event.target;
  //   if ($(div).hasClass('main_box')) {
  //     $(div).attr('style', 'height: 200px;')
  //     let children = $(div).children();
  //     let hidden = children[1];
  //     $(hidden).attr('style', 'display: flex')
  //   }
  // })
  $(".box_text").click(function() {
    let box = $(this).parents()[0];
    let hidden = $(this).next()[0];
    console.log(hidden);
    $(box).attr('style', 'height: 200px');
    $(hidden).attr('style', 'visibility: visible; opacity: 1;');
    // $(this).attr('style', 'color:red')
  })
})
