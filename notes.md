// class Header {
// constructor() {
// this.header = document.createElement("header");
// siteTitle = document.createElement("h1");

// this.header.classList.add("header");
// siteTitle.classList.add("site-title");

// siteTitle.textContent = "To Do or Not To Do?";

// header.appendChild(siteTitle);
// }

// return header;

// appendTabToHeader(tabs) {
// tabs.forEach(tab => {
// buildHeader
// });
// }

// }

// class ProjectView {
// constructor(project, parentElement) {
// projectWrapper = new HTMLElement(
// "div",
// "project-wrapper",
// parentElement
// );
// this.projectTitle = new HTMLElement(
// "h2",
// "title",
// this.projectWrapper,
// project.title
// );
// this.projectDueDate = new HTMLElement(
// "p",
// "due-date",
// this.projectWrapper,
// project.dueDate
// );
// }
// getProjectView() {
// return this.projectWrapper;
// }
// }

///////////////////////

import "./styles.css";

import { HTMLElement, NavButton } from "./helper.js";

import { Projects, Project, ProjectController } from "./projects";

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
// pageContent.appendChild()

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

// console.log(siteTitle.getElement());

// siteTitle.appendChildEl(fullPageDiv);

const view = new ProjectController(pageContent.getElement());

// const myProjects = new Projects();
// const myProjectsView = new ProjectsView(pageContent.getElement());

// const cleanHouses = new Project(
// "Clean the House",
// "10/05/2023",
// "Clean up the kitchen, living room, and bathroom.",
// 5,
// ["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
// view.myProjects
// );

// console.log(view.myProjects.getAllProjects());

// const cleanHouse = new Project(
// "Clean the House",
// "10/05/2023",
// "Clean up the kitchen, living room, and bathroom.",
// 5,
// ["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
// );
view.createProject(
"Clean the Houses",
"10/05/2023",
"Clean up the kitchen, living room, and bathroom.",
5,
["Do the Dishes", "Vacuum", "Clean the Cat Litter", "Clean the Toilet"],
view.myProjects
);
