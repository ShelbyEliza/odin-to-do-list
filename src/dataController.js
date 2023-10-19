class Data {
	active = [];
	archived = [];
	constructor(storageObj) {
		this.all = storageObj;
		if (storageObj.active.length > 0) {
			storageObj.active.forEach((project) => this.active.push(project));
		}
		if (storageObj.archived.length > 0) {
			storageObj.archived.forEach((project) => this.archived.push(project));
		}
	}
	getLocalStorage(location) {
		return JSON.parse(localStorage.getItem(location));
	}
	addProjectToLocalStorage(data) {
		localStorage.setItem("projects", JSON.stringify());
	}
}
// class Project {
// 	constructor(title, dueDate, priority, toDos, description) {
// 		this.title = title;
// 		this.dueDate = dueDate;
// 		this.priority = priority;
// 		this.toDos = toDos;
// 		this.description = description;
// 	}
// }
let allData = new Data(JSON.parse(localStorage.getItem("projects")));
console.log(allData);

export { allData };
