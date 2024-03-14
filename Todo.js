const todotext = document.getElementById("todotext");
const todoul = document.getElementById("todobox");

todotext.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        addtodo(todotext.value);
        todotext.value="";
    }
});

function addtodo(item) {
    const listitem = document.createElement("li");
    listitem.innerHTML = `${item} <i class="fa-regular fa-circle-xmark"></i>`;
    todoul.appendChild(listitem);
}

// Adding event listener to the todobox to handle dynamically added elements
todoul.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.remove(); // Remove the parent element (the li)
    }
});
