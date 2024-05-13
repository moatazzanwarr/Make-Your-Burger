
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

const card_pr_1 = document.createElement("div");



const card_1_pr_img = document.createElement('div');
card_1_pr_img.style.cssText = "height: 50px;";

const card_img_1 = document.createElement('img');
card_img_1.src = `${srcs[0]}`;
card_img_1.style.cssText= "width:100%";
card_1_pr_img.appendChild(card_img_1)

const card_1_h4 = document.createElement('h4');
card_1_h4.innerText = `${vegetables[0]}`;
card_1_h4.style.cssText = "text-align: center;";

const card_1_div = document.createElement('div');
card_1_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_1.append(card_1_pr_img, card_1_h4, card_1_div);

let i = 0;
const card_span_1 = document.createElement("span");
card_span_1.innerText = "-";
card_span_1.style.cssText = "cursor: pointer;";
card_span_1.addEventListener("click", () => {

})


const card_span_2 = document.createElement("span");
card_span_2.textContent = i;

card_span_1.addEventListener("click", () => {
    if (i > 0) {
        card_span_2.innerText = --i;
    }
    const remove_img = section_2_div_1_2.querySelectorAll("section div:first-child div:nth-child(2) img");
    console.log(remove_img);

    for (let i = 0; i < remove_img.length; i++) {
        if(remove_img[i].src == "http://127.0.0.1:5500/images/add/cutlet.png"){
            console.log(remove_img[i].src);
            remove_img[i].remove();
            break
        }

    }
})

const card_span_3 = document.createElement("span");
card_span_3.innerText = "+";
card_span_3.style.cssText = "cursor: pointer;";

const add_cutlet = document.createElement("img");
add_cutlet.src = "images/add/cutlet.png";
add_cutlet.style.cssText = "margin-bottom: -35px; position: relative; z-index: 2;"

card_span_3.addEventListener("click", () => {
    if (i < 3) {
        ++i;
        card_span_2.innerText = i;
        section_2_div_1_2.innerHTML += `
            <img src="images/add/cutlet.png" class="cutlet-img"/>
        `;
        console.log(section_2_div_1_2);
    }
    
    const cutlet_img = document.querySelectorAll('.cutlet-img');
    for (let i = 0; i < cutlet_img.length; i++) {
        cutlet_img[i].style.cssText = "margin-bottom: -40px; position: relative; z-index: 2;";
    }
})



card_1_div.append(card_span_1, card_span_2, card_span_3);



////


const card_pr_2 = document.createElement("div");

const card_2_pr_img = document.createElement('div');
card_2_pr_img.style.cssText = "height: 50px;";

const card_img_2 = document.createElement('img');
card_img_2.src = `${srcs[1]}`;
card_img_2.style.cssText= "width:100%";
card_2_pr_img.appendChild(card_img_2)

const card_2_h4 = document.createElement('h4');
card_2_h4.innerText = `${vegetables[1]}`;
card_2_h4.style.cssText = "text-align: center;";

const card_2_div = document.createElement('div');
card_2_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_2.append(card_2_pr_img, card_2_h4, card_2_div);

const card_2_span_1 = document.createElement("span");
card_2_span_1.innerText = "-";
card_2_span_1.style.cssText = "cursor: pointer;";
card_2_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_mayo)
})

const card_2_span_2 = document.createElement("span");
card_2_span_2.innerText = 0;

const card_2_span_3 = document.createElement("span");
card_2_span_3.innerText = "+";
card_2_span_3.style.cssText = "cursor: pointer;";

const add_mayo = document.createElement("img");
add_mayo.src = "images/add/mayo.png";
add_mayo.style.cssText = "margin-bottom: -45px; position: relative; z-index: 2;"

card_2_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_mayo);
    card_2_span_2 = +card_2_span_2++;
})
card_2_div.append(card_2_span_1, card_2_span_2, card_2_span_3)

/////

const card_pr_3 = document.createElement("div");

const card_3_pr_img = document.createElement('div');
card_3_pr_img.style.cssText = "height: 50px;";

const card_img_3 = document.createElement('img');
card_img_3.src = `${srcs[2]}`;
card_img_3.style.cssText= "width:100%";
card_3_pr_img.appendChild(card_img_3)

