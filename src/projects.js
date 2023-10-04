import { HTMLElement } from "./helper";

class Projects {
	allProjects = [];

	addProject(project) {
		this.allProjects.push(project);
	}

	getAllProjects() {
		return this.allProjects;
	}
}

class Project {
	constructor(title, dueDate, description, priority, todos) {
		this.title = title;
		this.dueDate = dueDate;
		this.description = description;
		this.priority = priority;
		this.todos = todos;
		this.id = this.assignID();
	}

	getFullProject() {
		return this;
	}

	getBriefDetails() {
		return [this.title, this.dueDate, this.priority, this.id];
	}

	assignID() {
		let randomNumb = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
		return this.title[0] + this.title[2] + this.title[3] + "-" + randomNumb;
	}
}

class ProjectController {
	constructor(parentElement) {
		this.projectsParent = new HTMLElement(
			"div",
			"projects-wrapper",
			parentElement
		);
		let allProjectsHeading = new HTMLElement(
			"h2",
			"page-heading",
			this.projectsParent.dom,
			"All Projects"
		);
		this.myProjects = new Projects();
	}
	addProjectDOM(project) {
		let projectWrapper = new HTMLElement(
			"div",
			"project-wrapper",
			this.projectsParent.dom
		);
		this.projectTitle = new HTMLElement(
			"h3",
			"title",
			projectWrapper.dom,
			project.title
		);
		this.projectDueDate = new HTMLElement(
			"p",
			"due-date",
			projectWrapper.dom,
			project.dueDate
		);
	}
	addProjectData(projectProps) {
		let newProject = new Project(...projectProps);

		this.myProjects.addProject(newProject);
		return newProject;
	}

	createProject(projectProps) {
		let newProject = this.addProjectData(projectProps);
		this.addProjectDOM(newProject);
	}

	getMyProjects() {
		return this.myProjects.allProjects;
	}
}

export { ProjectController };
