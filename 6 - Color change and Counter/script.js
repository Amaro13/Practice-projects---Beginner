'use strict';


let bod1 = document.querySelector(".show-modal1");
let bod2 = document.querySelector(".show-modal2");
let bod3 = document.querySelector(".show-modal3");
var col=0;
function changebg1(){
    //document.body.style.background=col;
    //console.log(col);
    col--;
    document.querySelector("h1").innerHTML = "Background Color: " + col;
    if(col<0){
        document.body.style.background="red";
        document.querySelector("h1").style.color = "green";
        bod1.style.background="green";
        bod2.style.background="green";
        bod3.style.background="green";
    }
    if(col==0){
        document.body.style.background="white";
        bod1.style.background="black";
        bod2.style.background="black";
        bod3.style.background="black";
        document.querySelector("h1").style.color = "black";
    }
}

function changebg2(){
    //document.body.style.background=col;
    //console.log(col);
    col=0;
    document.body.style.background="white";
    bod1.style.background="black";
    bod2.style.background="black";
    bod3.style.background="black";
    document.querySelector("h1").innerHTML = "Background Color: " + col;
    document.querySelector("h1").style.color = "black";
}


function changebg3(){
    //document.body.style.background=col;
    //console.log(col);
    col++;
    document.querySelector("h1").innerHTML = "Background Color: " + col;
    if(col>0){
        document.body.style.background="green";
        bod1.style.background="red";
        bod2.style.background="red";
        bod3.style.background="red";
        document.querySelector("h1").style.color = "red";
    }
    if(col==0){
        document.body.style.background="green";
        bod1.style.background="black";
        bod2.style.background="black";
        bod3.style.background="black";
        document.querySelector("h1").style.color = "white";
    }
}



bod1.addEventListener('click',changebg1);
bod2.addEventListener('click',changebg2);
bod3.addEventListener('click',changebg3);