import { HTMLElement, InputElement, Button } from "./helper";

class EditForm {
	constructor(data) {
		this.wrapper = new HTMLElement("div", ["form-wrapper"]);
		this.form = new HTMLElement("form", [], this.wrapper.dom);
		this.formTitle = new HTMLElement(
			"h2",
			["form-title"],
			this.form.dom,
			"Edit Project"
		);
		this.titleLabel = new HTMLElement(
			"label",
			["double-row"],
			this.form.dom,
			"Title"
		);
		this.titleInput = new InputElement(
			"input",
			[],
			this.titleLabel.dom,
			"text",
			data.title
		);
		this.titleInput.dom.required = true;

		this.dueDateLabel = new HTMLElement(
			"label",
			["double-row"],
			this.form.dom,
			"Due Date"
		);
		this.dueDateInput = new InputElement(
			"input",
			[],
			this.dueDateLabel.dom,
			"date",
			data.dueDate
		);
		this.priorityLabel = new HTMLElement(
			"label",
			["double-row"],
			this.form.dom,
			"Priority (1-3)"
		);
		this.priorityInput = new HTMLElement("select", [], this.priorityLabel.dom);
		let opt_0 = new HTMLElement(
			"option",
			[],
			this.priorityInput.dom,
			"Please select priority"
		);
		let opt_1 = new HTMLElement("option", [], this.priorityInput.dom, "1");
		let opt_2 = new HTMLElement("option", [], this.priorityInput.dom, "2");
		let opt_3 = new HTMLElement("option", [], this.priorityInput.dom, "3");
		opt_0.value = "";

		opt_1.value = 1;
		opt_2.value = 2;
		opt_3.value = 3;

		let allOptions = [opt_0, opt_1, opt_2, opt_3];
		allOptions.forEach((option) => {
			if (option.value === data.priority) {
				option.selected = true;
			}
		});

		this.descriptionLabel = new HTMLElement(
			"label",
			["long-row"],
			this.form.dom,
			"Description"
		);
		this.descriptionInput = new HTMLElement(
			"textarea",
			[],
			this.descriptionLabel.dom
		);
		this.descriptionInput.dom.value = data.description;

		this.todosLabel = new HTMLElement(
			"label",
			["todo-wrapper", "long-row"],
			this.form.dom,
			"To Do Items"
		);
		this.todosInput = new InputElement(
			"input",
			[],
			this.todosLabel.dom,
			"text"
		);
		this.listedToDoItems = new HTMLElement(
			"ul",
			["listed-todos-wrapper"],
			this.todosLabel.dom,
			"Temp Todos"
		);

		if (data.todoList.length > 0) {
			console.log(data.todoList);
			data.todoList.forEach((todo) => {
				this.listToDoItem(todo);
			});
		}

		this.todosButton = new Button(
			"button",
			["add-todo-btn"],
			this.todosLabel.dom,
			"Add To Do"
		);
		this.todosButton.name = "";

		this.submitButton = new Button(
			"button",
			["submit-btn"],
			this.form.dom,
			"Submit"
		);
	}

	/** Methods: */
	listToDoItem(todoItem) {
		let todoWrapper = new HTMLElement("div", [], this.listedToDoItems.dom);
		new HTMLElement("li", ["temp-todo"], todoWrapper.dom, todoItem);
		new Button("button", ["delete-todo"], this.listedToDoItems.dom, "X");
	}
	clearToDoInput() {
		this.todosInput.dom.value = "";
	}
	clearForm() {
		this.dom.form.reset();
	}
}

class EditPageController {
	constructor(data) {
		console.log(data);
		this.newData = {
			id: "",
			title: "",
			dueDate: "",
			description: "",
			priority: "",
			todos: [],
		};
		this.dom = new EditForm(data);

		/** Add event listeners: */
		this.dom.todosButton.dom.addEventListener("click", (e) => {
			e.preventDefault();
			this.addToDoItem();
		});
	}

	/** Methods: */
	addToDoItem() {
		let todo = this.dom.todosInput.dom.value;
		if (todo !== "" && !this.newData.todos.includes(todo)) {
			this.newData.todos.push(todo);
			this.dom.listToDoItem(todo);
		}

		this.dom.clearToDoInput();
	}
	deleteToDoItem(todo) {
		let indexToDelete = this.newData.todos.findIndex((item) => item === todo);
		this.newData.todos.splice(indexToDelete, 1);
	}

	clearData() {
		this.newData = {
			id: "",
			title: "",
			dueDate: "",
			description: "",
			priority: "",
			todos: [],
		};
	}
	assignID(title) {
		let randomNumb = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
		return title[0] + title[2] + title[3] + "-" + randomNumb;
	}

	setNewData() {
		this.newData.title = this.dom.titleInput.dom.value;
		this.newData.dueDate = this.dom.dueDateInput.dom.value;
		this.newData.description = this.dom.descriptionInput.dom.value;
		this.newData.priority = this.dom.priorityInput.dom.value;
		this.newData.id = this.assignID(this.dom.titleInput.dom.value);
	}
}

export { EditPageController };
