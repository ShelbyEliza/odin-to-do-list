import { HTMLElement, InputElement, Button } from "./helper";

class CreateForm {
	constructor() {
		this.wrapper = new HTMLElement("div", ["form-wrapper"]);
		this.form = new HTMLElement("form", [], this.wrapper.dom);
		this.formTitle = new HTMLElement(
			"h2",
			["form-title"],
			this.form.dom,
			"Add Tasks"
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
			"text"
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
			"date"
		);

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
		new HTMLElement("li", ["temp-todo"], this.listedToDoItems.dom, todoItem);
	}
	clearToDoInput() {
		this.todosInput.dom.value = "";
	}
	clearForm() {
		this.dom.form.reset();
	}
}

class CreateController {
	constructor() {
		this.newData = {
			id: "",
			title: "",
			dueDate: "",
			description: "",
			priority: "",
			todos: [],
		};
		this.dom = new CreateForm();

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
		this.newData.priority = "1";
		this.newData.id = this.assignID(this.dom.titleInput.dom.value);
	}
}

export { CreateForm, CreateController };
