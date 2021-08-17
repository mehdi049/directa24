$(function () {
  /** open /close menu */
  $(".navbar-toggler").click(function () {
    let expended = $(this).attr("aria-expanded");
    $(this).attr("aria-expanded", "" + expended === "false");
    $("#navbar-content").toggle(500);
  });

  $(".navbar-nav .nav-item").click(function () {
    $(".navbar-toggler").attr("aria-expanded", "false");
    $("#navbar-content").hide(500);
  });

  /** smooth scroll */
  $('a[href*="#"]').click(function (event) {
    var target = $(this).attr("href");
    var target = target.replace(/#/g, "");

    target = $("[id=" + target + "]");

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 130,
        },
        100,
        function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr("tabindex", "-1");
            $target.focus();
          }
        }
      );
    }
  });
});
