import "./styles.css";

import { HTMLElement } from "./helper.js";
import { NavController } from "./nav.js";
import { CreateForm } from "./create";
import Data from "./data.json";
import { LocalData } from "./storageAvailable";
import { CardController } from "./cardController.js";
import { HeaderController } from "./header";

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

		navView.homeTab.dom.addEventListener("click", (e) => {
			e.preventDefault();
			navView.switchActiveTab(e.target);
			this.controlNav(e.target.id, cardController.allCardsWrapper.wrapper);
		});
		navView.createTab.dom.addEventListener("click", (e) => {
			e.preventDefault();
			navView.switchActiveTab(e.target);
			this.controlNav(e.target.id, createView.wrapper);
		});

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
