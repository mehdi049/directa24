if ($(window).width() <= 768) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 450,
  });
}
if ($(window).width() <= 576) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 450,
  });
} else {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 600,
  });
}
