const takeInput = document.querySelector('.takeInput input');
const addBtn = document.querySelector('.takeInput button');
const todoList = document.querySelector('.list')
const clearAll = document.querySelector('.clear_all button');

showTasks();

//function to add tasks
addBtn.onclick = () => {
    let userData = takeInput.value;
    let getLocalStorage = localStorage.getItem("New todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);  //transforming json string in to js object
    }
    listArr.push(userData);
    localStorage.setItem("New todo", JSON.stringify(listArr)); //stringify-->transforming js object into a json string
    showTasks();
}

//function to show tasks
function showTasks(){
    let getLocalStorage = localStorage.getItem("New todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);  //transforming json string in to js object
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> <span onclick="checkTask(${index})"></span> <i class="far fa-circle"></i> ${element} <span onclick="deleteTask(${index})">  <i class = "fas fa-trash"></i></span></li>`
    });
    // listArr.forEach((element,index) => {
    //     newLiTag += `<li> <i class = "fas fa-circle-thin"></i> ${element} <span onclick="checkTask(${index})"></span></li>`
    // });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    takeInput.value = "";
}


//function to delete tasks
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}

//function to clear all tasks
clearAll.onclick = () => {
    listArr = [];
    localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}

// function to check and uncheck:
// function check_uncheck(){
//     let getLocalStorage = localStorage.getItem("New todo");
//     if(getLocalStorage == null){
//         listArr = [];
//     }
//     else{
//         listArr = JSON.parse(getLocalStorage);  //transforming json string in to js object
//     }
//     let newLiTag = '';
//     listArr.forEach((element,index) => {
//         newLiTag += `<li> <i class = "fas fa-circle-thin"></i> ${element} <span onclick="checkTask(${index})"></span></li>`
//     });
//     todoList.innerHTML = newLiTag;
// }

function checkTask(index){
    let getLocalStorage = localStorage.getItem("New todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.classList.remove("far fa-circle");
    listArr.classList.add("fas fa-check-circle");
    
}