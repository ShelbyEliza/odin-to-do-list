## On startup:

### index.js:

- Gets HTML DOM access point, fullPageDiv.
- Creates a header element and attaches it to fullPageDiv
- Creates a pageContent div.
  - pageContent will be the parent wrapper to whatever page is being displayed.
- navView, a new instance of the NavController, is defined.
- Event listeners are added to navView.[tabName]
  - onClick navView goes through nav.allTabs and adds or deletes the className, 'active'. Style change.

index.js defines navView as a new NavController instance
NavController creates an instance of the Navbar: DOM element, nav, that holds the NavButtons
