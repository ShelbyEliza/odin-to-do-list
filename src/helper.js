function Nav() {}

function NavControler() {
	let activeTab = "home";
}

class HTMLElement {
	constructor(element, className, parentElement, textContent) {
		this.parentElement = parentElement;
		this.dom = document.createElement(element);
		this.dom.classList.add(className);

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

class NavButton extends HTMLElement {
	constructor(element, className, parentElement, textContent) {
		super(element, className, parentElement, textContent);

		this.id = textContent.toLowerCase();
		this.dom.addEventListener("click", () => {
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

export { HTMLElement, NavButton };
