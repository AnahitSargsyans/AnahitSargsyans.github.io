"use strict";
//loader (ej@ bernum e, nor bacum)
document.body.onload=function(){
    setTimeout(function(){
        let preloader=document.querySelector(".preloader");
        preloader.classList.add("hiddenLoader");
        changeLang()
    },1000)    
}

//mobile menu-i
let mob=document.querySelector(".mobile-menu");
let menuLeft=document.querySelector(".menuLeft");
let bars=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");
    /*function myFunction(x){
        x.classList.toggle("change");
        menuLeft.classList.toggle("block");
    }*/
    mob.addEventListener("click", function(){
        menuLeft.classList.toggle("block");
        bars.classList.toggle("hidden");
        xmark.classList.toggle("block");
    })

//menun ijni verevic
let menuBlock=document.querySelector(".menuBlock");
let header=document.querySelector(".header");

window.addEventListener("scroll",scrollDownMenu)
function scrollDownMenu(){
    if(window.innerWidth>992){
        if(window.pageYOffset>header.offsetHeight-500){
            menuBlock.style.opacity="1";
        }else{
            menuBlock.style.opacity="0";
        }
    }else{
        menuBlock.style.opacity="1";
    }
}

//dark & light ekran
let themeBtn=document.querySelector(".theme_changer");
if(!localStorage.theme){
    localStorage.setItem("theme", "dark");
}
document.body.className=localStorage.theme;
if(localStorage.theme=="dark"){
    themeBtn.innerHTML=`<i class="fa-regular fa-sun" style="color: #000000;"></i>`
}else{
    themeBtn.innerHTML=`<i class="fa-regular fa-moon" style="color: #000000;"></i>`
}
themeBtn.addEventListener("click", function(){
    if(localStorage.getItem("theme")=="light"){
        themeBtn.innerHTML=`<i class="fa-regular fa-sun" style="color: #000000;"></i>`;
        document.body.className="dark";
    }else{
        themeBtn.innerHTML=`<i class="fa-regular fa-moon" style="color: #000000;"></i>`;
        document.body.className="light";
    }
    localStorage.theme=document.body.className;
})


