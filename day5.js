const title = document.getElementById("title");
const para = document.querySelector("#para");

console.log(title);
console.log(para);

title.textContent = "Welcome to my JS journey";
para.textContent = "I am learning DOM manipulation";

title.style.color = "blue";
para.style.color = "red";

// Box highlight
const box = document.querySelector("#box");

box.classList.add("highlight");
box.classList.remove("highlight");
box.classList.toggle("highlight");

// Creating element with JavaScript
const newPara = document.createElement("p");

newPara.textContent = "I was created by JavaScript";
newPara.style.color = "green";

document.body.appendChild(newPara);

// Todo List
const addBtn = document.getElementById("addBtn");
const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const tasktext = taskinput.value.trim();

    if (tasktext === "") return;

    const li = document.createElement("li");
    li.textContent = tasktext;

    // Remove task when clicked
    li.addEventListener("click", function () {
        li.remove();
    });

    tasklist.appendChild(li);

    taskinput.value = "";
});