import checkComplete from "./componets/checkComplete.js";
import deleteIcon from "./componets/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task =  document.createElement('li');
    task.classList.add("card");
    input.value = "";
    const taskContent  = document.createElement("div");
    const tittleTask = document.createElement("span");
    
    tittleTask.classList.add("task");
    tittleTask.innerHTML = value
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
}
btn.addEventListener("click", createTask );