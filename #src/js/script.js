'use strict';

//Русский военный корабль иди нахуй 
//Русский военный корабль иди нахуй 
//Русский военный корабль иди нахуй
//Слава Украине, Героем слава!

 

const button = document.querySelector('.burger-btn');
const burger_panel = document.querySelector("#burger-panel");
const body = document.querySelector("#body");

let _animScroll = document.querySelectorAll("._animScroll");

button.addEventListener('click', () => {
  button.classList.toggle('active');
  burger_panel.classList.toggle('burger-panel-active');
  body.style.overflow = (body.style.overflow == "hidden" ? "auto" : "hidden");
  window.scrollTo({
    top: 0,
  });
})



let arrow = document.querySelector(".arrow-gradient");
console.log(arrow.getBoundingClientRect());
console.log(document.documentElement.clientWidth)
console.log(document.documentElement.clientHeight)

 
window.addEventListener("resize", ()=>{
  elemInViewport();
});

window.addEventListener("scroll", ()=>{elemInViewport()});

function elemInViewport() {
  console.dir("elem")
  _animScroll.forEach((elem) => {
    var box = elem.getBoundingClientRect();
    var top = box.top;
    var left = box.left;
    var bottom = box.bottom;
    var right = box.right;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
 
 
    // bottom <= height 

    if ((bottom <= height) && (top >= 10)) {
      elem.dataset.anim = elem.dataset.checkclass;
      console.dir(elem)
    } else {

    }

  });
} elemInViewport();
 


// let testSVG = document.getElementById("testSVG");
// let child = testSVG.children;
 
// for(let i = 0; i < child.length; i++){
//   let elem = child[i];
//   if(elem.tagName === "path" || elem.tagName === "circle"){
    

//     // stroke-dasharray="lenght" stroke-dashoffset="0"
//     console.log(elem.tagName +" -- " + "N = " + i + " -- "+ " lenght = " + Math.round(elem.getTotalLength()));
//     console.log(elem);
//   }
// }
 
 