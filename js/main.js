
document.body.style.cssText = "font-family:Open Sans; padding: 0; margin: 0; box-sizing: border-box;"

const main = document.createElement("main");
document.body.appendChild(main);
main.style.cssText = "height: 100vh; overflow: hidden; ";

main.className = "main-home";

const header = document.createElement("header");
main.appendChild(header);
header.style.cssText = "height: 80px; width: 100%; position: fixed; left: 0; top: 0; z-index: 5";

const nav = document.createElement("nav");
header.appendChild(nav);
nav.style.cssText = "height: 100%; width: 80%; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;";

const div_1 = document.createElement("div");
const div_2 = document.createElement("div");
div_1.className = "div-1";
div_2.className = "div-2";
nav.append(div_1, div_2);

div_1.style.cssText = "display: flex; align-items: center;";
div_2.style.cssText = "display: flex; align-items: center;";

const img_1 = document.createElement("img");
const link_1 = document.createElement("a");
const link_2 = document.createElement("a");
link_1.href = "#";
link_2.href = "#";
div_1.append(img_1, link_1, link_2);
img_1.src = "images/a.png";
link_1.innerText = "Discover";
link_2.innerText = "Make Your Burger";

img_1.style.cssText = "margin: 0 60px 0 0 ;"
link_1.style.cssText = "display: inline-block; margin: 0 0 0 20px; text-decoration: none; color: #1F2939; font-size: 16px;";
link_2.style.cssText = "display: inline-block; margin: 0 0 0 20px; text-decoration: none; color: #1F2939; font-size: 16px;";

const link_3 = document.createElement("a");
const link_4 = document.createElement("a");
const img_2 = document.createElement("img");
link_3.href = "#";
link_4.href = "#";
img_2.src = "images/image 404.png";
div_2.append(link_3, link_4, img_2);
link_3.innerHTML = "<i class='fa-solid fa-phone'></i> Call Me Back";
link_4.innerText = "+201002303648";
link_3.style.cssText = "display: inline-block; margin: 0 20px 0 0 ; padding: 5px 20px; border-radius: 25px; text-decoration: none; color: #1F2939; font-size: 16px; color: #FF4D4F; background: #FFEDED;";
link_4.style.cssText = "display: inline-block; margin: 0 20px 0 0 ; text-decoration: none; color: #1F2939; font-size: 16px;";
img_2.style.cssText = "display: inline-block; margin: 0 20px 0 40px ;";





const main_content = document.createElement("div");
main.appendChild(main_content);
main_content.style.cssText = "height: 100vh; width: 80%; margin: 0 auto; display: flex; align-items; center; justofy-content: space-between;";

const div_3 = document.createElement("div");
const div_4 = document.createElement("div");
main_content.append(div_3, div_4);

div_3.className = "div-3";
div_4.className = "div-4";
div_3.style.cssText = "width:50%; height: 100%; display:flex; align-items: center";
div_4.style.cssText = "width:50%; height: 100%; display:flex; align-items: center; position: relative;";

const text = document.createElement("h1");
div_3.appendChild(text);
text.innerText = "Make Your Burger";
text.style.cssText = "width: 50px; font-size: 50px; color: #1F2939; ";

const burger_img = document.createElement("img");
div_4.appendChild(burger_img);
burger_img.className = "burger-img";
burger_img.src = "images/main-img.png";
burger_img.style.cssText = "width: 100% "


const make_burger_btn = document.createElement("div");

div_4.appendChild(make_burger_btn);

make_burger_btn.innerText = "make burger";
make_burger_btn.style.cssText = "width: 150px; height: 150px; background: #5243C2; border-radius: 50%;display: flex; align-items: center; justify-content: center; text-transform: uppercase; cursor: pointer; color: #FFF; position: absolute; bottom: 170px; left: -90px";

make_burger_btn.addEventListener("click", () => {
    const main_home = document.querySelector(".main-home");
    main_home.style.cssText = "display: none;";
    // header.style.cssText = "display: none;"
});


///////////////////////////  //////////////////////////////



const section_2 = document.createElement("section");
document.body.appendChild(section_2);
section_2.style.cssText = "height: 100vh; width: 80%; overflow: hidden; margin: 0 auto; ";

