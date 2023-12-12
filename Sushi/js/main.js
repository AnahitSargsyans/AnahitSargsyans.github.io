"use strict";
//mobileMenu tablet-um
let mob=document.querySelector(".mobile-menu");
let menuBlock=document.querySelector(".menuBlock");
let bars=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");
    mob.addEventListener("click", function(){
        menuBlock.classList.toggle("block");
        bars.classList.toggle("hidden");
        xmark.classList.toggle("block");
})

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

//1-in div-ic heto ekox ProgressBlock-y
let assortment=document.querySelector(".assortment");
let client=document.querySelector(".client");
let prize=document.querySelector(".prize");
let advantage=document.querySelector(".advantage");

function progressBar(){
    let i=0;
    let indicator=setInterval(function(){
        let coordTop=advantage.getBoundingClientRect().top;
        if(coordTop<window.innerHeight-120){
            assortment.innerHTML=i + "+";
            i++;
            if(i==51){
                clearInterval(indicator);
            }
         window.removeEventListener("scroll",progressBar)
        }
    },60)
}
window.addEventListener("scroll",progressBar)

function progressBar2(){
    let i=0;
    let indicator=setInterval(function(){
        let coordTop=advantage.getBoundingClientRect().top;
        if(coordTop<window.innerHeight-120){
            client.innerHTML=i + "+";
            i++;
            if(i==101){
                clearInterval(indicator);
            }
         window.removeEventListener("scroll",progressBar2)
        }
    },30)
}
window.addEventListener("scroll",progressBar2)

function progressBar3(){
    let i=0;
    let indicator=setInterval(function(){
        let coordTop=advantage.getBoundingClientRect().top;
        if(coordTop<window.innerHeight-120){
            prize.innerHTML=i + "+";
            i++;
            if(i==21){
                clearInterval(indicator);
            }
         window.removeEventListener("scroll",progressBar3)
        }
    },150)
}
window.addEventListener("scroll",progressBar3)

//sushi-ri ev roll-ri div-ri stexcumy ev funkcionali apahovumy
let sushiList=[
    {
        topic: "Ваш заказ:",     
        name: "Сяке рору",
        price: "199",
        compound: "Лосось, огурец, рис, нори, 6 шт.",
        compoundOpen: "Угорь, огурец, кунжут, рис, 6 шт.",
        img: "url(image/1-syake-roru.png)",
        value: "Сумма: 199",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Эби рору",
        price: "299",
        compound: "Креветка, масаго, нори, рис, огурец, 6 шт.",
        compoundOpen: "Угорь, огурец, кунжут, рис, 6 шт.",
        img: "url(image/2-ebi-roru.png)",
        value: "Сумма: 299",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Урамаки рору",
        price: "299",
        compound: "Лосось, авокадо, сливочный сыр, нори, рис, кунжут, 6 шт.",
        compoundOpen: "Креветка темпура, огурец, мягкий сыр, кунжут, 4 шт.",
        img: "url(Image/3-uramaki-roru.png)",
        value: "Сумма: 299",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Авокадо маки",
        price: "199",
        compound: "Нори, авокадо, рис, 8 шт.",
        compoundOpen: "Лосось, авокадо, майонез, огурцец и тобико, 6 шт.",
        img: "url(Image/4-avokado-maki.png)",
        value: "Сумма: 199",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Филадельфия люкс",
        price: "349",
        compound: "Лосось, тунец, сливочный сыр, нори, рис, огурец, 8 шт.",
        compoundOpen: "Креветки, огурец, лук зеленый, нори, кунжут, 6 шт.",
        img: "url(Image/5-filadelfia-lyuks.png)",
        value: "Сумма: 349",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Магуро ролл",
        price: "399",
        compound: "Тунец, рис, темпурная крошка, огурец, нори, сливочный сыр, 8шт.",
        compoundOpen: "Лосось, сыр сливочный, рис, нори, 6 шт.",
        img: "url(Image/6-maguro-roll.png)",
        value: "Сумма: 399",
        typeProduct:"roll",
    },
    {
        topic: "Ваш заказ:",
        name: "Маки мини сет",
        price: "899",
        compound: "10 роллов",
        compoundOpen: "12 роллов, 4 суши",
        img: "url(image/7-maki-mini-set.png)",
        value: "Сумма: 899",
        typeProduct:"sets",
    },
    {
        topic: "Ваш заказ:",
        name: "Классический сет",
        price: "1999",
        compound: "24 ролла",
        compoundOpen: "28 роллов, 4 суши",
        img: "url(Image/8-classic-set.png)",
        value: "Сумма: 1999",
        typeProduct:"sets",
    },
    {
        topic: "Ваш заказ:",
        name: "Рору сет",
        price: "1299",
        compound: "10 роллов",
        compoundOpen: "24 ролла, 12 суши",
        img: "url(Image/9-roru-set.png)",
        value: "Сумма: 1299",
        typeProduct:"sets",
    },
    {
        topic: "Ваш заказ:",
        name: "Мураками сет",
        price: "2699",
        compound: "32 ролла",
        compoundOpen: "40 роллов, 8 суши",
        img: "url(Image/10-murakami-set.png)",
        imgHover: "url(image/22-murakami-set.jpg)",
        value: "Сумма: 2699",
        typeProduct:"sets",
    },
    {
        topic: "Ваш заказ:",
        name: "Мексиканский сет",
        price: "2899",
        compound: "32 ролла",
        compoundOpen: "36 роллов, 8 суши",
        img: "url(Image/11-mecsican-set.png)",
        value: "Сумма: 2899",
        typeProduct:"sets",
    },
    {
        topic: "Ваш заказ:",
        name: "Отори сет",
        price: "1999",
        compound: "24 ролла",
        compoundOpen: "30 роллов, 4 суши",
        img: "url(Image/12-ottori-set.png)",
        value: "Сумма: 1999",
        typeProduct:"sets",
    },
]
//kanchum em order divn ir meji div-ov
let order=document.querySelector(".order");
let priceAllOrderDiv=document.querySelector(".priceAllOrder");