//eralezu 
let langArr={ 
    "homeli":{
        //"hy":"Գլխավոր",
        "en":"Home",
        "ru":"Главная",
    },
    "aboutli":{
        //"hy":"Իմ մասին",
        "en":"About",
        "ru":"Обо мне",
    },
    "portfolioli":{
        //"hy":"Պորտֆոլիո",
        "en":"Portfolio",
        "ru":"Портфолио",
    },
    "skillsli":{
        //"hy":"Հմտություններ",
        "en":"Skills",
        "ru":"Навыки",
    },
    "qualityli":{
        //"hy":"Կրթություն",
        "en":"Quality",
        "ru":"Образование",
    },
    "servicesli":{
        //"hy":"Ծառայություններ",
        "en":"Services",
        "ru":"Услуги",
    },
    "contactsli":{
        //"hy":"Կոնտակտներ",
        "en":"Contacts",
        "ru":"Контакты",
    },    
    "download":{
        "en":"Download CV",
        "ru":"Скачать CV",
    },
    "download2":{
        "en":"Hire Me",
        "ru":"Найми Меня"
    },
    "hello":{
        "en":"Hello, I am",
        "ru":"Здравствуйте, я",
    },
    "myName":{
        "en":"Anahit Sargsyan",
        "ru":"Анаит Саргсян",
    },
    "developer":{
        "en":"Front-End Developer",
        "ru":"Фронтенд-разработчик",
    },
    "who":{
        "en":"Who am I ?",
        "ru":"Кто я ?",
    },
    "front":{
        "en":"Front-End Developer",
        "ru":"Фронтенд-разработчик",
    },
    "beginner":{
        "en":"I'm a beginner freelancer. I really liked this field and I want to improve my knowledge. I appreciate honesty, responsibility, activity.",
        "ru":"Я начинающий фрилансер. Мне очень понравилась эта сфера и я хочу улучшить свои знания. Ценю честность, ответственность, активность.",
    },
    "download3":{
        "en":"Download CV",
        "ru":"Скачать CV",
    },
    "personal":{
        "en":"Personal Info",
        "ru":"Личная информация",
    },
    "myName2":{
        "en":"<b>Name:</b> Anahit Sargsyan",
        "ru":"<b>Имя:</b> Анаит Саргсян",
    },
    "country":{
        "en":"<b>Country:</b> Armenia",
        "ru":"<b>Страна:</b> Армения",
    },
    "tel":{
        "en":"<b>Phone:</b> +374 93 189373",
        "ru":"<b>Тел:</b> +374 93 189373",
    },
    "experience":{
        "en":"<b>Experience:</b> Beginner",
        "ru":"<b>Опыт:</b> Новичок",
    },
    "freelance":{
        "en":"<b>Freelance:</b> Available",
        "ru":"<b>Фриланс:</b> Доступен",
    },
    "expertise":{
        "en":"My Expertise",
        "ru":"Мой опыт",
    },
    "front2":{
        "en":"Front-End Developer",
        "ru":"Фронтенд-разработчик",
    },
    "beginner2":{
        "en":"Beginner",
        "ru":"Новичок",
    },
    "education2":{
        "en":"My Education",
        "ru":"Мое Образование",
    },
    "master":{
        "en":"Master Of Vocal",
        "ru":"Мастер Вокала",
    },
    "conservatory":{
        "en":"Yerevan State Conservatory (2000-2006)",
        "ru":"Ереванская Государственная Консерватория (2000-2006)",
    },
    "bachelor":{
        "en":"Bachelor Of Global Economist", 
        "ru":"Глобальный Экономист-Бакалавр",
    },
    "univers":{
        "en":"State Engineering University (1996-2000)",
        "ru":"Государственный Инженерный Университет (1996-2000)",
    },
    "courses":{
        "en":"My courses",
        "ru":"Курсы",
    },
    "js2":{
        "en":"Java Script advanced",
        "ru":"Продвинутый Java Script",
    },
    "js1":{
        "en":"JavaScript fundamental",
        "ru":"Фундаментальный JavaScript",
    },
    "web":{
        "en":"Web programming for beginner",
        "ru":"Веб-программирование для начинающих",
    },
    "experience2":{
        "en":"My Expericence",
        "ru":"Мой опыт",
    },
    "front3":{
        "en":"Front-end web developer",
        "ru":"Фронтенд-разработчик",
    },
    "freelancer2":{
        "en":"Freelanser (2023-present)",
        "ru":"Фрилансер (2023-настоящее время)",
    },
    "singer":{
        "en":"Singer",
        "ru":"Певица",
    },
    "singer2":{
        "en":"Ensemble Of Song And Dance (2002-present)",
        "ru":"Ансамбль Песни и Танца (2002-настоящее время)",
    },
    "practice":{
        "en":"My Practice",
        "ru":"Моя практика",
    },
    "internship":{
        "en":"Internship",
        "ru":"Стажировка",
    },
    "internship2":{
        "en":"Energy School (september 2023-2024)",
        "ru":"Energy School (сентябрь 2023-2024)",
    },
    "design":{
        "en":"Web Design",
        "ru":"Веб-дизайн",
    },
    "webDev":{
        "en":"Web Development",
        "ru":"Веб-разработка",
    },
    "webDecition":{
        "en":"Web Decision",
        "ru":"Веб-решение",
    },
    "copyWrite":{
        "en":"Copy Writing",
        "ru":"Копирайтинг",
    },
    "lendingPage":{
        "en":"Lending Page",
        "ru":"Lending Page",
    },
    "profiSite":{
        "en":"Professional Site",
        "ru":"Профессиональный сайт",
    },
    "get":{
        "en":"Get in touch",
        "ru":"Связаться",
    },
    "location":{
        "en":"<b>Location</b>:</h2>",
        "ru":"<b>Расположение:</b>",
    },
    "location2":{
        "en":"Armenia",
        "ru":"Армения",
    },
    "tel2":{
        "en":"Phone",
        "ru":"Тел.",
    },
    "designed":{
        "en":"Designed by Anahit Sargsyan",
        "ru":"Дизайн Анаит Саргсян",
    },
}
let allLang=["en", "ru"]
let select=document.querySelector(".lang-site");
select.addEventListener("change", function(){
    //console.log("ok");
    let lang=select.value;
        console.log(lang);
    location.href=window.location.pathname+"#"+lang;
})
function changeLang(){
    let hash=window.location.hash
    hash=hash.substr(1);
        console.log(hash);
    if(!allLang.includes(hash)){
        location.href=window.location.pathname+"#en";
    }
    window.onhashchange=function(){
        console.log("onhashchange");
        location.reload();
        console.log("onhashchange");
    }
    select.value=hash;
    for(let key in langArr){
        //console.log(key);
        let elem=document.querySelector(`[data-lang=${key}]`);
        
//header div-i "Front-End Developer"-i tarery galis en hertov
        if(key=="developer"){
            let i=0;
            let indicator=setInterval(function(){
                if(i<langArr[key][hash].length){
                elem.innerHTML+=langArr[key][hash].charAt(i);
                i++;
                }
            },100)
        }else{      
            if(elem){
                elem.innerHTML=langArr[key][hash]
            }
        } 
    }
}
//changeLang()



