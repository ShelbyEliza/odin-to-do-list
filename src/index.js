import "./styles.css";

import { HTMLElement } from "./helper.js";
import { ProjectController } from "./projects.js";
import { Nav, NavController } from "./nav.js";
import { CreateForm } from "./create";
import Data from "./data.json";
import { LocalData } from "./storageAvailable";

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

/** Create NavBar: */
// const navView = new NavController(header.dom);
const navView = new NavController(header.dom);
console.log(navView.allTabs);

const projectsView = new ProjectController(pageContent.getElement());
const createView = new CreateForm(pageContent.getElement());
/** Storage Control: */
let localStore = new LocalData("projects", Data.projects, projectsView);
