// =============================================
// Project Setup - Node.js/Express/MongoDB
// =============================================

// YouTube link: https://youtu.be/qj2oDkvc4dQ

// Install basic Express.js server with npm (http://expressjs.com/).
//  - npm i express (server) ejs (templating language) express-ejs-layouts (creates layouts for HTML files)
// Full command: npm install express ejs express-ejs-layouts

// Install nodemon as a development dependency. This will refresh our server every time we update the codebase. (https://nodemon.io/)
//  - npm install --save-dev nodemon

// IMPORTANT: For some reason the "i" command is creating errors on my system, particularly when used with the "--save-dev" flags. Use the "install" command instead.

// package.json scripts:
// "start": "node server.js" (This script will start the server on a production environment without nodemon.)
// "devStart": "nodemon server.js" (This will start our nodemon dev server that will restart every time the codebase is updated.)

// In node.js and express Land MVC controllers are usually called "routes".

// Install MongoDB (https://www.mongodb.com/try/download/community)
//  - Make sure to install MongoDB as a Service and run the service as a Network Service user. This will allow MongoDB to run as a background service on your computer so you do not have to manually start and stop it. It is a small service and will not use many resources.

// Default MongoDB folder: C:\Program Files\MongoDB\

// Some basic MongoDB commands:
//  - show databases - Shows all of the available databases.
//  - show dbs - Shows all of the available databases.
//  - use [database name] - Creates and switches to a new database.
//  - db.items.insert({name: "name"}) - Inserts a name field with the value of "name" into a database.
//  - db.items.find() - Finds all items in a database.

