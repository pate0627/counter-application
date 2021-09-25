$(document).ready(function () {
  var counter = 0;

  $("#increment").click(function () {
    counter++;
    $(".count").html(counter);
  });

  $("#decrement").click(function () {
    counter--;
    $(".count").html(counter);
  });
});
