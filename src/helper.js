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
	}
}

class InputElement extends HTMLElement {
	constructor(element, className, parentElement, type, value) {
		super(element, className, parentElement);
		this.dom.type = type;
		if (value) {
			this.dom.value = value;
		}
	}
}

export { HTMLElement, InputElement, Button };
