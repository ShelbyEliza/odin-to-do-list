import { HTMLElement } from "./helper";

export class HeaderController {
	constructor(parentEl) {
		this.header = new HTMLElement("header", "site-header", parentEl);

		new HTMLElement(
			"h1",
			"site-title-el",
			this.header.getElement(),
			"To Do Or Not To Do?"
		);

		new HTMLElement(
			"p",
			"site-sub-title-el",
			this.header.getElement(),
			"That is the task"
		);
	}
}
