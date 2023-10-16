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

		/** Build Header and NavBar: */
		const headerController = new HeaderController(fullPageDiv);
		const navController = new NavController(headerController.header.dom);

		/** Build Page Content: */
		this.pageContent = new HTMLElement("div", "page-content", fullPageDiv);

		/** AllCards and Create DOM: */
		const cardController = new CardController(this.pageContent.dom);
		const createView = new CreateForm();
		/** Storage Control: */
		let localStore = new LocalData("projects", Data.projects, cardController);

		/** Add NavBar Functioning: */
		navController.buildTab(
			"Projects",
			cardController.allCardsWrapper.wrapper,
			this.pageContent.dom
		);
		navController.buildTab("Create", createView.wrapper, this.pageContent.dom);
	}
}

let app = new App();