const section_2_div_1 = document.createElement("div");
const section_2_div_2 = document.createElement("div");

section_2.append(section_2_div_1, section_2_div_2);

section_2_div_1.style.cssText = "height: 75vh; display: flex; align-items: center; justify-content: space-between;";

const section_2_div_1_1 = document.createElement("div");
const section_2_div_1_2 = document.createElement("div");
section_2_div_1_2.className = "pr-burger";
const section_2_div_1_3 = document.createElement("div");

section_2_div_1_1.style.cssText = "width: 33.33%; display: flex; align-items: center; height: 100%; ";
section_2_div_1_2.style.cssText = "height: 100%; width: 25%; overflow: hidden; display: flex; justify-content: end; flex-direction: column-reverse; background-image: url('images/add/background.png')";
section_2_div_1_3.style.cssText = "width: 33.33%;  padding: 0 0 0 30px;";
section_2_div_1.append(section_2_div_1_1, section_2_div_1_2, section_2_div_1_3);

const section_2_div_1_h1 = document.createElement("h1");
section_2_div_1_1.appendChild(section_2_div_1_h1);
section_2_div_1_h1.innerText = "Make Your Burger";
section_2_div_1_h1.style.cssText = "width: 50px; font-size: 50px; color: #1F2939;";

const section_2_div_1_bun = document.createElement("img");
section_2_div_1_bun.src = "images/bun_bottom.png";
section_2_div_1_bun.style.cssText = "width: 100%; position: relative; z-index: 1;";
section_2_div_1_2.appendChild( section_2_div_1_bun );


const section_2_div_1_3_3 = document.createElement("div");
section_2_div_1_3.appendChild(section_2_div_1_3_3);
const section_2_div_1_3_h1 = document.createElement("h1");
const section_2_div_1_3_div = document.createElement("div");
section_2_div_1_3_3.append(section_2_div_1_3_h1, section_2_div_1_3_div);
section_2_div_1_3_h1.innerText = "Summary";
section_2_div_1_3_h1.style.cssText = "font-size: 36px; color: #1F2939"
section_2_div_1_3_div.style.cssText = "display: flex; justify-content: space-between; align-items: center;";


const section_2_div_1_3_div_span_1 = document.createElement("span");
const section_2_div_1_3_div_span_2 = document.createElement("span");

section_2_div_1_3_div.append(section_2_div_1_3_div_span_1, section_2_div_1_3_div_span_2);

section_2_div_1_3_div_span_1.innerText = "$0.00";
section_2_div_1_3_div_span_1.style.cssText = "font-size: 36px; color: #5243C2;"
section_2_div_1_3_div_span_2.innerText = "Checkout";
section_2_div_1_3_div_span_2.style.cssText = "font-size: 16px; color: #FFF; padding: 5px 20px; background: #5243C2; border-radius: 25px; cursor: pointer;"

//////

const srcs = [
    "images/add/cutlet.png",
    "images/add/mayo.png", 
    "images/add/onion.png", 
    "images/add/tomato.png", 
    "images/add/cucumber.png", 
    "images/add/cheese.png",
    "images/add/salad.png",
    "images/add/bun_middle.png"
]

const vegetables = [
    "Cutlet",
    "Mayo", 
    "Onion", 
    "Tomato", 
    "Cucumber", 
    "Cheese",
    "Salad",
    "Bun"
]


section_2_div_2.style.cssText = "height: 25vh; width: 100%; margin: 0 auto; display: grid; grid-template-columns: repeat(8, 1fr); grid-gap: 20px;";

let style = (cssStyle) => {
    let head = document.head;
    let style = document.createElement("style");
    style.appendChild(document.createTextNode(cssStyle));
    head.appendChild(style);
}

