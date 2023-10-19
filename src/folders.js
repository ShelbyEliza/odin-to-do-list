import { HTMLElement } from "./helper";

class FoldersWrapper {
	constructor(pageWrapper) {
		this.dom = new HTMLElement("div", ["folders-wrapper"], pageWrapper);
	}
}
class FolderHeading {
	constructor(folderTab, parentElement) {
		this.dom = new HTMLElement(
			"h2",
			[`${folderTab.title.toLowerCase()}`],
			parentElement,
			folderTab.title
		);
		this.title = folderTab.title;
	}
}

class FolderController {
	constructor(pageWrapper, data) {
		this.allFolderTabs = [];
		this.folderWrapper = new FoldersWrapper(pageWrapper);

		data.forEach((folder) => {
			let newFolderTab = new FolderHeading(folder, this.folderWrapper.dom);
			this.allFolderTabs.push(newFolderTab);
		});
	}
}

export { FolderController };
