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
    
// ===========================================================================
    





