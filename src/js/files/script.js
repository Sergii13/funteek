// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import {removeClasses} from"./functions.js";
function change(timeSec, Class) {
   let counter = 1;
   if (Class) {
      let change_items = Class.querySelectorAll('[data-animation]');
      window.addEventListener('load',function(){
         Class.classList.add('visible');
      })
      window.addEventListener('scroll', function () {
         if (elementInViewport(Class)) {
            Class.classList.add('visible');
         } else {
            Class.classList.remove('visible');
         }
      });

      setInterval(() => {
         if (Class.classList.contains('visible')) {
            removeClasses(change_items, 'active');
            change_items[counter].classList.add('active');
         }

         counter++;
         if (counter == change_items.length) {
            counter = 0;
         }

      }, timeSec);
   }

}
let top_section=document.querySelector('.top__title');
if(top_section){
   change(1000,top_section);
}
let top_section2=document.querySelector('.two__wrap');
if(top_section2){
   change(1500,top_section2);
}
let top_section3=document.querySelector('.three__left');
if(top_section3){
   change(1500,top_section3);
}
let top_section4=document.querySelector('.play__change');
if(top_section4){
   change(1000,top_section4);
}
function elementInViewport(el) {
   var top = el.offsetTop;
   var left = el.offsetLeft;
   var width = el.offsetWidth;
   var height = el.offsetHeight/3;

   while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
   }

   return (
      (top+300) >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
   );
}
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
   let st = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
   let deg = 0;
   if (st > lastScrollTop) {
      this.document.querySelector('.header').classList.remove('up');
    
   } else {
      // upscroll code  
      this.document.querySelector('.header').classList.add('up');

   }
   lastScrollTop = st;
});
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
let popupBtns=document.querySelectorAll('[data-popupbg]');

if(popupBtns.length>0){

   popupBtns.forEach(i => {
      i.addEventListener('click',function(){
         if(i.dataset.popupbg=='blue'){
            document.body.classList.remove('rose');
            document.body.classList.add('blue');
         }
         else {
            document.body.classList.remove('blue');
            document.body.classList.add('rose');
          
         }
      })
   });
}
let popupROse=document.querySelectorAll('.popup-tabs-rose');
if(popupROse.length>0)
{
   popupROse.forEach(i => {
      i.addEventListener('click',function(){
         let tabButton=document.querySelector('.tabs__title:not(._tab-active)')
         if(tabButton){
            eventFire(tabButton, 'click');
         }
     
      });
   });
}