$(document).ready(function() {
    $('#my-form').submit(function(event) {
      event.preventDefault(); // prevent form from submitting
      var lang = $("html").attr("lang");
      // perform validation on input fields
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var message = $('#message').val();

      // if validation passes, submit the form
      var formData = {
        name: name,
        phone: phone,
        email: email,
        message: message
      };

      $.ajax({
        url: "https://formspree.io/f/xqkowagz",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function(response) {
          // display success message
          if (lang === "en") {
          $('#success').html("<div class='alert alert-success' data-lang='en'>Thank you for your message!</div>");
          } else if (lang === "ko") {
          $('#success').html("<div class='alert alert-success' data-lang='ko'>문의사항이 접수되었습니다.</div>");
          }
          $('#my-form').trigger("reset"); // clear form inputs
        },
        error: function(response) {
          // display error message
          if (lang === "ko") {
          $('#success').html("<div class='alert alert-danger' data-lang='ko'>문의 사항을 전달하지 못했습니다. 잠시 후 다시 시도해주세요.</div>");
          } else if (lang === "en") {
          $('#success').html("<div class='alert alert-danger' data-lang='en'>There was an error sending your message. Please try again later.</div>");
          }
          $('#my-form').trigger("reset"); // clear form inputs
        }
      });
    });
});
