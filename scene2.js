console.log('run scene 2');

var door2 = false;
var lockers = false;
var fireplace = false;
var snips = false;
var snipsIs = 'unfed';
var key4 = false;
var key4inv = false;
var key5 = false;
var key5inv = false;
var bowl = false;
var template = "";
var w = true;
var progress = 0;
var proString;
var doorClick = false;
var lights = 'on';

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

  //////////////////////////////////////////////////////////////////
  /** VARIABLES TO USE, OR NOT TO USE **/
  // var door2 = false;
  // var lockers = false;
  // var fireplace = false;
  // var snips = false;
  // var snipsIs = 'unfed';
  // var key4 = false;
  // var key4inv = false;
  // var key5 = false;
  // var key5inv = false;
  // var bowl = false;
  // var template = "";
  // var w = true;

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
      $('.door').addClass("doorOpen");
      $('.door').removeClass("door");
      message("You're out, thank goodness.  That was getting strange.");
      console.log("key4inv: " + key4 + ", key5inv: " + key5);

      progress++;
      proString = progress.toString();
      console.log(proString);
      $(this).closest('.container').siblings('footer').children('.bottomWrap').find('progress').val(proString);
      console.log('change progress bar');
    }
    //Run if key 5 is in inv and door has been clicked once.
    else if (key5inv && doorClick) {
      console.log('move to scene three');
      window.location.href = 'scene3.html';
    }
    // IF KEY4 (the wrong key) IS IN INVENTORY BUT NOT KEY5
    else if (key4inv) {
      message("The key doesn't fit.");
      console.log("key4inv: " + key4 + ", key5inv: " + key5);
    }
    // IF NO KEYS IN INV
    else {
      message("The door is locked.  Find a way to open it");
      console.log("key4inv: " + key4 + ", key5inv: " + key5);
    }
  });
  //Double clicking the door does nothing
  $('.container').on('dblclick', '#door', function(event) {
    event.preventDefault();
    message("Nice try, but no.");
    console.log('door dbl click end');
  });

  ///////////////////////////////////////////////////////////////
  /**  KEYS EVENTS **/

  /** KEY4 **/
  //Don't need this, snips is giving you the key
  // $('.container').on('click', '#key4', function(event) {
  //   console.log('key4 start');
  //   key4 = true;
  //   $(this).css('display', 'none');
  //   collectSingular('key');
  //
  //   template = "<div class=\"keys\" id=\"key4\"><img src=\"images/key4\" alt=\"picture of key four\"></div>";
  //   $(this).closest('.container').siblings('footer').find('#inv').append(template);
  //   console.log('template placed');
  //   key4inv = true;
  //   console.log('end key4 event');
  // });

  /** KEY5 **/
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

  ///////////////////////////////////////////////////////////////
  /**  RANDOM ITEMS EVENTS **/


  /** FIREPLACE FIREOFF **/
  //single click does effectively nothing
  $('.container').find('#wall').on('click', '#fireOff', function(event) {
    event.preventDefault();
    console.log('single fireplace start');
    // IF FIREPLACE NOT LIT
    if (fireplace === false) {
      console.log('false single fireplace start');
      message("Embers are burning, apply more force");
      console.log('single click, fireplace: ' + fireplace);
      console.log('false fireplace end');
    }
    else {}
  });
  //dbl click lights fire to make room warm
  $('.container').find('#wall').on('dblclick', '#fireOff', function(event) {
    event.preventDefault();
    console.log('double fireplace start');
    // IF FIREPLACE NOT LIT
    if (fireplace === false) {
      console.log('false dblclick fireplace start');
      fireplace = true;
      $(this).css("display","none");
      $(this).siblings('#fireOn').fadeIn();
      message("Jolly Ho! This room needed some warmth.");
      snips = true;
      $(this).closest('#wall').siblings('#floor').find('#asleep').css('display', 'none');
      $(this).closest('#wall').siblings('#floor').find('#awake').fadeIn();
      console.log('dblclick, fireplace: ' + fireplace);
      console.log('false to true fireplace, light fire end');
    }
    else {}
  });
  /** FIREPLACE FIREON,  this means dbl click has already occured on #fireOff **/
  //single click #fireOn
  $('.container').find('#wall').on('click', '#fireOn', function(event) {
    event.preventDefault();
    console.log('single lit start');
    // Fire is lit.  This should do nother.
    message("This is an open flame.  Back up bro.");
    console.log('single click, #fireOn fireplace: ' + fireplace);
    console.log('true single #fireOn fireplace end');
  });
  //dblclick fireOn
  $('.container').find('#wall').on('dblclick', '#fireOn', function(event) {
    event.preventDefault();
    console.log('double lit start');
    message("Only YOU can prevent forest fires.");
    console.log('dblclick, #fireOn fireplace: ' + fireplace);
    console.log('true double #fireOn fireplace end');
  });

  /** SNIPS EVENTS **/
  $('#floor').on('click', '.snips', function(event) {
    event.preventDefault();
    //Fire is not lit snips is too cold to move
    if(snips === false) {
      console.log('snips sleep start');
      message("GRRRRR -- translation -- CHECK YOURSELF FOOL, BACK AWAY FROM MY WARM MAT");
      console.log('snips sleep end');
    }
    //fire is lit but snips is hungry
    else if (snips === true && snipsIs === 'fed' && !key4inv) {
      console.log('snips fed then awake start');
      message("Woof *wag* bark! translation: It\'s warm, you fed me, here\'s a key!");
      key4 = true;
      template = "<div class=\"keys\" id=\"key4\"><img src=\"images/key4.png\" alt=\"picture of key one\"></div>";
      console.log('template made');
      $(this).closest('.container').siblings('footer').find('#inv').append(template);
      key4inv = true;
      console.log('snips awake unfed end');
      //Increment progress by one
      progress++;
      proString = progress.toString();
      console.log(proString);
      $(this).closest('.container').siblings('footer').children('.bottomWrap').find('progress').val(proString);
      console.log('change progress bar');
    }
    //fire is lit but snips is hungry
    else if (snips === true && snipsIs === 'unfed') {
      console.log('snips awake unfed start');
      message("Woof *wag* bark! -- translation -- I'm hungry.");
      console.log('snips awake unfed end');
    }
    //Snips is fed, collect key MAY NEED TO MOVE TO USE THIS IF SNIPS IS UP AND THEN IS FED
    // else if (snips === 'fed') {
    //   console.log('snips awake then fed collect key start');
    //   $(this).closest('.container').siblings('footer').find('#message').text("Snips had a key on his collor.  You added it to your inventory");
    //   key4 = true;
    //   var template = "<div class=\"keys\" id=\"key4\"><img src=\"images/key4\" alt=\"picture of key one\"></div>";
    //   console.log('template made');
    //   $(this).closest('.container').siblings('footer').find('#inv').append(template);
    //   console.log('snips awake then fed collect key end');
    // }
    else {}
  });

  /** BOWL EVENTS **/
  $('.container').children('#floor').on('click', '#bowl', function (event) {
    console.log('bowl events start');
    //If snips is asleep(false) this happens
    if(snips === false) {
      console.log('snips: ' + snips + ' snisIs ' + snipsIs);
      message('If you are in here long enough, this may look good');
      snipsIs = 'fed';
      console.log('mini-bowl end');
    }
    //If snips is awake(true) this happens
    else if (snips === true && snipsIs === 'unfed') {
      console.log('snips: ' + snips + ' snisIs ' + snipsIs);
      message('Good call.  What is that on Snips\' collar?');
      snipsIs = 'fed';
      console.log('mini-bowl end');
    }
    else {}
    console.log('bowl events end');
  });

  /** LOCKER EVENTS **/
  $('.container').children('#wall').on('click', '#lockers', function (event) {
    event.preventDefault();
    console.log('lockers start');
    //IF you do not have the key to the lockers (key4 = false)
    if (key4 === false) {
      console.log('key4: ' + key4 + ', key5: ' + key5);
      message('[LOCKED]');
      console.log('end mini-locker');
    }
    //If you have the keys to the lockers (key4 = true)
    else if(key4 && key4inv && w) {
      w = false;
      console.log('key4: ' + key4 + ', key5: ' + key5);
      message('Locker opened.  Better hurry, this is Ansley\'s locker');
      $(this).css('background\-image', 'url(\"images/final_open_locker_small.png\")');
      $(this).children('#key5').fadeIn();
      console.log('end mini-locker');
    }
    else {}
    console.log('lockers end');
  });

