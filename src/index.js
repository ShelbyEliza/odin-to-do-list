import "./styles.css";

import { HeaderController } from "./header";
import { HTMLElement } from "./helper.js";
import { NavController } from "./navController";
import { CreateController } from "./create";
import {
	ProjectStorage,
	addProjectToStorage,
	deleteProjectFromStorage,
} from "./storageAvailable";
import { CardController } from "./cardController.js";

class App {
	constructor() {
		const fullPageDiv = document.getElementById("content");

		/** Build Header and NavBar: */
		const headerController = new HeaderController(fullPageDiv);
		const navController = new NavController(headerController.header.dom);

		/** Build Page Content: */
		this.pageContent = new HTMLElement("div", ["page-content"], fullPageDiv);

		/** AllCards and Create DOM: */
		const cardController = new CardController(this.pageContent.dom);
		const createController = new CreateController();

		/** Storage Control: */
		let projectStorage = new ProjectStorage("projects");

		/** Add NavBar Functioning: */
		navController.buildTab(
			"Projects",
			cardController.allCardsWrapper.wrapper,
			this.pageContent.dom
		);
		navController.buildTab(
			"Create",
			createController.dom.wrapper,
			this.pageContent.dom
		);

		if (projectStorage) {
			this.setUpCards(projectStorage, cardController);
		}

		/** Add submit project listener: */
		createController.dom.submitButton.dom.addEventListener("click", () => {
			createController.setNewData();
			let data = addProjectToStorage(createController.newData, projectStorage);

			cardController.addCard(data);
			createController.clearData();
		});

		/** Add delete project listener: */
		cardController.allCards.forEach((card) => {
			card.deleteBtn.dom.addEventListener("click", () => {
				deleteProjectFromStorage(card.id, projectStorage);
				cardController.deleteCard(card.wrapper.dom);
			});
		});
	}

	setUpCards(data, module) {
		data.active.forEach(function (project) {
			let keys = [];
			for (const prop in project) {
				keys.push(project[prop]);
			}
			module.addCard(keys);
		});
	}
}

let app = new App();