const card_3_h4 = document.createElement('h4');
card_3_h4.innerText = `${vegetables[2]}`;
card_3_h4.style.cssText = "text-align: center;";

const card_3_div = document.createElement('div');
card_3_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_3.append(card_3_pr_img, card_3_h4, card_3_div);

const card_3_span_1 = document.createElement("span");
card_3_span_1.innerText = "-";
card_3_span_1.style.cssText = "cursor: pointer;";
card_3_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_onion);
})

const card_3_span_2 = document.createElement("span");
card_3_span_2.innerText = 0;

const card_3_span_3 = document.createElement("span");
card_3_span_3.innerText = "+";
card_3_span_3.style.cssText = "cursor: pointer;";

const add_onion = document.createElement("img");
add_onion.src = "images/add/onion.png";
add_onion.style.cssText = "margin-bottom: -35px; position: relative; z-index: 2;";

card_3_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_onion);
    card_3_span_2 = +card_3_span_2++;
})
card_3_div.append(card_3_span_1, card_3_span_2, card_3_span_3);

/////


const card_pr_4 = document.createElement("div");

const card_4_pr_img = document.createElement('div');
card_4_pr_img.style.cssText = "height: 50px;";

const card_img_4 = document.createElement('img');
card_img_4.src = `${srcs[3]}`;
card_img_4.style.cssText= "width:100%";
card_4_pr_img.appendChild(card_img_4)

const card_4_h4 = document.createElement('h4');
card_4_h4.innerText = `${vegetables[3]}`;
card_4_h4.style.cssText = "text-align: center;";

const card_4_div = document.createElement('div');
card_4_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_4.append(card_4_pr_img, card_4_h4, card_4_div);

const card_4_span_1 = document.createElement("span");
card_4_span_1.innerText = "-";
card_4_span_1.style.cssText = "cursor: pointer;";
card_4_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_tomato);
})

const card_4_span_2 = document.createElement("span");
card_4_span_2.innerText = 0;

const card_4_span_3 = document.createElement("span");
card_4_span_3.innerText = "+";
card_4_span_3.style.cssText = "cursor: pointer;";

const add_tomato = document.createElement("img");
add_tomato.src = "images/add/tomato.png";
add_tomato.style.cssText = "margin-bottom: -35px; position: relative; z-index: 2;"

card_4_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_tomato);
    card_4_span_2 = +card_4_span_2++;
})
card_4_div.append(card_4_span_1, card_4_span_2, card_4_span_3);


///

const card_pr_5 = document.createElement("div");

const card_5_pr_img = document.createElement('div');
card_5_pr_img.style.cssText = "height: 50px;";

const card_img_5 = document.createElement('img');
card_img_5.src = `${srcs[4]}`;
card_img_5.style.cssText= "width:100%";
card_5_pr_img.appendChild(card_img_5)

const card_5_h4 = document.createElement('h4');
card_5_h4.innerText = `${vegetables[4]}`;
card_5_h4.style.cssText = "text-align: center;";

const card_5_div = document.createElement('div');
card_5_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_5.append(card_5_pr_img, card_5_h4, card_5_div);

const card_5_span_1 = document.createElement("span");
card_5_span_1.innerText = "-";
card_5_span_1.style.cssText = "cursor: pointer;";
card_5_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_cucumber);
})

const card_5_span_2 = document.createElement("span");
card_5_span_2.innerText = 0;

const card_5_span_3 = document.createElement("span");
card_5_span_3.innerText = "+";
card_5_span_3.style.cssText = "cursor: pointer;";

const add_cucumber = document.createElement("img");
add_cucumber.src = "images/add/cucumber.png";
add_cucumber.style.cssText = "margin-bottom: -35px; position: relative; z-index: 2;"

card_5_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_cucumber);
    card_5_span_2 = +card_5_span_2++;
})
card_5_div.append(card_5_span_1, card_5_span_2, card_5_span_3);

///


const card_pr_6 = document.createElement("div");

const card_6_pr_img = document.createElement('div');
card_6_pr_img.style.cssText = "height: 50px;";

const card_img_6 = document.createElement('img');
card_img_6.src = `${srcs[5]}`;
card_img_6.style.cssText= "width:100%";
card_6_pr_img.appendChild(card_img_6)

