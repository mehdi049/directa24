if ($(window).width() > 1400) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 620,
  });
}

if ($(window).width() <= 1400 && $(window).width() > 1200) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 570,
  });
}
if ($(window).width() <= 1200 && $(window).width() > 992) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 470,
  });
}
if ($(window).width() <= 992 && $(window).width() > 768) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 355,
  });
}
if ($(window).width() <= 768 && $(window).width() > 576) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 355,
  });
}
if ($(window).width() <= 576) {
  $(".jcarousel").imgScroll({
    btn01: ".scroll-btn-left",
    btn02: ".scroll-btn-right",
    step: 310,
  });
}
