'use strict';

//Русский военный корабль иди нахуй 
//Русский военный корабль иди нахуй 
//Русский военный корабль иди нахуй
//Слава Украине, Героем слава!
//Слава Украине, Героем слава! 


  




 
 

let timerTime = document.querySelectorAll(".timerTime");
let objectTimer = {
  day: 18,
  hour: 18,
  minute: 18,
  second: 18
}
let keyObjectTimer = Object.keys(objectTimer);
 
function timer(objectTimer) {
  let timer = setInterval(() => {
    if (objectTimer.second == 0) {
      objectTimer.second = 59;
      objectTimer.minute--;
    } else {
      objectTimer.second--;
    }
    if (objectTimer.minute == 0) {
      objectTimer.minute = 59;
      objectTimer.hour--;
    }
    if (objectTimer.hour == 0) {
      objectTimer.hour = 23;
      objectTimer.day--;
    }
    if (objectTimer.day == 0) {
      objectTimer.day = 18;
    }

    timerTime.forEach((elem , i) => { 
      if(elem.dataset.timeer == keyObjectTimer[i]) {
      elem.innerHTML = `${objectTimer[keyObjectTimer[i]]}`;
      }
    })
  }, 1000)
}timer(objectTimer);
  

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
// console.log(arrow.getBoundingClientRect());
// console.log(document.documentElement.clientWidth)
// console.log(document.documentElement.clientHeight)

 
window.addEventListener("resize", ()=>{
  elemInViewport();
});

window.addEventListener("scroll", ()=>{elemInViewport()});

function elemInViewport() { 
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
    } else { 
    }

  });
 
} elemInViewport();


 

 