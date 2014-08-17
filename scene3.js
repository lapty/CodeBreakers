console.log('run scene 3');

/** VARIABLES **/
var code;

//////////////////////////////////////////////////////////////////////
/** RUN ON DOCUMENT READY **/
$(document).ready(function() {

  /** Events **/
  $('.container').on('click', '#lock', function (event) {
    event.preventDefault();
    console.log('click lock start');
    $(this).siblings('form').fadeIn();
  });

  $('.container').on('click', '#submit', function (event) {
    event.preventDefault();
    console.log('submit start');
    code = $(this).siblings('#enterNum').val().toString();
    console.log(code);
    if (code === '7257') {
      alert('You\'ve made it out alive, but without your dignity');
      console.log('move to win');
      console.log('back to level 1');
      window.location.href = 'http://coastalexpeditions.com/';
    }
    else {
      alert('Wrong');
      console.log('back to level 1');
      window.location.href = 'index.html';
    }
  });

});
