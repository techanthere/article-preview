/*
  Code to manage the tooltip behavior on media queries
*/

function shareFunction(){
  const article = document.querySelector(".main__article");
  const popup = document.querySelector(".main__footer-popup");
  const share = document.querySelector(".main__footer-share-icon");
  if(popup.style.display === "flex"){
    article.classList.remove("main__article-custom");
    share.setAttribute("aria-expanded", false);
  }
  else{
    article.classList.toggle("main__article-custom");
    share.setAttribute("aria-expanded", true);
  }
}
