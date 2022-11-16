const button = document.querySelector(".menu__btn");
const input = document.querySelector(".menu__task");
const tasks = document.querySelector(".tasks");

button.addEventListener('click', (e) => {
    const task = input.value;
    if (!task){
        alert("Coloque el nombre de la tarea");
        return;
    }
    const newElement = document.createElement("div");
    newElement.classList.add("task");
    
    const newContentElement = document.createElement("div");
    newContentElement.classList.add("content");

    newElement.appendChild(newContentElement);

    const newInput = document.createElement("input");
    newInput.classList.add("text");
    newInput.type = "text";
    newInput.value = task;
    newInput.setAttribute("readonly", "readonly");

    newContentElement.appendChild(newInput);


    const action = document.createElement("div");
    action.classList.add("action");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "Editar";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Borrar";

    action.appendChild(edit);
    action.appendChild(deleteBtn);

    newElement.appendChild(action);

    tasks.appendChild(newElement);

    input.value = "";

    edit.addEventListener('click', () => {
        if (edit.innerText.toLowerCase() == "editar"){
            newInput.removeAttribute("readonly");
            newInput.focus();
            edit.innerText = "Guardar";
        } else{
            newInput.setAttribute("readonly", "readonly");
            edit.innerText = "Editar";
        }
        
    });

    deleteBtn.addEventListener('click', () => {
        tasks.removeChild(newElement);
    });
})