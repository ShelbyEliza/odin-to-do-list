import "./styles.css";

import { HTMLElement, NavButton } from "./helper.js";

import { ProjectController } from "./projects";

const fullPageDiv = document.getElementById("content");

const header = new HTMLElement("header", "site-header", fullPageDiv);

const siteTitle = new HTMLElement(
	"h1",
	"site-title-el",
	header.getElement(),
	"To Do Or Not To Do?"
);

const siteSubTitle = new HTMLElement(
	"p",
	"site-sub-title-el",
	header.getElement(),
	"That is the task"
);
const pageContent = new HTMLElement("div", "page-content", fullPageDiv);

const navBar = new HTMLElement("nav", "nav-bar", header.getElement());

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

function NavControler() {
	const nav = Nav();
	let activeTab = nav.homeTab;

	function switchTabs(selectedTab, module) {
		if (selectedTab !== activeTab) {
			while (pageContent.firstChild) {
				pageContent.removeChild(tabContentDiv.firstChild);
			}
			tabContentDiv.appendChild(module);
			prevTab = newTab;
		}
	}
}

const view = new ProjectController(pageContent.getElement());

view.createProject([
	"Clean the House",
	"10/05/2023",
	"Clean up the kitchen, living room, and bathroom.",
	5,
	["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
	view.myProjects,
]);
view.createProject([
	"Make Dinner",
	"10/05/2023",
	"Clean up the kitchen, living room, and bathroom.",
	5,
	["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
	view.myProjects,
]);
