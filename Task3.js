$(document).ready(function() {
    var display = $('#calc-display');

    $('button').on('click', function() {
      var buttonValue = $(this).text();
      var currentDisplay = display.val();

      if (buttonValue === '=') {
        display.val(eval(currentDisplay));
      } else if (buttonValue === 'C') {
        display.val('');
      } else {
        display.val(currentDisplay + buttonValue);
      }
    });
  });