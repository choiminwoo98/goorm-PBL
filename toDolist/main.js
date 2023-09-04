const todoInput = document.getElementById("todoInput");
const todoeditInput = document.getElementById("todoeditInput");
const Wrapper = document.getElementById("Wrapper");
const modal = document.getElementById("modal");
const editmodal = document.getElementById("editmodal");

const modalbutton = document.querySelectorAll("button");
const check = document.getElementsByClassName("check");

let toDos = JSON.parse(localStorage.getItem("todos"));

toDos ? toDos.forEach((v) => setToDo(v)) : [];

function setToDo(toDos) {
  let box = `<div class="ContainerWrapper">
        <div class="Container" id="${toDos.id}">
          <div>
           <input class="check" type="checkbox" ${
             toDos.checked ? "checked" : ""
           } />
            <span id="id${toDos.id}" style="${
    toDos.checked ? "text-decoration: line-through;" : ""
  }">${toDos.contents}</span>
          </div>
          <div class="right">
            <?xml version="1.0" ?><svg
              height="18px"
              class="Layer_2"
              style="cursor: pointer"
              version="1.1"
              viewBox="0 0 18 18"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fill-rule="evenodd"
                id="Page-1"
                stroke="none"
                stroke-width="1"
              >
                <g
                  fill="#000000"
                  id="Core"
                  transform="translate(-213.000000, -129.000000)"
                >
                  <g id="create" transform="translate(213.000000, 129.000000)">
                    <path
                      d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                      id="Shape"
                      fill="#9D4F6A"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <svg
              height="18px"
              class="Layer_1"
              style="cursor: pointer"
              version="1.1"
              viewBox="0 0 512 512"
              width="18px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z"
                  fill="#9D4F6A"
                />
              </g>
            </svg>
          </div>
        </div>
        
        </div>
      </div>`;
  Wrapper.innerHTML += box;
}

function modalOpen() {
  modal.style.display = "flex";
}
function modalClose() {
  modal.style.display = "none";
}

function editModalOpen() {
  editmodal.style.display = "flex";
}
function editModalClose() {
  editmodal.style.display = "none";
}

modalbutton.forEach((v) =>
  v.addEventListener("click", () => {
    modalClose();
    editModalClose();
  })
);

Wrapper.addEventListener("change", function (event) {
  if (event.target.classList.contains("check")) {
    const todoId = event.target.parentElement.parentElement.id; // Get the id of the parent .Container
    toggleCheck(todoId, event);
  }
});

function toggleCheck(id, event) {
  let toDos = JSON.parse(localStorage.getItem("todos"));
  const todo = toDos.find((todo) => todo.id === parseInt(id));
  if (!todo) return;
  todo.checked = !todo.checked;

  if (event) {
    const contents = event.target.nextElementSibling;
    if (contents) {
      todo.checked
        ? (contents.style.textDecoration = "line-through")
        : (contents.style.textDecoration = "");
    }
  }

  localStorage.setItem("todos", JSON.stringify(toDos));
}

function addTask() {
  if (todoInput.value === "") {
    alert("입력해주세요");
    return;
  }
  if (todoInput.value) {
    let todo = {
      id: new Date().getTime(),
      contents: todoInput.value,
      checked: false,
    };
    if (toDos === null) toDos = [];
    toDos.push(todo);
    localStorage.setItem("todos", JSON.stringify(toDos));
    setToDo(todo);
    console.log(toDos);
    modalClose();
    todoInput.value = "";
  }
}

const deleteTodo = document.querySelectorAll(".Layer_1");

Wrapper.addEventListener("click", function (event) {
  if (event.target.closest(".Layer_1")) {
    const todoContainer = event.target.closest(".Container");
    if (todoContainer) {
      const todoId = parseInt(todoContainer.id);
      let toDos = JSON.parse(localStorage.getItem("todos")) || [];
      toDos = toDos.filter((todo) => todo.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(toDos));
      todoContainer.remove();
    }
  }
});

const updateTodo = document.querySelectorAll(".Layer_2");

let currentlyEditingIndex = null;

todoeditInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && currentlyEditingIndex !== null) {
    let toDos = JSON.parse(localStorage.getItem("todos"));
    const editedContent = todoeditInput.value;
    toDos[currentlyEditingIndex].contents = editedContent;
    localStorage.setItem("todos", JSON.stringify(toDos));

    const span = document.getElementById(
      `id${toDos[currentlyEditingIndex].id}`
    );
    if (span) {
      span.textContent = editedContent;
    }

    editModalClose();
    currentlyEditingIndex = null;
  }
});

updateTodo.forEach((v) => {
  v.addEventListener("click", function (event) {
    const todoContainer = event.target.closest(".Container");
    if (todoContainer) {
      const todoId = parseInt(todoContainer.id);
      let toDos = JSON.parse(localStorage.getItem("todos"));
      const index = toDos.findIndex((todo) => todo.id === todoId);
      currentlyEditingIndex = index;
      editModalOpen();
    }
  });
});

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
