setInterval(function () {
  $(".scroll-btn-right").trigger("click");
}, 2000);

if ($(window).width() <= 576) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 180,
  });
} else {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 400,
  });
}

if ($(window).width() <= 768) {
  $(".jcarousel-latest-news").imgScroll({
    btn01: ".scroll-btn-left-latest-news",
    btn02: ".scroll-btn-right-latest-news",
    step: 310,
  });
} else {
  $(".jcarousel-latest-news").imgScroll({
    btn01: ".scroll-btn-left-latest-news",
    btn02: ".scroll-btn-right-latest-news",
    step: 365,
  });
}
