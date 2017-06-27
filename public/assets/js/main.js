$(document).ready(() => {
  console.log('ready');

  $(".box_text").click(function() {
    let box = $(this).parents()[0];
    let hidden = $(this).next()[0];
    $(box).attr('style', 'height: 200px');
    $(hidden).attr('style', 'visibility: visible; opacity: 1;');
  })

  $(".project_img").click(function() {
    let img = $(this);
    let project_text = $(img).next()[0];
    $(project_text).attr('style', 'visibility: visible; opacity: 1;');
    $(img).attr('style', 'opacity: 0.2');
  })


})
