$(document).ready(function(){



$("#button").on("click",function (){

  var userName = $(this).siblings('fieldset').find("#username").text(string);
  var level = $(this).siblings('fieldset').find("#radio").val(string);

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




}):






}): end of document
