"use strickt";
//AOS-i link
AOS.init({
    disable: "phone",
});

//mobileMenu
let mob=document.querySelector(".mobile-menu");
let menu=document.querySelector(".menu");
let leftside=document.querySelector(".leftside");
let centerside=document.querySelector(".centerside");
let rightside=document.querySelector(".rightside");
/*let bars=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");
    mob.addEventListener("click", myFunction(){
        leftside.classList.toggle("hidden");
        centerside.classList.toggle("hidden");
       /* bars.classList.toggle("hidden");
        xmark.classList.toggle("block");
    })*/
    function myFunction(x){
        x.classList.toggle("change");
        leftside.classList.toggle("block");
        centerside.classList.toggle("block");
    }

//scrollUpBtn
let scrollBtn=document.querySelector(".scrollBtn");
scrollBtn.addEventListener("click", scrollUpPage);
window.addEventListener("scroll", scrollUpBtnBlock);
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

//loader (ej@ naxoroq bernvum e, nor bacvum)
document.body.onload=function(){
    setTimeout(function(){
        let preloader=document.querySelector(".preloader");
        preloader.classList.add("hiddenLoader");
    },1000)    
}