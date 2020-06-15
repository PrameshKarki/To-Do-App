currentDate();

let addToDoBtn = document.getElementById('addToDo');

showToDo();

addToDoBtn.addEventListener('click', function (e) {
    let takeInputBlock = document.getElementById('takeInput');
    takeInputBlock.style.display = "block";
    let addButton = document.getElementById('addBtn');
    let myArrayObject;
    addButton.addEventListener('click', function (e) {
        let myWork = document.getElementById('inputText');
        let myWorkFromLocalStorage = localStorage.getItem('todo');
        if (myWorkFromLocalStorage == null) {
            myArrayObject = [];
        } else {
            myArrayObject = JSON.parse(myWorkFromLocalStorage);
        }
        if (myWork.value.length != 0) {
            myArrayObject.push(myWork.value);
            localStorage.setItem('todo', JSON.stringify(myArrayObject));
            myWork.value = '';
            showToDo();

        }
        else {
            alert('This Cannot Be Empty!!!!');
        }

    })
})


function showToDo() {
    let myWorkFromLocalStorage = localStorage.getItem('todo');
    let myArrayObject;
    if (myWorkFromLocalStorage == null) {
        myArray = [];
    }
    else {
        myArray = JSON.parse(myWorkFromLocalStorage);
    }
    let html = '';

    myArray.forEach(function (element, index) {
        html += `<div class="list">
        <input type="checkbox" onclick=markedAsDone(this.id)  class="checkBox" name="todo" id=${index + 'todo'}/>
        <label for="todo">${element}</label>
        <button id=${index} onclick=removeTodo(this.id) class="trashButton"><i class="fa fa-trash"></i></button>
        </div>`

    });
    let mainContent = document.getElementById('mainContent')
    if (myArray.length != 0) {
        mainContent.innerHTML = html;
    }
    else {
        mainContent.innerHTML = `<p id="emptyMessage">Nothing To Show!!!</p>`
    }

}

function removeTodo(index) {
    let myWorkFromLocalStorage = localStorage.getItem('todo');
    let myArrayObject;
    if (myWorkFromLocalStorage == null) {
        myArrayObject = [];
    }
    else {
        myArrayObject = JSON.parse(myWorkFromLocalStorage);
    }
    myArrayObject.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(myArrayObject));
    showToDo();

}
function markedAsDone(id) {
    let markDone = document.getElementById(id);
    if (markDone.checked == true) {
        markDone.nextElementSibling.style.textDecoration = 'line-through';
        markDone.nextElementSibling.style.color = 'rgba(0, 0, 0, 0.4)';

    }
    else {
        markDone.nextElementSibling.style.textDecoration = 'none';
        markDone.nextElementSibling.style.color = 'black';
    }
}


function currentDate() {
    let today = new Date();
    let yy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = dd + '/' + mm + '/' + yy;
    let dateContainer = document.getElementById('date');
    dateContainer.innerText = date;
}