for(let i = 0; srcs.length > i; i++){
    // Create Elements
    let cards = document.createElement("div");
    cards.className = "cards";

    let pr_imgs = document.createElement("div");
    pr_imgs.className = "pr_imgs";

    let img = document.createElement('img');
    img.src = srcs[i];
    img.className = "img";

    let h4 = document.createElement("h4");
    h4.innerText = vegetables[i];
    h4.className = "h4";

    let pr_spans = document.createElement("div");
    pr_spans.className = "pr_spans";

    let plus = document.createElement("span");
    plus.innerText = "+";

    let count = document.createElement("span");
    count.innerText = "0";

    let minus = document.createElement('span');
    minus.innerText = "-";

    // append childs
    pr_imgs.appendChild(img);
    pr_spans.append(plus, count, minus);

    cards.append(pr_imgs, h4, pr_spans);

    section_2_div_2.appendChild(cards);
}

style(`
.cards{
    width: 100px;
    overflow: hidden;
}
.pr_imgs{
    width: 100%;
    height: 50px;
}
.pr_imgs img{
    width: 100%;
}

.cards > h4{
    text-align: center;
}

.pr_spans{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pr_spans span:nth-child(odd){
    cursor: pointer;
}


`)

let spans_add_remove = document.querySelectorAll(".pr_spans span:nth-child(odd)");
let spans_count = document.querySelectorAll(".pr_spans span:nth-child(2)");


let burger_images = document.querySelectorAll(".pr-burger img");

// مبتشتغلش لما بتكون جوة ال ادد
let i = 0;
spans_add_remove[0].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i < 3 ){
        spans_count[0].innerText = ++i;
        let img = document.createElement("img");
        img.src = srcs[0];
        img.className = vegetables[0];
        pr_burger = document.querySelector(".pr-burger");
        pr_burger.appendChild(img);

    }
    console.log(burger_images);
    
    
})


spans_add_remove[1].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/cutlet.png']");

    if(i > 0 ){
        spans_count[0].innerText = --i;
        remove_img[0].remove();
    }
})

let i_2 = 0;
spans_add_remove[2].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_2 < 3 ){
        spans_count[1].innerText = ++i_2;
        let img = document.createElement("img");
        img.src = srcs[1];
        img.className = vegetables[1];
        pr_burger = document.querySelector(".pr-burger");
        pr_burger.appendChild(img);

    }
    console.log(burger_images);
    
    
})


spans_add_remove[3].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/mayo.png']");

    if(i_2 > 0 ){
        spans_count[1].innerText = --i_2;
        remove_img[0].remove();

    }
})

let i_3 = 0;
spans_add_remove[4].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_3 < 3){
        spans_count[2].innerText = ++i_3;
        let img = document.createElement("img");
        img.src = srcs[2];
        img.className = vegetables[2];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[5].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/onion.png']");

    if(i_3 > 0){
        spans_count[2].innerText = --i_3;
        remove_img[0].remove()
    }
})

let i_4 = 0;
spans_add_remove[6].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_4 < 3){
        spans_count[3].innerText = ++i_4;
        let img = document.createElement("img");
        img.src = srcs[3];
        img.className = vegetables[3];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[7].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/tomato.png']");

    if(i_4 > 0){
        spans_count[3].innerText = --i_4;
        remove_img[0].remove()
    }
})

let i_5 = 0;
spans_add_remove[8].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_5 < 3){
        spans_count[4].innerText = ++i_5;
        let img = document.createElement("img");
        img.src = srcs[4];
        img.className = vegetables[4];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[9].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/cucumber.png']");

    if(i_5 > 0){
        spans_count[4].innerText = --i_5;
        remove_img[0].remove()
    }
})

let i_6 = 0;
spans_add_remove[10].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_6 < 3){
        spans_count[5].innerText = ++i_6;
        let img = document.createElement("img");
        img.src = srcs[5];
        img.className = vegetables[5];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[11].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/cheese.png']");

    if(i_6 > 0){
        spans_count[5].innerText = --i_6;
        remove_img[0].remove()
    }
})

let i_7 = 0;
spans_add_remove[12].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_7 < 3){
        spans_count[6].innerText = ++i_7;
        let img = document.createElement("img");
        img.src = srcs[6];
        img.className = vegetables[6];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[13].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/salad.png']");

    if(i_7 > 0){
        spans_count[6].innerText = --i_7;
        remove_img[0].remove()
    }
})

