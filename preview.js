/*
  Code to manage the tooltip behavior on media queries
*/

function shareFunction(){
  const popup = document.querySelector(".main__footer--popup");
  const share = document.getElementById("click");
  const icon = document.querySelector(".share_icon");
  if (popup.style.display === "flex") {
    popup.style.display = "none";
    share.style.backgroundColor = "var(--light-grayish-blue)";
    icon.style.mixBlendMode = "normal";
  }
  else{
    popup.style.display = "flex";
    share.style.backgroundColor = "var(--some-gray-shade)";
    icon.style.mixBlendMode = "color-dodge"
  }
}
