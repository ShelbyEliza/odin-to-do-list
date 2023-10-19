import { HTMLElement } from "./helper";

class AllCards {
	constructor(pageWrapper) {
		this.wrapper = new HTMLElement("div", ["all-cards-wrapper"], pageWrapper);
		this.allCardsHeading = new HTMLElement(
			"h2",
			["page-heading"],
			this.wrapper.dom,
			"All Projects"
		);
	}
}

class Card {
	constructor(parentElement, id, title, dueDate, description, priority, todos) {
		this.wrapper = new HTMLElement("div", ["card-wrapper"], parentElement);

		this.id = id;
		this.title = new HTMLElement("h3", ["title"], this.wrapper.dom, title);
		this.dueDate = new HTMLElement(
			"p",
			["due-date"],
			this.wrapper.dom,
			dueDate
		);
		this.deleteBtn = new HTMLElement(
			"button",
			["delete-btn", "btn"],
			this.wrapper.dom,
			"X"
		);
		this.description = new HTMLElement(
			"p",
			["description"],
			this.wrapper.dom,
			description
		);
		this.priority = new HTMLElement(
			"p",
			["priority"],
			this.wrapper.dom,
			priority
		);
		this.todoWrapper = new HTMLElement(
			"ul",
			["todos-wrapper"],
			this.wrapper.dom
		);
		todos.forEach((todo) => {
			new HTMLElement("li", ["todo"], this.todoWrapper.dom, todo);
		});

		// this.deleteBtn.dom.addEventListener("click", (e) => {
		// 	e.preventDefault();
		// 	// console.log(id);
		// });
	}
	// deleteProject(e) {
	// }
}

class CardController {
	constructor(pageWrapper) {
		this.allCards = [];
		this.allCardsWrapper = new AllCards(pageWrapper);
	}

	addCard(projectProps) {
		let newCard = new Card(this.allCardsWrapper.wrapper.dom, ...projectProps);
		this.allCards.push(newCard);
		return newCard;
	}
	deleteCard(cardDom) {
		cardDom.remove();
	}
}

export { CardController };