let i_8 = 0;
spans_add_remove[14].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    if(i_8 < 3){
        spans_count[7].innerText = ++i_8;
        let img = document.createElement("img");
        img.src = srcs[7];
        img.className = vegetables[7];
        pr_burger = document.querySelector(".pr-burger")
        pr_burger.appendChild(img);
    }
    
})

spans_add_remove[15].addEventListener("click", () => {
    burger_images = document.querySelectorAll(".pr-burger img");
    let remove_img = document.querySelectorAll(".pr-burger>img[src='images/add/bun_middle.png']");

    if(i_8 > 0){
        spans_count[7].innerText = --i_8;
        remove_img[0].remove()
    }
})







style(`

.pr-burger img{
    position: relative;
    z-index: 2;
    animation-name: animate;
    animation-duration: .7s;
}
.pr-burger .Cutlet{
    margin-bottom: -35px;
}
.pr-burger .Mayo{
    margin-bottom: -50px;
}
.pr-burger .Onion{
    margin-bottom: -35px;
}
.pr-burger .Tomato{
    margin-bottom: -40px;
}
.pr-burger .Cucumber{
    margin-bottom: -35px;
}
.pr-burger .Cheese{
    margin-bottom: -40px;
}
.pr-burger .Salad{
    margin-bottom: -50px;
}
.pr-burger .Bun{
    margin-bottom: -50px;
}

@keyframes animate{
    0%{
       transform: translateY(-300px);
    }
    100%{
       transform: translateY(0);
    }
 }

`)

















// const card_pr_1 = document.createElement("div");



// const card_1_pr_img = document.createElement('div');
// card_1_pr_img.style.cssText = "height: 50px;";

// const card_img_1 = document.createElement('img');
// card_img_1.src = `${srcs[0]}`;
// card_img_1.style.cssText= "width:100%";
// card_1_pr_img.appendChild(card_img_1)

// const card_1_h4 = document.createElement('h4');
// card_1_h4.innerText = `${vegetables[0]}`;
// card_1_h4.style.cssText = "text-align: center;";

// const card_1_div = document.createElement('div');
// card_1_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
// card_pr_1.append(card_1_pr_img, card_1_h4, card_1_div);

// let i = 0;
// const card_span_1 = document.createElement("span");
// card_span_1.innerText = "-";
// card_span_1.style.cssText = "cursor: pointer;";

// const card_span_2 = document.createElement("span");
// card_span_2.textContent = i;

// card_span_1.addEventListener("click", () => {
//     if (i > 0) {
//         card_span_2.innerText = --i;
//     }
//     const remove_img = section_2_div_1_2.querySelectorAll("section div:first-child div:nth-child(2) img");
//     for (let i = 0; i < remove_img.length; i++) {
//         if(remove_img[i].src == "http://127.0.0.1:5500/images/add/cutlet.png"){
//             remove_img[i].remove();
//             break;
//         }
//     }
// })

// const card_span_3 = document.createElement("span");
// card_span_3.innerText = "+";
// card_span_3.style.cssText = "cursor: pointer;";

// // const add_cutlet = document.createElement("img");
// // add_cutlet.src = "images/add/cutlet.png";
// // add_cutlet.style.cssText = "margin-bottom: -35px; position: relative; z-index: 2;"

// card_span_3.addEventListener("mousedown", () => {
//     if (i < 3) {
//         ++i;
//         card_span_2.innerText = i;
//         section_2_div_1_2.innerHTML += `
//             <img src="images/add/cutlet.png" class="cutlet-img"/>
//         `;
//     }
    
//     const cutlet_img = document.querySelectorAll('.cutlet-img');
//     for (let i = 0; i < cutlet_img.length; i++) {
//         cutlet_img[i].style.cssText = "margin-bottom: -40px; position: relative; top: -300px; z-index: 2; transition: .7s;";

//         card_span_3.addEventListener("mouseup", () => {
//             cutlet_img[i].style.cssText = "margin-bottom: -40px; position: relative; top: 0; z-index: 2; transition: .7s;";
//         })
        
//     }
    
// })

// card_1_div.append(card_span_1, card_span_2, card_span_3);

// ////




// section_2_div_2.append(card_pr_1, card_pr_2, card_pr_3, card_pr_4, card_pr_5, card_pr_6, card_pr_7, card_pr_8);

