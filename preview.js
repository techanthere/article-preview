//
// /*
//   Code to manage the tooltip behavior on media queries
// */
//
// let primary = document.getElementById("primary"); // main footer
// let secondary = document.getElementById("secondary"); // social icons footer
//
// /* grab the share-icon button */
// click = document.querySelectorAll(".main__article__footer--share-icon");
//
// let active = false; // checks if button is clicked
//
// let media = window.matchMedia("(min-width: 700px)");
//
// /* Updating the tooltip status on resizing/as the media size changes*/
// window.addEventListener("resize", function(){
//     media = window.matchMedia("(min-width: 700px)");
//     share(media);
// });
//
// /* share-icon click behavior */
// click.forEach((clicked, media) => {
//         clicked.addEventListener("click", function(){
//             share(media);
//         });
//   });
//
// /* Tooltip behavior in smaller and larger screens */
// function share(media){
//   primary.style.display = "inherit";
//   if(active && media.matches){
//     secondary.style.display = "none";
//     primary.style.display = "inherit";
//     active = false;
//   }
//   else if(!active && media.matches){
//     secondary.style.display = "flex";
//     primary.style.display = "inherit";
//     active = true;
//   }
//   else if(active && !media.matches){
//     primary.style.display = "inherit";
//     secondary.style.display = "none";
//     active = false;
//   }
//    else if(!active && !media.matches){
//     secondary.style.display = "inherit";
//     primary.style.display = "none";
//     active = true;
//   }
// }