/////////////////////////////////////////////////////////////
/** RANDOM EVENTS **/

  /** DARKEN ROOM **/
  $('#wall').on('click', '.logo', function (event) {
    event.preventDefault();
    console.log('light off');
    //setting this condition to make fix problem with lights being double clicked while still on
    if (lights === 'on')
      {
      $(this).closest("#wall").parent(".container").parent('body').addClass('lightOff');
      $(this).closest("#wall").parent(".container").addClass('darken');
      $(this).closest("#wall").parent(".container").find('#lockers').fadeOut();
      $(this).closest("#wall").parent(".container").find('#lockers').fadeOut();
      $(this).closest("#wall").parent(".container").find('#door').fadeOut();
      $(this).closest("#wall").parent(".container").find('.window').fadeOut();
      $(this).closest(".container").children('#floor').find('#bowl').fadeOut();
      $(this).closest(".container").children('#floor').find('.table').fadeOut();
      $(this).closest(".container").children('#floor').find('.rug').fadeOut();
      $(this).closest("#wall").parent(".container").parent('body').removeClass('lightOn');
      if (!fireplace) {
        $(this).closest("#wall").parent(".container").find('#fireOff').fadeOut();
      }
      //set lights to off to make turning them on available.
      lights = 'off';
    }
  });
  $('#wall').on('dblclick', '.logo', function (event) {
    event.preventDefault();
    console.log('light on');
    if (lights === 'off')
      {
      $(this).closest("#wall").parent(".container").parent('body').addClass('lightOn');
      $(this).closest("#wall").parent(".container").removeClass('darken');
      $(this).closest("#wall").parent(".container").find('#lockers').fadeIn();
      $(this).closest("#wall").parent(".container").find('#lockers').fadeIn();
      $(this).closest("#wall").parent(".container").find('#door').fadeIn();
      $(this).closest("#wall").parent(".container").find('.window').fadeIn();
      $(this).closest(".container").children('#floor').find('#bowl').fadeIn();
      $(this).closest(".container").children('#floor').find('.table').fadeIn();
      $(this).closest(".container").children('#floor').find('.rug').fadeIn();
      $(this).closest("#wall").parent(".container").parent('body').removeClass('lightOff');
      if (!fireplace) {
        $(this).closest("#wall").parent(".container").find('#fireOff').fadeIn();
      }
      //Sets condition so that lights can only be double clicked while it is dark.
      lights = 'on';
    }
  });


/////////////////////////////////////////////////////////////CHARLES' SECTION
  $('.table').on("click", function (event) {
    $(this).children(".laptop").children("#calvin").css('display','block')
    message('Sweet moves.');
  });

  $('#table2').on("click", function (event) {
    $(this).children(".laptop").children("#code").css('display','block')
    message('What a random assortment of numbers.');
  });

  $('.logo').on("click", function (event) {
    message('The Iron Yard, where people come to cry silently.');
  });

  $('.window').on("click", function (event) {
    message('Bill Murray is a cool guy, I guess.');
  });

  $('.container').children('#floor').on('click', '.dogbowl', function (event) {
    $(this).css('background-image', 'url(images/bowlfull.png)');
  });



  Tick();

});
