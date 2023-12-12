"use strict";
AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile",
});

let scrollBtn=document.querySelector(".scrollBtn");
scrollBtn.addEventListener("click", scrollUpPage)
window.addEventListener("scroll", scrollUpBtnBlock)
function scrollUpBtnBlock(){
    if(window.pageYOffset>document.documentElement.clientHeight/2){
        scrollBtn.style.display="block";       
    }else{
        scrollBtn.style.display="none";       
    }
}
function scrollUpPage(){
    window.scrollTo(0, 0);
}

let mob=document.querySelector(".mobile-menu");
let menu=document.querySelector(".menu");
    console.log(mob);
    console.log(menu);
let bars=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");

mob.addEventListener("click", function(){
    menu.classList.toggle("block");
    bars.classList.toggle("hidden");
    xmark.classList.toggle("block");
})
/*   if(centerside.style.display=="block"){
        centerside.style.display="none";
        bars.style.display="block";
        xmark.style.display="none";       
    }else{
        centerside.style.display="block";
        bars.style.display="none";
        xmark.style.display="block";    
    }
}
mob.addEventListener("click", menuOpen)*/

let we=document.querySelectorAll(".we");
let openBlock=document.querySelectorAll(".openBlock");
let up=document.querySelectorAll(".fa-caret-up");
let down=document.querySelectorAll(".fa-caret-down");
for(let i=0; i<we.length; i++){
    we[i].addEventListener("click", function(){    
        openBlock[i].classList.toggle("blockContent");
        /*up[i].classList.toggle("blockContent");*/
        /*down[i].classList.toggle("hidden");*/
        down[i].classList.toggle("rotateUp");
        
    })
}

//petq e sexmel user-i vra, bacvi div, tvyalner lracnelu hamar
let user=document.querySelector(".fa-user");
let sign=document.querySelector(".signBig");

    user.addEventListener("click", function(){
        sign.classList.toggle("sighOpen");
    })

//karusel in tablet (shopping)
let prevBtn=document.querySelector(".fa-chevron-left");
let nextBtn=document.querySelector(".fa-chevron-right");
let shoppingPicture=document.querySelector(".shoppingPicture");
let shoppingBox=document.querySelectorAll(".shoppingBox");
    console.log(shoppingBox);
let i=0;
let left=0;

nextBtn.addEventListener("click",function(){
    if(i<shoppingBox.length-3){
        i++;
        left=left+shoppingBox[i].getBoundingClientRect().left-20;
            console.log(left);
        shoppingPicture.style.transform=`translate(${-left}px)`
    }    
})
prevBtn.addEventListener("click", function(){
    if(i>0){
        i--;
        left=left-shoppingBox[i].offsetWidth-40;
        shoppingPicture.style.transform=`translate(${-left}px)`
    }
})
//karusel in tablet (experience)
let rightBtn=document.querySelector(".fa-angle-right");
let leftBtn=document.querySelector(".fa-angle-left");
let experienceBlock=document.querySelector(".experienceBlock");
let experienceBox=document.querySelectorAll(".experience-box");
    console.log(experienceBox);

rightBtn.addEventListener("click", function(){
    if(i<experienceBox.length-2){
    i++;
    left=left+experienceBox[i].getBoundingClientRect().left-20;
        experienceBlock.style.transform=`translate(${-left}px)`
    }    
})
leftBtn.addEventListener("click", function(){
    if(i>0){
        i--;
        left=left-experienceBox[i].offsetWidth-40;
        experienceBlock.style.transform=`translate(${-left}px)`
    }
})
