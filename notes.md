=============================================
Node.js/Express/MongoDB Course
01 - Project Setup
=============================================

YouTube link: https://youtu.be/qj2oDkvc4dQ
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.0

Install basic Express.js server with npm (http://expressjs.com/).
  - npm i express (server) ejs (templating language) express-ejs-layouts (creates layouts for HTML files)
Full command: npm install express ejs express-ejs-layouts

Install nodemon as a development dependency. This will refresh our server every time we update the codebase. (https://nodemon.io/)
  - npm install --save-dev nodemon

IMPORTANT: For some reason the "i" command is creating errors on my system, particularly when used with the "--save-dev" flags. Use the "install" command instead.

package.json scripts:
"start": "node server.js" (This script will start the server on a production environment without nodemon.)
"devStart": "nodemon server.js" (This will start our nodemon dev server that will restart every time the codebase is updated.)

In node.js and express Land MVC controllers are usually called "routes".

Install MongoDB (https://www.mongodb.com/try/download/community)
  - YouTube link: https://github.com/WebDevSimplified/Mybrary/tree/v1.0
  - Make sure to install MongoDB as a Service and run the service as a Network Service user. This will allow MongoDB to run as a background service on your computer so you do not have to manually start and stop it. It is a small service and will not use many resources.

Default MongoDB folder: C:\Program Files\MongoDB\

Some basic MongoDB commands:
  - show databases - Shows all of the available databases.
  - show dbs - Shows all of the available databases.
  - use [database name] - Creates and switches to a new database.
  - db.items.insert({name: "name"}) - Inserts a name field with the value of "name" into a database.
  - db.items.find() - Finds all items in a database.

=============================================
Node.js/Express/MongoDB Course
02 - Author's Index/Create/New Routes
=============================================

YouTube link: https://youtu.be/esy4nRuShl8
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.1

npm Packages:
  - nodemon - Automatically reloads node server when the code base is updated. (https://nodemon.io/)
  - dotenv - Loads environment variables from .env file. (https://www.npmjs.com/package/dotenv)
 - body-parser - Helps express.js access input elements form our node server. (https://www.npmjs.com/package/body-parser)
 - IMPORTANT: body-parser is now bundled with express.js. Do not install it or import it into server.js. Just configure the express application to use the urlencoded method: app.use(express.urlencoded({ limit: "10mb", extended: false }));