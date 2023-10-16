import "./styles.css";

import Data from "./data.json";
import { HeaderController } from "./header";
import { HTMLElement } from "./helper.js";
import { NavController } from "./navController";
import { CreateForm } from "./create";
import { LocalData } from "./storageAvailable";
import { CardController } from "./cardController.js";

class App {
	constructor() {
		const fullPageDiv = document.getElementById("content");

		/** Build Header Content: */
		const headerController = new HeaderController(fullPageDiv);

		/** Build Page Content: */
		this.pageContent = new HTMLElement("div", "page-content", fullPageDiv);

		/** Build AllCards DOM: */
		const cardController = new CardController(this.pageContent.dom);

		/** Build Create Form: */
		const createView = new CreateForm();

		/** Create NavBar: */
		this.setPrevTab("projects");
		const navView = new NavController(headerController.header.dom);
		navView.buildTab(
			"Projects",
			cardController.allCardsWrapper.wrapper,
			this.pageContent.dom
		);
		navView.buildTab("Create", createView.wrapper, this.pageContent.dom);

		/** Storage Control: */
		let localStore = new LocalData("projects", Data.projects, cardController);
	}
	/** Control Navigation Function: */
	controlNav(newTab, module) {
		if (newTab !== this.prevTab) {
			while (this.pageContent.dom.firstChild) {
				this.pageContent.dom.removeChild(this.pageContent.dom.firstChild);
			}
			this.pageContent.dom.appendChild(module.dom);
			this.setPrevTab(newTab);
		}
	}
	setPrevTab(aNewTab) {
		this.prevTab = aNewTab;
	}
}

let app = new App();
