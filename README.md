# ImpressThy
### Used VisualStudioCode to host the server.
	After having the required modules in place, the following command would render the home page
***npm run build***
***npm start***
#### Files available
	1. index.js - the ultimate DOM rendering module	
	2. index.html - the html file with the root element (gets updated by other rendering modules)
	3. App.js - the module for the static Home screen (Imports two other dynamic modules "AddExpense" and "AddIncome")
	4. AddExpense.js - renders a popup form to accept new expense details
	5. AddIncome.js - renders a popup form to accept new income details
	6. package.json - configuration file
	7. App.css - the style sheet
	
	
### Functionality
	1. The Summary bar shows the Total Income, Total Expense, and Net Balance
	2. The entries so far added will be displayed below the summary bar
	3. New entries can be made using the "Add Income" and "Add Expense" buttons at the bottom bar
	4. The storage is done using the browser local storage
	5. There are few POP-UPs included just for development purpose
