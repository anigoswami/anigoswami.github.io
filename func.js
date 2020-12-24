function hidden_projects(){
  var hidden=document.getElementsByClassName("hidden");
  var button= document.getElementsByName("hiding");
  hidden[0].style.display="inline-block";
  hidden[1].style.display="inline-block";
  button[0].style.display="none";
}
function hidden_art(){
  var hidden=document.getElementsByClassName("hide");
  var button= document.getElementsByName("hiding");
  hidden[0].style.display="inline";
  hidden[1].style.display="inline";
  hidden[2].style.display="inline";
  hidden[3].style.display="inline";
  button[1].style.display="none";
}
