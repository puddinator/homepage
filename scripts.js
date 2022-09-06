window.scrollTo({
  top: document.body.scrollHeight,
  behavior: 'smooth'
});

/* Popup */
$(window).load(function () {
  $(".trigger_popup_fricc").click(function(){
     $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
});

/* Contact Form */
function validateForm() {
  document.getElementById('status').innerHTML = "Sending...";
  formData = {
  'name'     : $('input[name=name]').val(),
  'email'    : $('input[name=email]').val(),
  'subject'  : $('input[name=subject]').val(),
  'message'  : $('textarea[name=message]').val()
  };
  
  
  $.ajax({
  url : "mail.php",
  type: "POST",
  data : formData,
  success: function(data, textStatus, jqXHR)
  {
  
  $('#status').text(data.message);
  if (data.code) //If mail was sent successfully, reset the form.
  $('#contact-form').closest('form').find("input[type=text], textarea").val("");
  },
  error: function (jqXHR, textStatus, errorThrown)
  {
  $('#status').text(jqXHR);
  }
  });
}