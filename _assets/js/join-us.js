$(function () {
  $("#submit-step1").click(function () {
    $("#form-step1").addClass("d-none");
    $("#form-step2").removeClass("d-none");

    $("#step-form-img1-active").addClass("d-none");
    $("#step-form-img1-inactive").removeClass("d-none");

    $("#step-form-img2-active").removeClass("d-none");
    $("#step-form-img2-inactive").addClass("d-none");

    $("#step1-status").removeClass("step-active");
    $("#step1-status").addClass("step-inactive");
    $("#step2-status").removeClass("step-inactive");
    $("#step2-status").addClass("step-active");

    $("#step1-title").addClass("gray");
    $("#step2-title").removeClass("gray");
  });

  $("#submit-step2").click(function () {
    $("#form-step2").addClass("d-none");
    $("#form-step3").removeClass("d-none");

    $("#step-form-img2-active").addClass("d-none");
    $("#step-form-img2-inactive").removeClass("d-none");

    $("#step-form-img3-active").removeClass("d-none");
    $("#step-form-img3-inactive").addClass("d-none");

    $("#step2-status").removeClass("step-active");
    $("#step2-status").addClass("step-inactive");
    $("#step3-status").removeClass("step-inactive");
    $("#step3-status").addClass("step-active");

    $("#step2-title").addClass("gray");
    $("#step3-title").removeClass("gray");
  });

  $("#back-step2").click(function () {
    $("#form-step1").removeClass("d-none");
    $("#form-step2").addClass("d-none");

    $("#step-form-img1-active").removeClass("d-none");
    $("#step-form-img1-inactive").addClass("d-none");

    $("#step-form-img2-active").addClass("d-none");
    $("#step-form-img2-inactive").removeClass("d-none");

    $("#step1-status").addClass("step-active");
    $("#step1-status").removeClass("step-inactive");
    $("#step2-status").addClass("step-inactive");
    $("#step2-status").removeClass("step-active");

    $("#step1-title").removeClass("gray");
    $("#step2-title").addClass("gray");
  });

  $("#submit-step3").click(function () {});
});
