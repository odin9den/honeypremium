$(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      $(".order-thanks").addClass("active");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  /* 	Smoth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault(); /* отмена стандартного поведения */

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $(".side-menu").removeClass("active");
    $(".burger").removeClass("burger-active");
    $(".intro").removeClass("shadow");

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      700
    );
  });

  $(".order-btn").on("click", function () {
    $(".order-thanks").removeClass("active");
  });

  $("section").on("click", function () {
    $(".burger").removeClass("burger-active");
    $(".side-menu").removeClass("active");
    $(".intro").removeClass("shadow");
  });

  $("#navToggle").on("click", function () {
    $(".burger").toggleClass("burger-active");
    $(".side-menu").toggleClass("active");
    $(".intro").toggleClass("shadow");
  });

  $(".order-link").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});