//kanchum em basket-i het kapvac div-ry
let countAllOrderDiv=document.querySelector(".countOrderDiv");
let basketBlock=document.querySelector(".basket-block");

//stexcum em srtik menu-yum
let preffer=document.querySelector(".preffer");
let prefferBody=document.querySelector(".preffer-body");
let heartBig=preffer.querySelector(".fa-heart");
let prefferBody2=document.querySelector(".preffer-body2");
    //sexmum enq menu-i srtiki vra, vor tesnenq mer bolor 
    //naxyntracnery
    heartBig.addEventListener("click", function(){
        prefferBody.classList.toggle("blockPreffer");
        document.body.style.overflowY="hidden";
        prefferBody.style.overflowY="auto";
    })
    let whiteClose=document.querySelector(".whiteClose");
        whiteClose.addEventListener("click", function(){
            prefferBody.style.display="none";
            //berum enq scrolly
            document.body.style.overflowY="auto";
        })

    //kanchum em roll-i div
let rollProduct=document.querySelector("#rolls");
    console.log(rollProduct);
    //ksnchum em set-i div
let setProduct=document.querySelector("#sets");
    console.log(setProduct);

for(let sushi of sushiList){
    //stexcum em sushineri 1-in div
    let element=document.createElement("div");
        element.className="sushiItem";
            
        if(sushi.typeProduct=="roll"){  //ete product roll e
            rollProduct.append(element);//dir roll div-i mej
        }else{
            setProduct.append(element)//isk ete che, apa set-i mej
        }
        //srtiky texadrum em sushiItem-i mej, vor like-eluc
        //bacvi glxavor nkary, ayl voch te hover-ovy
        element.innerHTML=`<i class="fa-solid fa-heart" style="float:right"></i>`
    //1-in div-i mej texadrum em nkar ev informacia
    let sushiImg=document.createElement("div");
        sushiImg.className="sushiImg";
        sushiImg.style.backgroundImage=sushi.img;

       /* //hover em anum sushineri nkarnery 1-in div-um
        sushiImg.addEventListener("mouseover",function(){
            sushiImg.style.backgroundImage=sushi.imgHover;
        })
        sushiImg.addEventListener("mouseout",function(){
            sushiImg.style.backgroundImage=sushi.img;
        })*/
        element.append(sushiImg); 
        //1-in div-i sushineri taki teqsty
    let sushiText=document.createElement("div");
        sushiText.className="sushiText";
        element.append(sushiText);
   
        //inch petq e gri roll ev set-i mej
        if(sushi.typeProduct=="roll"){  
            sushiText.innerHTML=`         
                <h2>${sushi.name}</h2>
                <p>${sushi.compound}</p>
                <p class="price">${sushi.price}р.</p>                    
                `
         }else{
            sushiText.innerHTML=`
                <h2>${sushi.name}</h2>
                <p>${sushi.compound}</p>
                <p class="price">${sushi.price}р.</p>                    
                `
         }

    //1-in button-y
    let sushiBtn=document.createElement("button");
        sushiBtn.className="sushiBtn",
        sushiBtn.innerHTML="Заказать";
        element.append(sushiBtn);

    //srtiky texadrum em sushiItem-i mej ev vran function 
    //em avelacnum   
    let heart=element.querySelector(".fa-heart");
        heart.addEventListener("click", function(){
            heart.style.color="#ff6047";
        let cloneHeart=element.cloneNode(true);
                prefferBody2.append(cloneHeart);
            })

//stexcum em 2-rd mec spitak div@ erb arajin angam sexmum em 
//button-i vra
    sushiBtn.addEventListener("click", function(){
        document.body.style.overflowY="hidden";
        //stexcum em nkary, sushi-yi informacian
        let sushiBig=document.createElement("div");
            sushiBig.className="sushiBig";
            element.after(sushiBig);    
        let sushiItemBig=document.createElement("div");
            sushiItemBig.className="sushiItemBig";
            sushiBig.append(sushiItemBig);    
        let sushiImgBig=document.createElement("div");
            sushiImgBig.className="sushiImgBig";
            sushiImgBig.style.backgroundImage=sushi.img;
            sushiItemBig.append(sushiImgBig);    
        let sushiTextBig=document.createElement("div");
            sushiTextBig.className="sushiTextBig";

            if(sushi.typeProduct=="roll"){ 
                sushiTextBig.innerHTML=`         
                    <h2>${sushi.name}</h2>
                    <p class="price">${sushi.price}р.</p> 
                    <p>${sushi.compoundOpen}</p>                                       
                    `
             }else{
                sushiTextBig.innerHTML=`
                    <h2>${sushi.name}</h2>
                    <p class="price">${sushi.price}р.</p> 
                    <p>${sushi.compoundOpen}</p>                                       
                    `
            }  
                          
            sushiItemBig.append(sushiTextBig);

            let countOrder=1;
        //stexcum em 2-rd div-i button-y
        let sushiBigBtn=document.createElement("button");
            sushiBigBtn.className="sushiBigBtn";
            sushiBigBtn.innerHTML="Заказать";
            sushiTextBig.append(sushiBigBtn);

    //click em anum 2-rd div-i buttonin, bacvum e patveri 3-rd divy,
    //voric heto bacvum e order div-y
        sushiBigBtn.addEventListener("click", function(){
            closeSushiItem();//paki sushiItem div-y
            document.body.style.overflowY="hidden"; //berum e scrolly   
                order.style.display="block";
            let whiteClose=document.querySelector(".whiteClose");
                whiteClose.addEventListener("click", function(){
                    order.style.display="none";
                    //berum enq scrolly
                    document.body.style.overflowY="auto";
                })
        })

        //stexcum enq verjin order div-i meji orderClone div-y,
        //vortex texadrvum en srtik, nkar, anun, + ev -, qanaky,
        //gumary ev X, vori vra sexmelov, 4 vayrkyan heto delate e 
        //linum tvyal sushin naxyntracneri cankic
            let clone=element.cloneNode(true);
            let orderClone=document.querySelector(".orderClone");
                orderClone.append(clone);
                    clone.className="clone";
            let cloneBtn=clone.querySelector(".sushiBtn");
                    cloneBtn.innerHTML="X";

                cloneBtn.addEventListener("click", function(){
                    let rimoveTime=4;
                    setInterval(function(){
                        cloneBtn.innerHTML=rimoveTime;
                            rimoveTime--;
                            if(rimoveTime<0){
                                clone.remove();
                                hashvark();
                                countAllOrder();
                            }
                    },1000)
                })
                let cloneText=clone.querySelector(".sushiText");
                    cloneText.innerHTML=`
                            <h3>${sushi.name} </h3>                         
                            <i class="fa-solid fa-circle-minus"></i> 
                            <span class="count"> ${countOrder} </span> 
                            <i class="fa-solid fa-circle-plus"></i>
                            <span class="priceOneType">${countOrder*sushi.price}</span><span class="money">р.</span>
                            `
                            blockBasket();
                            hashvark();
                            countAllOrder();

                let plus=clone.querySelector(".fa-circle-plus");
                let minus=clone.querySelector(".fa-circle-minus");
                let count=clone.querySelector(".count");

                let oneSushiPrice=0;     

                    console.log(priceAllOrderDiv);
            //sexmelov + kam - i vra avelacnum, kam pakasecnum enq
            //naxyntrac sushineri qanaky
                let priceOneType=clone.querySelector(".priceOneType");
                    plus.addEventListener("click", function(){
                        countOrder++;                
                        count.innerHTML=countOrder;
                        oneSushiPrice=countOrder*sushi.price;              
                        priceOneType.innerHTML=oneSushiPrice;
                    
                        hashvark();
                        countAllOrder();   
                    })
                    minus.addEventListener("click", function(){
                        if(countOrder>1){
                        countOrder--;                
                        count.innerHTML=countOrder;
                        oneSushiPrice=countOrder*sushi.price;               
                        priceOneType.innerHTML=oneSushiPrice;        
                        
                        hashvark();
                        countAllOrder();
                        }
                    })
                let allPrice=order.querySelectorAll(".priceOneType");

                sushiTextBig.append(sushiBigBtn); 
                
                let whiteClose=order.querySelector(".whiteClose");
                whiteClose.addEventListener("click", function(){
                    order.style.display="none";
                    //berum enq scrolly
                    document.body.style.overflowY="auto";
                })

        //stexcum em 1-in div-i verevi aji pakox X
        let close=document.createElement("button");
            close.className="close";
            close.innerHTML="X";
            sushiBig.append(close);
            close.addEventListener("click", closeSushiItem)
                function closeSushiItem(){
                    sushiBig.remove();
                    document.body.style.overflowY="auto";
            }
        //stexcum em 1-in div-i verevi dzaxi More products
        let moreProducts=document.createElement("button");
            moreProducts.className="moreProducts";
            moreProducts.innerHTML=`<i class="fa-solid fa-arrow-left"></i> more products`;
            sushiBig.prepend(moreProducts);
            moreProducts.addEventListener("click", closeSushiItem);
        //stexcum em zambyuxy
        let basket=document.querySelector(".basket");
            basket.addEventListener("click", function(){
        let order=document.querySelector(".order");
            order.style.display="block";

            closeSushiItem()
        })
    }
)}
//ays function-ov verjum talis e yndhanur gumary
function hashvark(){
    let all=order.querySelectorAll(".priceOneType");
    let sum=0;

    for(let i=0;i<all.length;i++){
        sum+= +all[i].innerHTML
    }
    priceAllOrderDiv.innerHTML="Сумма: "+sum +"р.";
}

