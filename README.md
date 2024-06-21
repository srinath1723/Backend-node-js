# Backend Application

## Description

This is a backend application that provides a RESTful API examples. The application is built using the following technologies:

Node.js

Express.js

MongoDB

Mongoose

**git checkout -b server1.2**
**node index.js**
npm init 

                    package.json:
                    "scripts":{
                    "start": "node index.js"
                        }
npm start;or npm  run start

npm install express

npm start;or npm  run start
*npm install nodemon --save-dev*
                    package.json:
                    "scripts":{
                    "start": "node index.js"
                    "dev":"nodemon index.js"
                        }
npm run dev

Steps to setup the application:
. Create an empty directory
. Generate a package.json file by running npm init -y or npm init
. Install the required dependencies:
npm install express
. Create an entry point file (e.g. index.js) in the root directory
. In the index.js file:
Import express
Create an express app
Define a basic root route for the app inside index.js after creating the express app
app.get("/", (req, res) => {
 res.send("Hello World");
});
listen for incoming http requests on a specific port
. Run the application by running node index.js
Enable git version control
. Initialize a git repository by running git init
. Create a .gitignore file and add the following entries:
node_modules/
.DS_Store
package-lock.json
. Rename the branch to main by running git branch -M main
. Add the changes to the staging area by running git add .
. Commit the changes by running git commit -m "Initial commit"
. Create a new repository on GitHub and copy the repository URL
. Add the remote repository in the vscode terminal by running git remote add origin
<repository-url>
. Push the changes to the remote repository by running git push -u origin main
Create a README.md file
. Create a README.md file in the root directory
. Add a description of the application
Enable nodemon for automatic server restarts
. Install nodemon as a development dependency by running npm install --save-dev nodemon
. Add a start script in the package.json file
"scripts": {
 "start": "node index.js",
 "dev": "nodemon index.js"
}
. Run the application in development mode by running npm run dev

-------------------------------------------------------------------------
npm install mongoose;