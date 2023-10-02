# odin-to-do-list

The Odin Project: To Do List

## Requirements:

### Individual Todos

Each 'todo' is an **object**: constructors, factory functions, modules, or classes.

Properties:

- title
- description
- duedate
- priority
- notes?
- checklist?

### Todo List

Todo lists are organized by **Projects**. Starting with an initial default project.

Users can create new projects and assign todos to specific projects.

When todos are complete they are sent to the archive.

### Organization

Application Logic Module

DOM View Module

### User Interface

- View all projects
- View all todos in a project (title and duedate) with the priority color
- Todos can be expanded to see/edit its details
  - Change priority
  - Edit notes / description / title / duedate
  - Mark off todos on checklist
- Delete a todo

#### Useful Links

[date-fns](https://github.com/date-fns/date-fns)

[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

- Add functionality in case data cannot be retrieved
- Inspect localStorage saved data with DevTools! Open the Application tab, then the Local Storage tab under Storage.
