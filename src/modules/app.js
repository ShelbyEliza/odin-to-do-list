class Todo {
	constructor(title, description, dueDate, priority, project) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.activeStatus = true;
		this.project = project ? project : "default";
		this.id = this.assignID();
	}

	/** Edit Todo properties */
	setTitle = (newTitle) => {
		this.title = newTitle;
	};
	setDescription = (newDescription) => {
		this.description = newDescription;
	};
	setDueDate = (newDueDate) => {
		this.dueDate = newDueDate;
	};
	setPriority = (newPriority) => {
		this.priority = newPriority;
	};
	setProject = (newProject) => {
		this.project = newProject;
	};
	assignID() {
		let randomNumb = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
		return this.title[0] + this.title[2] + this.title[3] + "-" + randomNumb;
	}

	deactivateTask = () => {
		// TODO: send to archive
		this.activeStatus = this.activeStatus === true ? false : true;
	};

	/** Get properties */
	getBriefDetails = () => {
		this.title, this.dueDate;
	};
}

class Projects {
	allProjects = [];

	addProject = (project) => {
		this.allProjects.push(project);
	};
}

class Project {
	constructor(title, description, dueDate) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
	}
}

let cleanUp = new Project(
	"Clean up house",
	"Every room in the house is dirty.",
	new Date("October 2, 2023")
);
