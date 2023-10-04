class HTMLElement {
	constructor(element, className, parentElement, textContent) {
		this.parentElement = parentElement;
		this.dom = document.createElement(element);
		if (className !== "") {
			this.dom.classList.add(className);
		}

		if (textContent) {
			this.dom.textContent = textContent;
		}
		this.parentElement.appendChild(this.dom);
	}
	getElement() {
		return this.dom;
	}
	addToClassList() {
		this.dom.classList.add(className);
	}
}

class Button extends HTMLElement {
	constructor(element, className, parentElement, value) {
		super(element, className, parentElement, value);

		this.dom.value = value;
		this.dom.addEventListener("click", (e) => {
			e.preventDefault();
			if (this.value === "Add To Do") {
				this.addToDo(e);
			} else {
				submitForm(e);
			}
		});
	}
	addToDo(e) {
		console.log(e);
	}
	submitForm(e) {
		console.log(e);
	}
}

class NavButton extends HTMLElement {
	constructor(element, className, parentElement, value) {
		super(element, className, parentElement, value);

		if (value === "Projects") {
			this.isActive = true;
		} else if (value === "Create") {
			this.isActive = false;
		}
		this.dom.value = value;
		this.dom.id = value.toLowerCase();
		this.dom.addEventListener("click", (e) => {
			e.preventDefault();
			let selectedTab = e.target.value;

			if (!this.dom.classList.contains("active")) {
				this.dom.classList.add("active");
			}
		});
	}

	setActive(prevActive, newActive) {
		if (prevActive === newActive) {
			return;
		}
	}
}

class InputElement extends HTMLElement {
	constructor(element, className, parentElement, type) {
		super(element, className, parentElement);
		this.dom.type = type;
	}
}

export { HTMLElement, NavButton, InputElement, Button };
