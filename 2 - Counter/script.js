'use strict';

const buton1 = document.querySelector(".show-modal1");
const buton2 = document.querySelector(".show-modal2");
const buton3 = document.querySelector(".show-modal3");
const pageBody = document.querySelector("body");
const hed = document.querySelector('h2');
let count=0;

function changenum1() {
  hed.innerHTML = ++count;
  if (count > 0) {
    hed.style.color = 'green';
 }else if (count == 0) {
    hed.style.color = 'white';
  }
  // document.body.style.backgroundColor=color; // This doesn't work because the body itself is not selected.
}

function changenum2() {
    count = 0;
    hed.innerHTML = count;
    hed.style.color = 'white';
  }

function changenum3() {
    hed.innerHTML = --count;
  if (count < 0) {
    hed.style.color = 'red';
 }else if (count == 0) {
    hed.style.color = 'white';
  }
  }
  
buton1.addEventListener('click',changenum3);
buton2.addEventListener('click',changenum2);
buton3.addEventListener('click',changenum1);


