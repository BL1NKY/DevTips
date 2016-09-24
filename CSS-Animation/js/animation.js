$("html").on("click", function () {
  $(this).find("body").append('<div class="box">ALARM</div>');
  console.log("box added");
});
$(".box").on("click", function () {
  $(this).addClass("is-hidden");
});
