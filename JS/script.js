const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//Variables Selectoras, se usa el querySelector por que selecciona el elemento html con esa clase o selector css.
const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

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

  //appendChild sirve para agregar un nuevo nodo(elemento) como hijo de otro nodo(elemento) del Dom
  //NOTA: En javaScript no es necesario poner el ; al fnalizar una linea de codigo, pero aveces puede causar problemas al utilizar herramientas como ESLint y puedo ocacionar bugs dificiles de encontrar
  //SINTAXIS: padre.appendChild(hijo);
  listContainer.appendChild(li);
  inputBox.value = "";
}

