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

$(".jcarousel-latest-news").imgScroll({
  btn01: ".scroll-btn-left-latest-news",
  btn02: ".scroll-btn-right-latest-news",
  step: 370,
});
