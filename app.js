const btn1 = document.getElementById("btn1")
const itemcontainer = document.querySelector("#itembox");
let body = document.querySelector("body")
var count = 1;

// Onclick function--------------------------------

function myFunction() {
    body.style.background = "lightgrey";
    let box = document.getElementById("inputbox");
    box.innerHTML = `<div class="inputtask">
        <input type="text" placeholder="please type here!" id="item">
        <button id="btn2">Done</button>
    </div>
    <div class="choosecolor">
        <span id="cancel"><i class="fa-solid fa-xmark"></i></span>
        <button id="btn3" class="size1"></button>
        <button id="btn4" class="size1"></button>
        <button id="btn5" class="size1"></button>
        <button id="btn6" class="size1"></button>
    </div>`


    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click",function(){
        box.innerHTML = "";
    })
    
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",function(){
        let newdiv = document.createElement("div");
        newdiv.setAttribute("class","box")
        newdiv.setAttribute("id",`box${count}`)
        newdiv.innerHTML = ` <div class="color"></div>
        <div class="write"></div>
        <div class="font">
            <span><i class="fa-solid fa-check"></i></span>
            <span><i class="fa-solid fa-trash"></i></span>
            <span><i class="fa-solid fa-pen"></i></span>
            <span id="lock"><i class="fa-solid fa-lock"></i></span>
        </div>`