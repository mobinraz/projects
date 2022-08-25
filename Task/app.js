const form = document.querySelector("#task-form");
const task = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".list-group");
const clear = document.querySelector(".clear-tasks");

addListStorage();

function addListStorage() {
	document.addEventListener("DOMContentLoaded", getTask);

	form.addEventListener("submit", addTask);

	taskList.addEventListener("click", removeTask);

	clear.addEventListener("click", clearTask);

	filter.addEventListener("keyup", filterTask);
}

function getTask() {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.forEach(function (task) {
		// Create li element
		const li = document.createElement("li");
		// Add class
		li.className = "list-group-item d-flex align-items-center";
		// Create text node and append to li
		li.appendChild(document.createTextNode(task));
		// Create i element
		const i = document.createElement("i");
		// Add class
		i.className = "fas fa-times text-danger mr-auto delete-item";
		// Append the i to li
		li.appendChild(i);

		// Append li to ul
		taskList.appendChild(li);
	});
}

function addTask(e) {
	if (task.value === "") {
		alert("لطفا مقداری وارد کنید ");
	} else {
		const li = document.createElement("li");
		li.className = "list-group-item d-flex align-items-center";
		li.appendChild(document.createTextNode(task.value));

		const i = document.createElement("i");
		i.className = "fas fa-times text-danger mr-auto delete-item";
		li.appendChild(i);
		taskList.appendChild(li);
		storageLocal(task.value);
		task.value = "";
		e.preventDefault();
	}
}

function storageLocal(task) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.push(task);

	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(e) {
	if (e.target.classList.contains("delete-item")) {
		if (confirm("آيا مطمن هستی برای حذف ؟")) {
			e.target.parentElement.remove();
			removeTaskFromLocalStorage(e.target.parentElement);
		}
	}
}
function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.forEach(function (task, index) {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem("tasks", JSON.stringify(tasks));
}
function clearTask() {
	taskList.innerHTML = "";
	clearTaskForm();
}

function clearTaskForm() {
	localStorage.clear();
}

function filterTask(e) {
	const text = e.target.value.toLowerCase();
	// console.log(text);

	document.querySelectorAll(".list-group-item").forEach(function (task) {
		// console.log(task);
		const item = task.textContent;
		// console.log(item);

		if (item.toLowerCase().indexOf(text) != -1) {
			task.classList.add("d-flex");
		} else {
			task.classList.remove("d-flex");
			task.style.display = "none";
		}
	});
}

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {

//   // Add task event
//   form.addEventListener('submit', addTask);

//   // Remove task event
//   taskList.addEventListener('click', removeTask);

// }

// // Add task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('برای افزودن تسک در ابتدا تسک را وارد کنید');
//   } else {
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(taskInput.value));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//     // Clear input
//     taskInput.value = '';

//     e.preventDefault();

//   }

// }

// // Remove task
// function removeTask(e) {

//   if (e.target.classList.contains('delete-item')) {
//     if (confirm('آيا مطمن هستی برای حذف تسک')) {
//       e.target.parentElement.remove();
//     }
//   }

// }
