$(document).ready(() => {
  console.log('ready');
  $(".main_box").mouseenter((event) => {
    let div = event.target;
    let classNames = $(div).attr('class');
    if (classNames !== 'box_text') {
      $(event.target).attr('style', 'height: 200px; padding-top: 0.75rem; align-items: flex-start;')
    }
  })
  // $(".main_box").mouseleave((event) => {
  //   $(event.target).attr('style', 'height: 250px')
  // })
})
