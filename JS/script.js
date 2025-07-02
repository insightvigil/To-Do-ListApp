const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

//Función AddTask

function addTask() {
  const task = inputBox.value.trim();

  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");

  //innerHTML nos permite inserta contenido HTML de forma dínamica en algun elemento del 
  //DOM en este caso el li
  li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
  `;

}