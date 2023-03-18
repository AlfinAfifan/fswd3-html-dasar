const todo = document.getElementById('todo');

function add() {
    let newText = document.getElementById('list');

    let newTodo = `<li class="newList"> <span class="text">${newText.value}</span>
                    <span onclick='toggle(this)' class='ceklis'> ✔ </span>
                    <span onclick='removeItem(this)' class='delete'> X </span></li>`;

    todo.insertAdjacentHTML('afterbegin', newTodo)

    newText.value = "";
}

function toggle(el) {
    // console.log(el.previousSibling);
    el.parentElement.classList.toggle('done');
}

function removeItem(el) {
    el.parentElement.remove()
}