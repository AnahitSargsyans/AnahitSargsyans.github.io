"use strict";
//loader
document.body.onload=function(){
    setTimeout(function(){
        let preloader=document.querySelector(".preloader");
        preloader.classList.add("hiddenLoader");
    },1000)    
}

//scrolli jamanak srtery bacven
let card=document.querySelector(".card");
let photo1=document.querySelector(".photo1");
let photo2=document.querySelector(".photo2");
let cragir=document.querySelector(".cragir");

/*window.addEventListener("scroll",animOnScroll)
function animOnScroll(){
    if(window.pageYOffset>card.offsetHeight-500){
        photo1.style.left="-100";
    }else{
        photo1.style.left="250";
    }
}*/
window.addEventListener("scroll", function(){
    let value=window.scrollY; 
    let cragirTop=cragir.getBoundingClientRect().top
    console.log(cragirTop);
    console.log(window.innerHeight);
    if (cragirTop>window.innerHeight){        
        if (value>0){
            photo1.style.left= value * 2 + "px";
            photo1.style.top= value * 2 + "px";
            photo2.style.right= value * 2 + "px";
            photo2.style.top= value * 2 + "px";
        }
    }
    
})

//hetadardz jamacuyc
let or=document.querySelector("#or");
let jam=document.querySelector("#jam");
let rope=document.querySelector("#rope");
let vayr=document.querySelector("#vayr");   
function countDown(){
    let d=new Date();
    let dMil=d.getTime(); 
    let nor=new Date(2024, 1, 14, 7, 30);
    let dNorMil=nor.getTime();
    let tarberutyun=dNorMil-dMil
    let days=Math.floor(tarberutyun/(1000*60*60*24))
    let hours=Math.floor(tarberutyun/(1000*60*60))%24;
    let minutes=Math.floor(tarberutyun/(1000*60))%60;
    let seconds=Math.floor(tarberutyun/1000)%60;

    or.innerHTML=days;
    if(hours<10){
        jam.innerHTML= "0"+hours;
    }else{
        jam.innerHTML=hours;
    }

    if(minutes<10){
        rope.innerHTML= "0"+minutes;
    }else{
        rope.innerHTML=minutes;
    } 
   
    if(seconds<10){
        vayr.innerHTML= "0"+seconds;
    }else{
        vayr.innerHTML=seconds; 
    }
}
setInterval(countDown,1000);