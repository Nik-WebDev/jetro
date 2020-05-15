$(function () {
  $(".slider__inner").slick({
    nextArrow:
      ' <button class="slick-arrow slick-next"><img src="images/next.png" alt="arrow-next"></button>',
    prevArrow:
      ' <button class="slick-arrow slick-prev"><img src="images/previous.png" alt="arrow-prev"></button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });
  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 730,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 585,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 443,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      }
    ],
  });
  $(".header__burger").click(function (event) {
    $(".header__burger,.menu").toggleClass("active");
    $("body").toggleClass("lock")
  });
});
