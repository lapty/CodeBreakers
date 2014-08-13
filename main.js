//Brendan is coding here
console.log('run');


//functions to load when doc has fully loaded ///////////////////////////////
$(document).ready(function() {
  console.log('ready')
  /**  variables to be used later on**/
  var key1 = false;
  var key2 = false;
  var key3 = false;

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
  })
//Double clicking the door does nothing
  $('.container').on('dblclick', '#door', function(event) {
    event.preventDefault();
    $(this).closest('.container').find('#message').text("Pulling harder won't help.  Find another way.");
  })

/////////////////////////////////////////////////////////////////////////////
  /** operaitons when keys are clicked **/
  $('.container').on('click', '#key1', function(event) {
    key1 = true;
    $(this).css('display', 'none');

    // var grab = function (location) {
    //   $(locaiton).html("");
    // }
  });

/////////////////////////////////////////////////////////////////////////////

//END OF READY
});
