const btnA = document.querySelector(".all");
const btnR = document.querySelector(".red");
const btnY = document.querySelector(".yellow");
const btnB = document.querySelector(".blue");
const btnK = document.querySelector(".black");
const btnCom = document.querySelector(".completed");

const container = document.querySelector(".tasks");
const red = document.querySelector(".redTask");
const yellow = document.querySelector(".yellowTask");
const blue = document.querySelector(".blueTask");
const black = document.querySelector(".blackTask");
const comp = document.querySelector(".complete");

const form = document.querySelector(".myForm");
const fInput = document.querySelector(".fInput");
const fRed = document.querySelector(".fRed");
const fYellow = document.querySelector(".fYellow");
const fBlue = document.querySelector(".fBlue");
const fBlack = document.querySelector(".fBlack");

const btnForm = document.querySelector(".createTask");
const modal = document.querySelector(".overlay");
btnForm.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function (e) {
  modal.classList.remove("open-modal");
});
// const copbtn = document.querySelector(".completed")

btnA.addEventListener("click", () => {
  container.innerHTML = "";
  container.append(red);
  container.append(yellow);
  container.append(blue);
  container.append(black);
  if(red.classList.contains("redTaskRe")){
    red.classList.replace("redTaskRe","redTask")
  }
  if(yellow.classList.contains("yellowTaskRe")){
    yellow.classList.replace("yellowTaskRe","yellowTask")
  }
  if(blue.classList.contains("blueTaskRe")){
    blue.classList.replace("blueTaskRe","blueTask")
  }
  if(black.classList.contains("blackTaskRe")){
    black.classList.replace("blackTaskRe","blackTask")
  }
});
btnR.addEventListener("click", () => {
  container.innerHTML = "";
  container.append(red);
  if(red.classList.contains("redTask")){
    red.classList.replace("redTask","redTaskRe")
  }
});
btnY.addEventListener("click", () => {
  container.innerHTML = "";
  container.append(yellow);
  if(yellow.classList.contains("yellowTask")){
    yellow.classList.replace("yellowTask","yellowTaskRe")
  }
});
btnB.addEventListener("click", () => {
  container.innerHTML = "";
  container.append(blue);
  if(blue.classList.contains("blueTask")){
    blue.classList.replace("blueTask","blueTaskRe")
  }
});
btnK.addEventListener("click", () => {
  container.innerHTML = "";
  container.append(black);
  if(black.classList.contains("blackTask")){
    black.classList.replace("blackTask","blackTaskRe")
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = fInput.value;
  if (task.length > 0) {
    let task_element = document.createElement("div");
    let internalDiv = document.createElement("div");
    internalDiv.classList.add("internalDiv");
    internalDiv.classList.add("overlay2");

    let task_input_element1 = document.createElement("button");
    task_input_element1.classList.add("check");

    // task_input_element1.type = "checkbox";
    // task_input_element1.value = "checkbox";
    // task_input_element1.setAttribute("onclick","if(this.div.checkbox.checked){alert('hai')}")

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    task_input_element1.append(checkbox);
    internalDiv.append(task_input_element1);

    /////////////////////////////////////////////////////////
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    let task_input_element2 = document.createElement("textarea");
    task_input_element2.classList.add("in");

    task_input_element2.type = "text";
    task_input_element2.value = task;
    task_input_element2.setAttribute("readonly", "readonly");
    label.append(task_input_element2);

    ////////////////////////////////////////////////////////
    let edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerText = "\u{1F58A}";
    // edit_button.innerHTML = "<i class='fa-solid fa-pen'></i>";
    internalDiv.append(edit_button);
    ////////////////////////////////////////////////
    let delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerText = "\u{1F5D1}";
    internalDiv.append(delete_button);
    ///////////////////////////////////////////////////

    ///////////////////////////////////////////////////

    let lock = document.createElement("button");
    // let modal2= document.querySelector(".overlay2")
    lock.classList.add("lock");
    lock.classList.add("igg");
    lock.addEventListener("click", () => {
      internalDiv.classList.toggle("overlay2");
      lock.classList.toggle("igg");
    });
    ////////////////////////////////////////////////////
    let colour_buttonR = document.createElement("button");
    colour_buttonR.style.backgroundColor = "red";
    colour_buttonR.addEventListener("click", () => {
      red.append(task_element);
      if (task_element.classList.contains("task-element-y")) {
        task_element.classList.replace("task-element-y", "task-element-r");
      } else if (task_element.classList.contains("task-element-b")) {
        task_element.classList.replace("task-element-b", "task-element-r");
      } else if (task_element.classList.contains("task-element-k")) {
        task_element.classList.replace("task-element-k", "task-element-r");
      }
      internalDiv.classList.add("overlay2");
      lock.classList.add("igg");
    });
    internalDiv.append(colour_buttonR);
    let colour_buttonY = document.createElement("button");
    colour_buttonY.style.backgroundColor = "yellow";
    colour_buttonY.addEventListener("click", () => {
      yellow.append(task_element);
      if (task_element.classList.contains("task-element-r")) {
        task_element.classList.replace("task-element-r", "task-element-y");
      } else if (task_element.classList.contains("task-element-b")) {
        task_element.classList.replace("task-element-b", "task-element-y");
      } else if (task_element.classList.contains("task-element-k")) {
        task_element.classList.replace("task-element-k", "task-element-y");
      }
      internalDiv.classList.add("overlay2");
      lock.classList.add("igg");
    });
    internalDiv.append(colour_buttonY);
    let colour_buttonB = document.createElement("button");
    colour_buttonB.style.backgroundColor = "blue";
    colour_buttonB.addEventListener("click", () => {
      blue.append(task_element);
      if (task_element.classList.contains("task-element-r")) {
        task_element.classList.replace("task-element-r", "task-element-b");
      } else if (task_element.classList.contains("task-element-y")) {
        task_element.classList.replace("task-element-y", "task-element-b");
      } else if (task_element.classList.contains("task-element-k")) {
        task_element.classList.replace("task-element-k", "task-element-b");
      }
      internalDiv.classList.add("overlay2");
      lock.classList.add("igg");
    });
    internalDiv.append(colour_buttonB);
    let colour_buttonK = document.createElement("button");
    colour_buttonK.style.backgroundColor = "black";
    colour_buttonK.addEventListener("click", () => {
      black.append(task_element);
      if (task_element.classList.contains("task-element-r")) {
        task_element.classList.replace("task-element-r", "task-element-k");
      } else if (task_element.classList.contains("task-element-y")) {
        task_element.classList.replace("task-element-y", "task-element-k");
      } else if (task_element.classList.contains("task-element-b")) {
        task_element.classList.replace("task-element-b", "task-element-k");
      }
      internalDiv.classList.add("overlay2");
      lock.classList.add("igg");
    });
    internalDiv.append(colour_buttonK);

    label.append(internalDiv);
    label.append(lock);
    task_element.append(label);
    // red.append(task_element)
    if (document.querySelectorAll(".ra")[0].checked) {
      task_input_element2.classList.add("text1");
      task_element.classList.add("task-element-r");
      red.append(task_element);
    } else if (document.querySelectorAll(".ra")[1].checked) {
      task_element.classList.add("task-element-y");
      task_input_element2.classList.add("text2");
      yellow.append(task_element);
    } else if (document.querySelectorAll(".ra")[2].checked) {
      task_element.classList.add("task-element-b");
      task_input_element2.classList.add("text3");
      blue.append(task_element);
    } else if (document.querySelectorAll(".ra")[3].checked) {
      task_element.classList.add("task-element-k");
      task_input_element2.classList.add("text4");
      black.append(task_element);
    }

    fInput.value = "";
    edit_button.addEventListener("click", (e) => {
      if (edit_button.innerText == "\u{1F58A}") {
        edit_button.innerText = "\u{1F5AB}";
        task_input_element2.removeAttribute("readonly");
      } else {
        edit_button.innerText = "\u{1F58A}";
        task_input_element2.setAttribute("readonly", "readonly");
      }
    });

    delete_button.addEventListener("click", (e) => {
      if (task_input_element2.classList.contains("text1")) {
        red.removeChild(task_element);
      } else if (task_input_element2.classList.contains("text2")) {
        yellow.removeChild(task_element);
      } else if (task_input_element2.classList.contains("text3")) {
        blue.removeChild(task_element);
      } else if (task_input_element2.classList.contains("text4")) {
        black.removeChild(task_element);
      } else {
        comp.removeChild(task_element);
      }
    });

    task_input_element1.addEventListener("click", (e) => {
      comp.append(task_element);

      delete_button.addEventListener("click", (e) => {
        comp.removeChild(task_element);
      });

      // lock.style.backgroundImage= "url(./lock-icon-11.jpg)"
      internalDiv.removeChild(colour_buttonR);
      internalDiv.removeChild(colour_buttonY);
      internalDiv.removeChild(colour_buttonB);
      internalDiv.removeChild(colour_buttonK);
      internalDiv.classList.add("overlay2");
      lock.classList.add("igg");
    });
    const modal1 = document.querySelector(".overlay1");
    btnCom.addEventListener("click", () => {
      modal1.classList.add("open-modal1");
      container.innerHTML = "";
      container.append(comp);
    });
  }
});