const nutBtn = document.getElementById("nut-btn");
const unnutBtn = document.getElementById("unnut-btn");

function CBI(){
  document.body.style.backgroundImage = "url(http://i.imgur.com/iqS4qZV.png)"
  nutBtn.disabled = true;
  unnutBtn.disabled = false;
}
function CBB(){
  document.body.style.backgroundImage = "url(http://i.imgur.com/dBO8uMe.jpg?1)"
  nutBtn.disabled = false;
  unnutBtn.disabled = true;
}
function goBack(){
  window.history.back();
}
