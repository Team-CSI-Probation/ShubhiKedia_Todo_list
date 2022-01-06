let takeInput = document.querySelector('.takeInput input');
let addBtn = document.querySelector('.takeInput button');

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
}

