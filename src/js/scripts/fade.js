const animItems = $('.anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageXOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('anim-active');
      } else {
        if (!animItem.classList.contains('anim-nohide')) {
          animItem.classList.remove('anim-active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  setTimeout(() => {
    animOnScroll();

  }, 300);
}




$(document).ready(function () {
  $('.fade-in').each(function (i) {
    var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_element) {

      setTimeout(() => {
        $(this).animate({
          'opacity': '1',
        }, 300);
      }, 300);
    }
  });

  $(window).scroll(function () {
    $('.fade-in').each(function (i) {


      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {

        setTimeout(() => {
          $(this).animate({
            'opacity': '1'
          }, 300);
        }, 300);
      }

    });
  });
});