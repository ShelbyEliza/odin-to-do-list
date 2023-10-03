import { HTMLElement, NavButton } from "./helper.js";

class NavController {
	constructor(parentElement) {
		this.navWrapper = new HTMLElement("nav", "nav-bar", parentElement);

		const homeTab = new NavButton(
			"button",
			"tab",
			this.navWrapper.dom,
			"Projects"
		);
		const createTab = new NavButton(
			"button",
			"tab",
			this.navWrapper.dom,
			"Create"
		);

		this.activeTab = this.homeTab;
		// const tabs = [];
		// tabs.push(homeTab, createTab);
	}

	switchTabs(selectedTab, module) {
		if (selectedTab !== activeTab) {
			while (pageContent.firstChild) {
				pageContent.removeChild(tabContentDiv.firstChild);
			}
			tabContentDiv.appendChild(module);
			prevTab = newTab;
		}
	}
}

export { NavController };