//aji oval btn a, sexmelov barcranum enq anmijapes verev
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

//skills-ri progressn a (lcvox erkar div-ry)
let skills=document.querySelector("#skills");
let progressContainer=document.querySelector(".progress-container")
let htmlSkill=document.querySelector(".html");
let cssSkill=document.querySelector(".css");
let javaScriptSkill=document.querySelector(".javaScript");
let bootstrapSkill=document.querySelector(".bootstrap");
let githubSkill=document.querySelector(".github");


function progressBarHtml(){ 
    let widthProgressHtml=0;  
    let indicator=setInterval(function(){
        let coordTop=progressContainer.getBoundingClientRect().top;
            //console.log("coord="+coordTop);
        if(coordTop<window.innerHeight-50){
            htmlSkill.style.width=widthProgressHtml+ "%";
            widthProgressHtml++;
            //widthProgressHtml+=1;
            if(widthProgressHtml==96){
                clearInterval(indicator);
            }
            window.removeEventListener("scroll",progressBarHtml)
        }
    },1)
}
window.addEventListener("scroll",progressBarHtml)

function progressBarCss(){
    let widthProgressCss=0;
    let indicator=setInterval(function(){
        let coordTop=progressContainer.getBoundingClientRect().top;
           //console.log("coord="+coordTop);
        if(coordTop<window.innerHeight-50){
            cssSkill.style.width=widthProgressCss+ "%";
            widthProgressCss++;
            if(widthProgressCss==86){
                clearInterval(indicator);
            }
            window.removeEventListener("scroll",progressBarCss)
        }
    },1)
}
window.addEventListener("scroll",progressBarCss)

function progressBarJavaScript(){
    let widthProgressJavaScript=0;
    let indicator=setInterval(function(){
        let coordTop=progressContainer.getBoundingClientRect().top;
            //console.log("coord="+coordTop);
        if(coordTop<window.innerHeight-50){
            javaScriptSkill.style.width=widthProgressJavaScript+ "%";
            widthProgressJavaScript++;
            if(widthProgressJavaScript==71){
                clearInterval(indicator);
            }
            window.removeEventListener("scroll",progressBarJavaScript)
        }
    },1)
}
window.addEventListener("scroll",progressBarJavaScript)

function progressBarBootstrap(){
    let widthProgressBootstrap=0;
    let indicator=setInterval(function(){
        let coordTop=progressContainer.getBoundingClientRect().top;
            //console.log("coord="+coordTop);
        if(coordTop<window.innerHeight-50){
            bootstrapSkill.style.width=widthProgressBootstrap+ "%";
            widthProgressBootstrap++;
            if(widthProgressBootstrap==71){
                clearInterval(indicator);
            }
            window.removeEventListener("scroll",progressBarBootstrap)
        }
    },1)
}
window.addEventListener("scroll",progressBarBootstrap)

function progressBarGithub(){
    let widthProgressGithub=0;
    let indicator=setInterval(function(){
        let coordTop=progressContainer.getBoundingClientRect().top;
            //console.log("coord="+coordTop);
        if(coordTop<window.innerHeight-50){
            githubSkill.style.width=widthProgressGithub+ "%";
            widthProgressGithub++;
            if(widthProgressGithub==85){
                clearInterval(indicator);
            }
            window.removeEventListener("scroll",progressBarGithub)
        }
    },1)
}
window.addEventListener("scroll",progressBarGithub)
