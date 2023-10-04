import { HTMLElement } from "./helper.js";

class Nav {
	allTabs = [];
	constructor(parentElement) {
		this.navWrapper = new HTMLElement("nav", "nav-bar", parentElement);

		this.homeTab = new HTMLElement(
			"button",
			"tab",
			this.navWrapper.dom,
			"Projects"
		);
		this.createTab = new HTMLElement(
			"button",
			"tab",
			this.navWrapper.dom,
			"Create"
		);

		this.allTabs.push(this.homeTab, this.createTab);
		this.activeTab = this.homeTab;
		// this.allTabs.forEach((tab) => {
		// 	tab.dom.addEventListener("click", function (e) {
		// 		e.preventDefault();
		// 		let selectedTab = e.target.textContent;
		// 		console.log(selectedTab);

		// 		this.switchActiveStatus(selectedTab);
		// 	});
		// });
	}

	switchActiveStatus(selectedTab) {
		if (selectedTab === this.activeTab) {
			console.log("Tab already selected");
			return;
		} else {
			if (this.homeTab === selectedTab) {
				this.homeTab.classList.add("active");
				this.createTab.classList.remove("active");
			} else {
				this.createTab.classList.add("active");
				this.homeTab.classList.remove("active");
			}
			this.activeTab = selectedTab;
		}
	}
}

class NavController {
	constructor(parentEl) {
		this.parentEl = parentEl;
		this.navView = new Nav(this.parentEl);
		console.log(this.navView);
		this.navView.allTabs.forEach(function (tab) {
			tab.dom.addEventListener("click", function (e) {
				e.preventDefault();
				let selectedTab = e.target.textContent;
				console.log(selectedTab);

				if (selectedTab === this.activeTab) {
					console.log(this.activeTab);
					console.log("Tab already selected");
					return;
				} else {
					if (this.homeTab === selectedTab) {
						this.homeTab.classList.add("active");
						this.createTab.classList.remove("active");
					} else {
						this.createTab.classList.add("active");
						this.homeTab.classList.remove("active");
					}
					this.activeTab = selectedTab;
				}
			});
		});
	}
}

export { Nav, NavController };
