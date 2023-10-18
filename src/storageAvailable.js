function storageAvailable() {
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

function LocalData(location, data, projViewObj) {
	if (!storageAvailable()) {
		throw new Error("LocalStorage is not available");
	} else {
		if (Storage.length > 0) {
			/** user has existing storage */
			console.log("User has existing Storage:", Storage);
		} else {
			/** TODO: Remove Dumbie Data */
			setLocalStorage(location, data, projViewObj);
		}
	}
}

/** TODO: Remove Dumbie Data */
function setLocalStorage(location, data, projViewObj) {
	localStorage.setItem(location, JSON.stringify(data));
	let projectsData = JSON.parse(localStorage.getItem(location));

	if (projectsData) {
		projectsData.active.forEach(function (project) {
			let keys = [];
			for (const prop in project) {
				keys.push(project[prop]);
			}

			projViewObj.addCard(keys);
		});
	}
}

function addProjectToStorage(newProjectData) {
	let allData = JSON.parse(localStorage.getItem("projects"));

	allData.active.push(newProjectData);
	localStorage.setItem("projects", JSON.stringify(allData));

	let keys = [];
	for (const prop in newProjectData) {
		keys.push(newProjectData[prop]);
	}
	console.log(keys);
	return keys;
	// projViewObj.addCard(keys);
}

export { LocalData, setLocalStorage, addProjectToStorage };
