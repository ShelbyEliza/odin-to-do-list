function Nav() {}

function NavControler() {
	let activeTab = "home";
}

class HTMLElement {
	constructor(element, className, parentElement, textContent) {
		this.parentElement = parentElement;
		this.title = document.createElement(element);
		this.title.classList.add(className);

		if (textContent) {
			this.title.textContent = textContent;
		}
		this.parentElement.appendChild(this.title);
	}
	getElement() {
		return this.title;
	}
	addToClassList() {
		this.title.classList.add(className);
	}
}

class NavButton extends HTMLElement {
	constructor(element, className, parentElement, textContent) {
		super(element, className, parentElement, textContent);

		this.id = textContent.toLowerCase();
		this.title.addEventListener("click", () => {
			if (!this.title.classList.contains("active")) {
				this.title.classList.add("active");
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
