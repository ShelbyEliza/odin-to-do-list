import "./styles.css";

import { HTMLElement, NavButton } from "./helper.js";
import { ProjectController } from "./projects.js";
import { NavController } from "./nav.js";

const fullPageDiv = document.getElementById("content");

/** Build Header Content: */
const header = new HTMLElement("header", "site-header", fullPageDiv);

new HTMLElement(
	"h1",
	"site-title-el",
	header.getElement(),
	"To Do Or Not To Do?"
);

new HTMLElement(
	"p",
	"site-sub-title-el",
	header.getElement(),
	"That is the task"
);

/** Build Page Content: */
const pageContent = new HTMLElement("div", "page-content", fullPageDiv);

function Nav() {
	const tabs = [];

	const homeTab = new NavButton(
		"button",
		"tab",
		navBar.getElement(),
		"Projects"
	);
	const createTab = new NavButton(
		"button",
		"tab",
		navBar.getElement(),
		"Create"
	);

	tabs.push(homeTab, createTab);

	const getTab = () => tabs;
}
console.log(header.dom);
const navView = new NavController(header.dom);

const projectsView = new ProjectController(pageContent.getElement());

projectsView.createProject([
	"Clean the House",
	"10/05/2023",
	"Clean up the kitchen, living room, and bathroom.",
	5,
	["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
	projectsView.myProjects,
]);
projectsView.createProject([
	"Make Dinner",
	"10/05/2023",
	"Clean up the kitchen, living room, and bathroom.",
	5,
	["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
	projectsView.myProjects,
]);
