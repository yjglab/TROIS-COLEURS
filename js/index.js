const bleu = document.querySelector("#BLEU"),
    blanc = document.querySelector("#BLANC"),
    rouge = document.querySelector("#ROUGE");


const fontTitle = document.querySelector(".main__header__title");
const fontActor = document.querySelector(".main__header__actor");
const fontDirector = document.querySelector(".main__header__director");

const sideBar1 = document.querySelector(".mv__bar1");
const sideBar2 = document.querySelector(".mv__bar2");
const topBar = document.querySelector(".background__bar-top");
const botBar = document.querySelector(".background__bar-bottom");
const back = document.querySelector(".background__back-2");


const fontBaseColor = "#ffffff"

function mouseOver_bleu() {
    back.src = "img/bg-back-bleu.jpg";
    fontTitle.style.color = "#0055a4";
    fontActor.style.color = "#0055a4";
    fontDirector.style.color = "#0055a4";
    sideBar1.style.backgroundColor = "#0055a4";
    sideBar2.style.backgroundColor = "#0055a4";
    topBar.style.backgroundColor = "#0055a4";
    botBar.style.backgroundColor = "#0055a4";
    
}
function mouseOut_bleu() {
    back.src = "img/bg-back-2.jpg";
    fontTitle.style.color = fontBaseColor;
    fontActor.style.color = fontBaseColor;
    fontDirector.style.color = fontBaseColor;
    sideBar1.style.backgroundColor = fontBaseColor;
    sideBar2.style.backgroundColor = fontBaseColor;
    topBar.style.backgroundColor = fontBaseColor;
    botBar.style.backgroundColor = fontBaseColor;
}
function mouseOver_blanc() {
    back.src = "img/bg-back-blanc.jpg";
    fontTitle.style.color = "#ffffff";
    fontActor.style.color = "#ffffff";
    fontDirector.style.color = "#ffffff";
    sideBar1.style.backgroundColor = "#ffffff";
    sideBar2.style.backgroundColor = "#ffffff";
    topBar.style.backgroundColor = "#ffffff";
    botBar.style.backgroundColor = "#ffffff";
}
function mouseOut_blanc() {
    back.src = "img/bg-back-2.jpg";
    fontTitle.style.color = fontBaseColor;
    fontActor.style.color = fontBaseColor;
    fontDirector.style.color = fontBaseColor;
    sideBar1.style.backgroundColor = fontBaseColor;
    sideBar2.style.backgroundColor = fontBaseColor;
    topBar.style.backgroundColor = fontBaseColor;
    botBar.style.backgroundColor = fontBaseColor;
}
function mouseOver_rouge() {
    back.src = "img/bg-back-rouge.jpg";
    fontTitle.style.color = "#ef4135";
    fontActor.style.color = "#ef4135";
    fontDirector.style.color = "#ef4135";
    sideBar1.style.backgroundColor = "#ef4135";
    sideBar2.style.backgroundColor = "#ef4135";
    topBar.style.backgroundColor = "#ef4135";
    botBar.style.backgroundColor = "#ef4135";
}
function mouseOut_rouge() {
    back.src = "img/bg-back-2.jpg";
    fontTitle.style.color = fontBaseColor;
    fontActor.style.color = fontBaseColor;
    fontDirector.style.color = fontBaseColor;
    sideBar1.style.backgroundColor = fontBaseColor;
    sideBar2.style.backgroundColor = fontBaseColor;
    topBar.style.backgroundColor = fontBaseColor;
    botBar.style.backgroundColor = fontBaseColor;
}

function init() {
    bleu.addEventListener("mouseover", mouseOver_bleu);
    bleu.addEventListener("mouseout", mouseOut_bleu);
    blanc.addEventListener("mouseover", mouseOver_blanc);
    blanc.addEventListener("mouseout", mouseOut_blanc);
    rouge.addEventListener("mouseover", mouseOver_rouge);
    rouge.addEventListener("mouseout", mouseOut_rouge);
}
init();