(function ($) {
  $(function () {

    var doctor;
    $('[data-doctor="cassagne"]').click(function(){ doctor = 1 });
    $('[data-doctor="morozova"]').click(function(){ doctor = 2 });

    // Отправка формы
    $('.call-back-form').submit(function (e) {
      e.preventDefault();
      var m_method = $(this).attr('method');
      var m_action = $(this).attr('action');
      var m_data = $(this).serialize();

      if(doctor !== undefined || doctor !== ""){
        m_data += '&doctor=' + doctor;
      }
      
      $.ajax({
        type: m_method,
        url: m_action,
        data: m_data,
        success: function (result) {
          $('.call-back-form, .modal-title').css("display", "none");
          $('.form-result').css("display", "block");
        }
      });
    });
  });
})(jQuery);