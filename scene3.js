console.log('run scene 2');

var door2 = false;
var key5 = false;
var key5inv = false;
var template = "";
var w = true;
var progress = 0;
var proString;
var doorClick = false;


var collect = function (item) {
  $('#message').html('The ' + item + ' has been moved to your inventory. <br/> <span> </span>');
};
var message = function (text) {
  console.log('message start');
  $('footer').find('#message').html(text + '<br/> <span> </span>');
  console.log('message end');
};

/** RUN ON DOCUMENT READY **/
$(document).ready(function() {


  var collectSingular = function (item) {
    $('footer').find('#message').html('The ' + item + ' has been moved to your inventory.<br/> <span> </span>');
  };
  var collectPlural = function (item) {
    $('footer').find('#message').html('The " + item + " have been moved to your inventory.<br/> <span> </span>');
  };

  ///////////////////////////////////////////////////////////////
  /**  DOOR EVENTS **/
  $('.container').on('click', '#door', function(event) {
    event.preventDefault();
    console.log('door attempt');
    // RUN  IF KEY5 IN INV
    if (key5inv && !doorClick) {

      //Allows hyperlink to engage on below condition
      doorClick = true;
      $('#lockdown').fadeIn(800);
      message("Calvin: You won't escape so easily! Mwahaha!");
      console.log("key5inv: " + key5);

      progress++;
      proString = progress.toString();
      console.log(proString);
      $(this).closest('.container').siblings('footer').children('.bottomWrap').find('progress').val(proString);
      console.log('change progress bar');
    }
    //Run if key 5 is in inv and door has been clicked once.
    else if (key5inv && doorClick) {
      console.log('move to scene three');
      window.location.href = 'scene4.html';
    }
    // IF NO KEYS IN INV
    else {
      message("So close to victory, but the door is locked.");
      console.log("key4inv: " + key4 + ", key5inv: " + key5);
    }
  });
  //DBL CLICK DOES NOTHING
  $('.container').on('dblclick', '#door', function(event) {
    event.preventDefault();
    message("Nope....still locked.");
    console.log('door dbl click end');
  });

  /////KEY5
  $('.container').on('click', '#key5', function(event) {
    console.log('key5 start');
    key5 = true;
    $(this).css('display', 'none');
    collectSingular('key');

    template = "<div class=\"keys\"><img src=\"images/key5.png\" alt=\"picture of key five\"></div>";
    $(this).closest('.container').siblings('footer').find('#inv').append(template);
    key5inv = true;
    console.log('template placed');
    console.log('end key5 event');
    //Increment progress by one
    progress++;
    proString = progress.toString();
    console.log(proString);
    $(this).closest('.container').siblings('footer').children('.bottomWrap').find('progress').val(proString);
    console.log('change progress bar');

  });

  $(".container").on("click","#fan",function(event){
    console.log('clicked fan')
    $("#fan").css('background-image','url(images/fanon.gif)');
    $('#key5').fadeIn();
    message("You turn on the fan. A key fell on the floor.");

  })


  Tick();
});
