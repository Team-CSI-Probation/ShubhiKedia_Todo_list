const takeInput = document.querySelector('.takeInput input');
const addBtn = document.querySelector('.takeInput button');
const todoList = document.querySelector('.list')
const clearAll = document.querySelector('.clear_all button');

showTasks();

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
    localStorage.setItem("New todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks();
}

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
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"> <i class = "fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    takeInput.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}

clearAll.onclick = () => {
    listArr = [];
    localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}