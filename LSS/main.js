$(document).scroll(function() {
  console.log('scroll', $('body').scrollTop());
  var offsetY = $('body').scrollTop();
  stickyHeaderAnimate(offsetY)
  imgChange(offsetY);
});

function stickyHeaderAnimate(offset) {
  if (offset > 2000) {
    $('.stickyHeader').addClass('shown');
  } else {
    $('.stickyHeader').removeClass('shown');
  }
}

function imgChange(offset) {
  var $image = $('.stickyImage');

  $image.removeClass('hijabvector models unedited editing finalshot');

  if (offset > 2000 && offset < 4000) {
    $image.addClass('models');
  } else if (offset > 4000 && offset < 6000) {
    $image.addClass('unedited');
  } else if (offset > 6000  && offset < 8000) {
    $image.addClass('editing');
  } else if (offset > 8000) {
    $image.addClass('finalshot');
  } else {
    $image.addClass('hijabvector');
  }
}