const card_6_h4 = document.createElement('h4');
card_6_h4.innerText = `${vegetables[5]}`;
card_6_h4.style.cssText = "text-align: center;";

const card_6_div = document.createElement('div');
card_6_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_6.append(card_6_pr_img, card_6_h4, card_6_div);

const card_6_span_1 = document.createElement("span");
card_6_span_1.innerText = "-";
card_6_span_1.style.cssText = "cursor: pointer;";
card_6_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_cheese);
})

const card_6_span_2 = document.createElement("span");
card_6_span_2.innerText = 0;

const card_6_span_3 = document.createElement("span");
card_6_span_3.innerText = "+";
card_6_span_3.style.cssText = "cursor: pointer;";

const add_cheese = document.createElement("img");
add_cheese.src = "images/add/cheese.png";
add_cheese.style.cssText = "margin-bottom: -45px; position: relative; z-index: 2;"

card_6_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_cheese);
    card_6_span_2 = +card_6_span_2++;
})
card_6_div.append(card_6_span_1, card_6_span_2, card_6_span_3);

////


const card_pr_7 = document.createElement("div");

const card_7_pr_img = document.createElement('div');
card_7_pr_img.style.cssText = "height: 50px;";

const card_img_7 = document.createElement('img');
card_img_7.src = `${srcs[6]}`;
card_img_7.style.cssText= "width:100%";
card_7_pr_img.appendChild(card_img_7)

const card_7_h4 = document.createElement('h4');
card_7_h4.innerText = `${vegetables[6]}`;
card_7_h4.style.cssText = "text-align: center;";

const card_7_div = document.createElement('div');
card_7_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_7.append(card_7_pr_img, card_7_h4, card_7_div);

const card_7_span_1 = document.createElement("span");
card_7_span_1.innerText = "-";
card_7_span_1.style.cssText = "cursor: pointer;";
card_7_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_salad);
})

const card_7_span_2 = document.createElement("span");
card_7_span_2.innerText = 0;

const card_7_span_3 = document.createElement("span");
card_7_span_3.innerText = "+";
card_7_span_3.style.cssText = "cursor: pointer;";

const add_salad = document.createElement("img");
add_salad.src = "images/add/salad.png";
add_salad.style.cssText = "margin-bottom: -40px; position: relative; z-index: 2;"

card_7_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_salad);
    card_7_span_2 = +card_6_span_2++;
})
card_7_div.append(card_7_span_1, card_7_span_2, card_7_span_3);


///////


const card_pr_8 = document.createElement("div");

const card_8_pr_img = document.createElement('div');
card_8_pr_img.style.cssText = "height: 50px;";

const card_img_8 = document.createElement('img');
card_img_8.src = `${srcs[7]}`;
card_img_8.style.cssText= "width:100%";
card_8_pr_img.appendChild(card_img_8)

const card_8_h4 = document.createElement('h4');
card_8_h4.innerText = `${vegetables[7]}`;
card_8_h4.style.cssText = "text-align: center;";

const card_8_div = document.createElement('div');
card_8_div.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding: 15px; color: #1F2939;";
card_pr_8.append(card_8_pr_img, card_8_h4, card_8_div);

const card_8_span_1 = document.createElement("span");
card_8_span_1.innerText = "-";
card_8_span_1.style.cssText = "cursor: pointer;";
card_8_span_1.addEventListener("click", () => {
    section_2_div_1_2.removeChild(add_bun_middle);
})

const card_8_span_2 = document.createElement("span");
card_8_span_2.innerText = 0;

const card_8_span_3 = document.createElement("span");
card_8_span_3.innerText = "+";
card_8_span_3.style.cssText = "cursor: pointer;";

const add_bun_middle = document.createElement("img");
add_bun_middle.src = "images/add/bun_middle.png";
add_bun_middle.style.cssText = "margin-bottom: -60px; position: relative; z-index: 2;"

card_8_span_3.addEventListener("click", () => {
    section_2_div_1_2.appendChild(add_bun_middle);
    card_8_span_2 = +card_8_span_2++;
})
card_8_div.append(card_8_span_1, card_8_span_2, card_8_span_3);


section_2_div_2.append(card_pr_1, card_pr_2, card_pr_3, card_pr_4, card_pr_5, card_pr_6, card_pr_7, card_pr_8);

