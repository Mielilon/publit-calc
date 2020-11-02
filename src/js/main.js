//= jquery.min.js
//код для слайдера калькулятора
let stepArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ]
  
  let j = 1
  
  $('.calculator_pre').click(function() {
      if(j === 1) {
        return
      } else {
        j = j - 1
        $(".calculator").attr("data-step-number", stepArray[j])
        $('.calculator-wrapper').removeClass('calculator-wrapper_active')
        $(`.calculator-wrapper[data-step-content="${j}"]`).addClass('calculator-wrapper_active')
        $('.calculator__number').text('Шаг ' + stepArray[j] + '/7')
      }
   })
  
   $('.calculator_next').click(function() {
    if(j + 1 >= stepArray.length) {
      return
    } else {
      j = j + 1
      $(".calculator").attr("data-step-number", stepArray[j])
      $('.calculator-wrapper').removeClass('calculator-wrapper_active')
      $(`.calculator-wrapper[data-step-content="${j}"]`).addClass('calculator-wrapper_active')
      $('.calculator__number').text('Шаг ' + stepArray[j] + '/7')
    }
   })
  
   //убирает выделение с радио-кнопки
  $( "#pages" ).focus(function() {
    $('input[name="colour"]').prop('checked', false);
  });
    
  $( "#pages-in-a-block" ).focus(function() {
    $('input[name="colored-pages-in-a-block"]').prop('checked', false);
  });
  
  $( "#height" ).focus(function() {
    $('#customizable').prop('checked', true);
  });
  $( "#width" ).focus(function() {
    $('#customizable').prop('checked', true);
  });
  

//код для калькулятора
$(".order-details__inputs-wrapper").change(function () {
    $(".order-details__form-wrapper").addClass("active");
  });
  
  $("#order-details-tel").change(function () {
    $("#order-tel").css("display", "block");
    $("#order-mail").css("display", "none");
    $("#order-whatsapp").css("display", "none");
  });
  
  $("#order-details-mail").change(function () {
    $("#order-tel").css("display", "none");
    $("#order-mail").css("display", "block");
    $("#order-whatsapp").css("display", "none");
  });
  
  $("#order-details-whatsapp").change(function () {
    $("#order-tel").css("display", "none");
    $("#order-mail").css("display", "none");
    $("#order-whatsapp").css("display", "block");
  });

//стили после отправки формы
$(".calculator-page__form").submit(function (e) {
    const form = $(this);
    $(".calculator-page__order-details.order-details").css("display", "none");
    $(".after-sending").css("display", "block");
    $(".calculator__order-title").css("display", "none");
    $(".calculator__step").css("display", "none");
    $(".hr").addClass("hr_none");
    e.preventDefault();
  });