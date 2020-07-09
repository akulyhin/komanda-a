$(document).ready(function(){
    $('.slider').slick({
  centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: false,
    cssEase: 'ease',
    infinite: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button class="arrow prev-arrow"><svg><use href="/images/icons/arrows-sprite.svg#icon-back"></use></svg></button>',
    nextArrow: '<button class="arrow next-arrow"><svg><use href="/images/icons/arrows-sprite.svg#icon-next"></use></svg></button>',
    });



    $('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
});
});