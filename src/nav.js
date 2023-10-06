class Navbar {
	allTabs = [];
	constructor(element, className, parentElement) {
		this.dom = document.createElement(element);
		this.parentElement = parentElement;

		if (className !== "") {
			this.dom.classList.add(className);
		}

		this.parentElement.appendChild(this.dom);
	}

	getElement() {
		return this.dom;
	}
	addToClassList() {
		this.dom.classList.add(className);
	}
	addTab(tab) {
		this.allTabs.push(tab);
	}
	setActiveTab(tab) {
		this.activeTab = tab;
	}
}

class NavButton extends Navbar {
	constructor(element, className, parentElement, textContent) {
		super(element, className, parentElement);
		this.dom.textContent = textContent;
		this.dom.id = textContent.toLowerCase();
	}
}

class NavController {
	constructor(parentEl) {
		this.parentEl = parentEl;
		this.nav = new Navbar("nav", "navbar", this.parentEl);
		this.homeTab = new NavButton("button", "tab", this.nav.dom, "Projects");
		this.createTab = new NavButton("button", "tab", this.nav.dom, "Create");

		this.nav.addTab(this.homeTab);
		this.nav.setActiveTab(this.homeTab);
		this.nav.addTab(this.createTab);
	}
	switchActiveTab(selectedTab) {
		this.nav.allTabs.forEach((tab) => {
			if (tab.dom.id === selectedTab.id) {
				tab.dom.classList.add("active");
			} else {
				tab.dom.classList.remove("active");
			}
		});
	}
}

export { NavController };