//ays function-ov hashvum e mer bolor yntracneri yndhanur gumary
function countAllOrder(){
    let countAll=order.querySelectorAll(".count");
    let sumCount=0;
    for(let i=0; i<countAll.length; i++){
        sumCount+= +countAll[i].innerHTML;
    }
    countAllOrderDiv.innerHTML=sumCount;

    if(sumCount==0){
        basketBlock.style.display="none";
        order.style.display="none";
        document.body.style.overflowY="auto";
    }
}
//zambyuxi function e
function blockBasket(){
    basketBlock.style.display="block";
}   


//caurusel
let container=document.querySelector("#container");
let sliderItems=container.querySelectorAll(".containerItem");
let btnPrev=document.querySelector("#btn_prev");
let btnNext=document.querySelector("#btn_next");
    console.log(container);
    console.log(sliderItems);
    console.log(btnPrev);
    console.log(btnNext);

sliderItems.forEach(function(slide, index){
    if(index!=0){
        slide.classList.add("hiddenSlide")
    }
        sliderItems[0].setAttribute("data-active","")
        slide.dataset.index=index;

        slide.addEventListener("click",nextImg)
        function nextImg(){
            slide.classList.add("hiddenSlide")
            slide.removeAttribute("data-active")
            let slideNextIndex;
            if(index==sliderItems.length-1){
                slideNextIndex=0;
            }else{
                slideNextIndex=index+1
            }
            let nextSlide=container.querySelector(`[data-index="${slideNextIndex}"]`);
                console.log(nextSlide);
            nextSlide.classList.remove("hiddenSlide");
            nextSlide.setAttribute("data-active","");
        }
    })
    btnNext.onclick=function(){
        let currentSlide=container.querySelector("[data-active]");
            console.log(currentSlide);
        let currentSlideIndex= +currentSlide.dataset.index;
            console.log(currentSlideIndex);
        currentSlide.classList.add("hiddenSlide");
        currentSlide.removeAttribute("data-active","");
        let slideNextIndex;
        if(currentSlideIndex==sliderItems.length-1){
            slideNextIndex=0;
        }else{
            slideNextIndex=currentSlideIndex+1;
        }
        let nextSlide=container.querySelector(`[data-index="${slideNextIndex}"]`);
            console.log(nextSlide);
        nextSlide.classList.remove("hiddenSlide");
        nextSlide.setAttribute("data-active","");
    }
    btnPrev.onclick=function(){
        let currentSlide=container.querySelector("[data-active]");
        let currentSlideIndex= +currentSlide.dataset.index;
        currentSlide.classList.add("hiddenSlide");
        currentSlide.removeAttribute("data-active","");
        let slideNextIndex;
        if(currentSlideIndex==0){
            slideNextIndex=sliderItems.length-1;
        }else{
            slideNextIndex=currentSlideIndex-1;
        }
        let nextSlide=container.querySelector(`[data-index="${slideNextIndex}"]`);
            console.log(nextSlide);
        nextSlide.classList.remove("hiddenSlide");
        nextSlide.setAttribute("data-active","");
    }