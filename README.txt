******************************************************************************			
		My First Node JS MySQL CRUD Application
******************************************************************************
1.  extract the my-node-web zip file
2.  make directory abc
3.  make database nodejs and import nodejs.sql file
4.  copy the package.json file into abc folder
5.  then go to the command prompt
6.  type npm install
7.  copy public,routes,views folder and app.js file from my-node-web folder 
8.  paste into abc folder
9.  go to the command prompt 
10. type node app.js
11. go to the browser type http://localhost:4300/customers and enter
12. browse the project by browser

******************************************
****** Project Folder Structure  *********
******************************************

 Project Name
 |-- public
 |   |--css
 |	 |--images
 | 	 |--js
 |		 |--all.js [for common functions]	
 | 
 |-- routes
 |	  |--customers.js
 | 	  |--index.js
 | 
 |-- views
 |	  |--layouts
 |	  |	  |--header.ejs
 |	  |	  |--footer.ejs
 |    |
 |	  |--add_customers.ejs
 |	  |--customers.ejs
 |	  |--edit_customer.ejs
 |	  |--index.ejs
 |
 |--app.js
 |--package.json 