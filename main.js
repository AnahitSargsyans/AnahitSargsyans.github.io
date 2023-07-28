"use strict";
AOS.init({
    duration: 1000,
    once: true,
    //delay: 0
});

let fixed=document.querySelector(".fixed");
let header=document.querySelector(".header");
window.addEventListener("scroll", scrollUpFixed);
function scrollUpFixed(){
    if(window.pageYOffset>header.getBoundingClientRect().top+700){
    fixed.style.display="block";
        }else{
        fixed.style.display="none";
    }
}

let mob=document.querySelector(".mobile-menu");
let menuLeftside=document.querySelector(".menu-leftside");
console.log(mob);
console.log(menuLeftside);
let bars=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");
mob.addEventListener("click", function(){
    menuLeftside.classList.toggle("block");
    bars.classList.toggle("hidden");
    xmark.classList.toggle("block");
})

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

let container=document.querySelector("#container");
let sliderItems=container.querySelectorAll(".containerItem");
let balls=document.querySelectorAll(".ball")
    console.log(container);
    console.log(sliderItems);
    console.log(balls);
let btnPrev=document.querySelector("#btn_prev");
let btnNext=document.querySelector("#btn_next");
let slideNextIndex;
let currentSlideIndex
let currentSlide

sliderItems.forEach(function(slide, index){
    if(index!=0){
        slide.classList.add("hidden")
    }
    sliderItems[0].setAttribute("data-active","")
    slide.dataset.index=index;
    balls[0].classList.add("darkBall");

    slide.addEventListener("click",nextImg)
    function nextImg(){
        removeDataActiveSlide(slide)
        balls[index].classList.remove("darkBall")
        nextSlideIndexFind(index) 
        nextSlideBlock(slideNextIndex)
    }
})
btnNext.onclick=function(){
    findActiveSlide()
    nextSlideIndexFind(currentSlideIndex)
    nextSlideBlock(slideNextIndex)
}
btnPrev.onclick=function(){
    findActiveSlide()
    prevSlideIndexFind()
    nextSlideBlock(slideNextIndex)
}
balls.forEach(function(ball, index){
    ball.addEventListener("click", function(){
            console.log(index);
        findActiveSlide()
        nextSlideBlock(index)
    })
})
function nextSlideBlock(nextIndex){
    let nextSlide=container.querySelector(`[data-index="${nextIndex}"]`);
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active","");
    balls[nextIndex].classList.add("darkBall");
}

function findActiveSlide(){
    currentSlide=container.querySelector("[data-active]");
    currentSlideIndex= +currentSlide.dataset.index;
    balls[currentSlideIndex].classList.remove("darkBall");
    removeDataActiveSlide(currentSlide)
}
function removeDataActiveSlide(activeSlide){
    activeSlide.classList.add("hidden");
    activeSlide.removeAttribute("data-active","");
}
function nextSlideIndexFind(regularIndex){
    if(regularIndex==sliderItems.length-1){
            slideNextIndex=0;
    }else{
        slideNextIndex=regularIndex +1
    }
}
function prevSlideIndexFind(){
    if(currentSlideIndex==0){
        slideNextIndex=sliderItems.length-1;
    }else{
        slideNextIndex=currentSlideIndex-1;
    }
}
