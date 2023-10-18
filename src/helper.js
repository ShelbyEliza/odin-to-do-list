class HTMLElement {
	constructor(element, classNames, parentElement, textContent) {
		this.parentElement = parentElement;
		this.dom = document.createElement(element);
		if (classNames.length >= 0) {
			if (classNames.length === 1) {
				this.dom.classList.add(classNames[0]);
			} else {
				classNames.forEach((name) => {
					this.dom.classList.add(name);
				});
			}
		}

		if (textContent) {
			this.dom.textContent = textContent;
		}
		if (parentElement) {
			this.parentElement.appendChild(this.dom);
		} else {
			// console.log("Element has not been appended to dom");
		}
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
		// this.dom.addEventListener("click", (e) => {
		// 	e.preventDefault();
		// 	if (this.value === "Add To Do") {
		// 		this.addToDo(e);
		// 	} else {
		// 		submitForm(e);
		// 	}
		// });
	}
	// addToDo(e) {
	// 	console.log(e);
	// }
	// submitForm(e) {
	// 	console.log(e);
	// }
}

class InputElement extends HTMLElement {
	constructor(element, className, parentElement, type) {
		super(element, className, parentElement);
		this.dom.type = type;
	}
}

export { HTMLElement, InputElement, Button };
