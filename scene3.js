$(document).ready(function() {
  console.log('ready');








  ///Click turns fan on  NEED TO ADD KEY FALLING AND MESSAGE!
  $(".container").on("click", "#fan",function(event){
    console.log("clicked fan");
    $("#fan").css('background-image', 'url(images/fanon.gif)');
  })


  //END OF READY
  });
