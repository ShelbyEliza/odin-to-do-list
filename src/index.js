import "./styles.css";

import Data from "./data.json";
import { HeaderController } from "./header";
import { HTMLElement } from "./helper.js";
import { NavController } from "./navController";
import { CreateForm, CreateController } from "./create";
import { LocalData, addProjectToStorage } from "./storageAvailable";
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
		// const createView = new CreateForm();

		/** Storage Control: */
		let localStore = new LocalData("projects", Data.projects, cardController);

		/** Add NavBar Functioning: */
		navController.buildTab(
			"Projects",
			cardController.allCardsWrapper.wrapper,
			this.pageContent.dom
		);
		// navController.buildTab("Create", createView.wrapper, this.pageContent.dom);
		navController.buildTab(
			"Create",
			createController.dom.wrapper,
			this.pageContent.dom
		);

		/** Add submit project listener */
		createController.dom.submitButton.dom.addEventListener("click", (e) => {
			// e.preventDefault();
			// console.log(createController.projectData);
			createController.setProjectData();
			let data = addProjectToStorage(createController.projectData);

			/** Not adding card - I suspect its because of an error with reloading the full project after submitting and data is not persisting in localstorage*/
			let newCard = cardController.addCard(data);
			console.log(newCard);

			createController.clearData();
		});
	}
}

let app = new App();
