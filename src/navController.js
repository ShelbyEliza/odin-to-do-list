import { HTMLElement } from "./helper";

class Tab {
	constructor(parentEl, textContent) {
		this.dom = document.createElement("button");
		this.dom.id = textContent.toLowerCase();
		this.dom.textContent = textContent;
		this.dom.classList.add("tab");
		if (textContent === "Projects") {
			this.dom.classList.add("active");
		}
		parentEl.appendChild(this.dom);
	}
}

class NavController {
	constructor(parentEl) {
		this.allTabs = [];
		this.navWrapper = new HTMLElement("nav", ["nav-wrapper"], parentEl);
		this.activeTabID = null;
	}

	buildTab(title, module, pageWrapper) {
		let tab = new Tab(this.navWrapper.dom, title, module);

		this.addTab(tab);

		if (title === "Projects") {
			tab.dom.classList.add("active");
			this.setActiveTabID(tab.dom.id);
		}
		tab.dom.addEventListener("click", (e) => {
			e.preventDefault();

			this.switchTabStyle(e.target);
			this.changePageContent(e.target.id, module, pageWrapper);
		});
	}

	/** Methods: */
	addTab(tab) {
		this.allTabs.push(tab);
	}

	changePageContent(newTabID, module, pageWrapper) {
		if (newTabID !== this.activeTabID) {
			while (pageWrapper.firstChild) {
				pageWrapper.removeChild(pageWrapper.firstChild);
			}
			pageWrapper.appendChild(module.dom);
			this.setActiveTabID(newTabID);
		}
	}

	setActiveTabID(newID) {
		this.activeTabID = newID;
	}

	switchTabStyle(selectedTab) {
		this.allTabs.forEach((tab) => {
			if (selectedTab.id !== this.activeTab) {
				if (tab.dom.id === selectedTab.id) {
					tab.dom.classList.add("active");
				} else {
					tab.dom.classList.remove("active");
				}
			} else {
				console.log("no change");
			}
		});
	}
}

export { NavController };
