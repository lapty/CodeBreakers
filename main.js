//Brendan is coding here
console.log('run');


//functions to load when doc has fully loaded ///////////////////////////////
$(document).ready(function() {
  console.log('ready');
  /**  variables to be used later on**/
  var key1 = false;
  var key2 = false;
  var key3 = false;
  var collect = function (item) {
    $('#message').text("The " + item + " has been moved to your inventory.");
  };

/////////////////////////////////////////////////////////////////////////////
  /** Display content in the message div when DOOR is clicked **/
  $('.container').on('click', '#door', function(event) {
    event.preventDefault();
    // IF ALL KEYS IN INV
    if (key1 && key2 && key3) {
      $(this).closest('.container').find('#message').text("Phew! You made it. Let's move on");
      console.log("key1 " + key1 + ", key2 " + key2 + ", key3 " + key3);
    }
    // IF ONE OR MORE KEYS IN INV
    else if (key1 || key2 || key3) {
      $(this).closest('.container').find('#message').text("The door is only partially unlocked and will not open");
      console.log("key1 " + key1 + ", key2 " + key2 + ", key3 " + key3);
    }
    // IF NO KEYS IN INV
    else {
      $(this).closest('.container').find('#message').text("The door is locked.  Find a way to open it");
      console.log("key1 " + key1 + ", key2 " + key2 + ", key3 " + key3);
    }
  });
//Double clicking the door does nothing
  $('.container').on('dblclick', '#door', function(event) {
    event.preventDefault();
    $(this).closest('.container').find('#message').text("Pulling harder won't help.  Find another way.");
    console.log('door dbl click end');
  });

/////////////////////////////////////////////////////////////////////////////
  /** operaitons when keys are clicked **/

  /** KEY1 **/
  $('.container').on('click', '#key1', function(event) {
    console.log('key1 start');
    key1 = true;
    $(this).css('display', 'none');
    collect('key');

    var template = "<div class=\"keys\" id=\"key1\"><img src=\"images/key1.png\" alt=\"picture of key one\"></div>";
    console.log(template);
    $(this).closest('.container').find('#inv').append(template);
    console.log('template placed');

  });

  /** KEY2 **/
  $('.container').on('click', '#key2', function(event) {
    console.log('key2 start');
    key2 = true;
    $(this).css('display', 'none');
    collect('key');

    var template = "<div class=\"keys\" id=\"key2\"><img src=\"images/key2.png\" alt=\"picture of key two\"></div>";
    console.log(template);
    $(this).closest('.container').find('#inv').append(template);
    console.log('template placed');

  });

  /** KEY3 **/
  $('.container').on('click', '#key3', function(event) {
    console.log('key3 start');
    key3 = true;
    $(this).css('display', 'none');
    collect('key');

    var template = "<div class=\"keys\" id=\"key3\"><img src=\"images/key3.png\" alt=\"picture of key three\"></div>";
    console.log(template);
    $(this).closest('.container').find('#inv').append(template);
    console.log('template placed');

  });

/////////////////////////////////////////////////////////////////////////////

  /** Displaying hidden items **/
var k = 0;
var toilet = false;
var trash = false;
var plant = false;

var styles = {  // This is a list of styles for the pot upon further clicks
      transition: "0.5s",
      transform: "rotate(-90deg)",
      margin: "+=10px +0px +0px +0px"
    };
console.log("k is " +k);
  /** TOILET CLICK **/
  $('.container').on('click', '#toilet', function(event) {
    event.preventDefault();
    if (toilet === false) {
      console.log('Congrats, touched a digital toilet.');
      $(this).children('.key').fadeIn();
      toilet = true;
    }
    else if (toilet === true) {
      $(this).closest('.container').find('#message').text("The door is locked.  Find a way to open it");
      toilet = 3;
    }
    else {
      $(this).closest('.container').find('#message').text("Stop touching the toilet, thats weird.");
    }
  });

  /** TRASH CLICK **/
  $('.container').on('click', '#trash', function(event) {
    event.preventDefault();
    if (trash === false) {
      console.log('Sticky');
      $(this).children('.key').fadeIn();
      trash = true;
    }
    else { }
  });

  /** SHELF CLICK **/
  $('#shelf').on('click', '.plantBox', function(event) {
    event.preventDefault();
    k++;
    console.log('slide start');
    if (k === 1){
      $(this).siblings('.key3').fadeIn();
      $(this).animate({margin: "-28px 0 0 -=10%"}, '-200');
      console.log('display key3 and slide plant');
    }
    else if (k === 2) {
      $(this).animate({margin: "-28px 0 0 -=10%"}, '-200');
      console.log('slide complete');
    }
    else if (k === 3){
      $(this).children('img').css(styles);
      console.log('pot fell over');
    }
    else{}

  });

//END OF READY
});
