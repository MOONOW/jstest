const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function paintToDo(text) {
	const li = document.createElement("li"),
		delBtn = document.createElement("button"),
		span = document.createElement("span"),
		newId = toDos.length + 1;
	delBtn.innerText = "❌";
	span.innerText = text;
	toDoList.appendChild(li);
	li.appendChild(delBtn);
	li.appendChild(span);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {

	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();