function isStorageAvailable() {
	let storage;
	try {
		storage = window["localStorage"];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}

function ProjectStorage(location) {
	/** check if storage can be used: */
	if (!isStorageAvailable()) {
		throw new Error("LocalStorage is not available");
	} else {
		/** check if user has existing projects storage: */
		let projectStorage = JSON.parse(localStorage.getItem(location));
		if (projectStorage) {
			// console.log("User has existing Storage:", projectStorage);
			return projectStorage;
		} else {
			console.log("User has no previous data.");
			return false;
		}
	}
}

function addProjectToStorage(newProjectData, allData) {
	allData.active.push(newProjectData);
	localStorage.setItem("projects", JSON.stringify(allData));

	let keys = [];
	for (const prop in newProjectData) {
		keys.push(newProjectData[prop]);
	}
	return keys;
}

function deleteProjectFromStorage(projectToDelete, allData) {
	let toKeep = allData.active.filter(
		(project) => project.id !== projectToDelete
	);

	allData.active = toKeep;
	localStorage.setItem("projects", JSON.stringify(allData));
}

export { ProjectStorage, addProjectToStorage, deleteProjectFromStorage };
