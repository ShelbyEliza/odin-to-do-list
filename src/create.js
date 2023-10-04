import { HTMLElement, InputElement, Button } from "./helper";

class CreateForm {
	constructor(parentEl) {
		this.wrapper = new HTMLElement("div", "form-wrapper", parentEl);
		this.form = new HTMLElement("form", "", this.wrapper.dom);
		this.formTitle = new HTMLElement(
			"h2",
			"form-title",
			this.form.dom,
			"Add Tasks"
		);
		// this.projTitleWrapper = HTMLElement("div", "", this.form)
		this.titleLabel = new HTMLElement("label", "", this.form.dom, "Title");
		this.titleInput = new InputElement(
			"input",
			"",
			this.titleLabel.dom,
			"text"
		);

		this.dueDateLabel = new HTMLElement("label", "", this.form.dom, "Due Date");
		this.dueDateInput = new InputElement(
			"input",
			"",
			this.dueDateLabel.dom,
			"date"
		);

		this.descriptionLabel = new HTMLElement(
			"label",
			"",
			this.form.dom,
			"Description"
		);
		this.descriptionInput = new InputElement(
			"input",
			"",
			this.descriptionLabel.dom,
			"textarea"
		);

		this.todosLabel = new HTMLElement(
			"label",
			"",
			this.form.dom,
			"To Do Items"
		);
		this.todosInput = new InputElement(
			"input",
			"",
			this.todosLabel.dom,
			"text"
		);
		this.todosButton = new Button(
			"button",
			"add-btn",
			this.todosLabel.dom,
			"Add To Do"
		);

		this.submitButton = new Button(
			"button",
			"submit-btn",
			this.form.dom,
			"Submit"
		);
	}

	todosList = [];
}
export { CreateForm };
