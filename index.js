// When the password box is focused or blurred, lift / reset the login box
$("#password")
  .focusin(function () {
    // Password field selected
    $(".login-box").addClass("up");
  })
  .focusout(function () {
    // Password field deselected
    $(".login-box").removeClass("up");
  });

// Eye-ball movement based on mouse position
$(document).on("mousemove", function (e) {
  // Divide page width/height to reduce sensitivity
  let dw = $(document).width() / 10;
  let dh = $(document).height() / 18;
  // Calculate relative x/y
  let x = e.pageX / dw;
  let y = e.pageY / dh;
  // Apply new position
  $(".eye-ball").css({
    left: x,
    top: y,
  });
});
