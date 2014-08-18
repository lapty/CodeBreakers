$(document).ready(function(){

$(".name").on("click", function (){
    console.log("name field was clicked")

});

$("#button").on("click",function (){

  var userName = $(this).closest('fieldset').children('.name').find('#username').text();
  var level = $(this).closest('fieldset').children('.levelGroup').find('input').val();

  if (level === "easy" ){
    window.location.href = "scene1_easy.html";
    console.log("go to easy scene1");
  }

  else if (level === "medium"){
    window.location.href = "scene1_medium.html";
    console.log("go to medium scene1");
  }

  else if (level === "hard"){
    window.location.href = "scene1.html";
    console.log("go to hard scene1");
  }




});






}); //end of document
