$(function () {
  "use strict";

  // init the validator
  $("#ajax-contact").validator();

  // when the form is submitted
  $("#ajax-contact").on("submit", function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "https://barbijosocial.org/api/send-mail";

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function () {
          // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = "alert-success";
          var messageText =
            "El mensaje fue enviado con éxito. Nos contactaremos a la brevedad.";

          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          // inject the alert to .messages div in our form
          $("#ajax-contact").find(".messages").html(alertBox);
          // empty the form
          $("#ajax-contact")[0].reset();
        },
        error: function () {
          // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = "alert-danger";
          var messageText =
            "Hubo un error enviando el mensaje. Intentalo más tarde o comunicate a barbijosocial@gmail.com";

          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          // inject the alert to .messages div in our form
          $("#ajax-contact").find(".messages").html(alertBox);
          // empty the form
          $("#ajax-contact")[0].reset();
        },
      });
      return false;
    }
  });
});
