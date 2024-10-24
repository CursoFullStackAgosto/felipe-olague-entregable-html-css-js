const inputTask = document.getElementById("to-do-input")
const buttonAddTask = document.getElementById("add-task")
const todoList = document.getElementById("to-do-list")

const createTask = () => {
    console.log(inputTask.value)
    if(inputTask.value === "" || inputTask.value.length === 0 || inputTask.value.trim()=== ""){
       return alert("Debes crear una tarea")
    }

    const liElement = document.createElement("li")
    //liElement.innerText = inputTask.value
    liElement.innerHTML = `
     <div class="task-content">
    <input type="checkbox" /> 
    <span>${inputTask.value}</span> 
     </div> 
    <i class="fa-solid fa-trash" style="cursor:pointer;"></i>
    `
    //<button class="delete-button">Eliminar</button>



    
    todoList.appendChild(liElement)

    const checkbox = liElement.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        const taskText = liElement.querySelector("span");
        taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const deleteButton = liElement.querySelector(".fa-trash");
    deleteButton.addEventListener("click", ()=>{
        liElement.remove();
    });

    inputTask.value = ""


}

buttonAddTask.addEventListener("click", createTask)