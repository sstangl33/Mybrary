Web Dev Simplified - Full Stack Web Development Course
=========================================================

Node.js/Express/MongoDB Course
What is REST?
---------------------------------------------

REST - **RE**presentation **S**tate **T**ransfer

REST is a standard way that a server responds to Create, Read, Update, and Delete (CRUD) requests. The idea behind REST is to treat all server URLs as access points for the various resources on the server.

For example, in the URL path below "users" represents the resource the server is exposing.
```
http://example.com/users
```
The following five URLs are the URL paths a REST server uses to Create, Read, Update, and Delete resources. The first two URLs do not have an id, so they act upon the entire resource. The last three URLs have an id, so they only act upon the resource associated with that id.

  - **Create [POST] Request** 
    - Does not have an id in its URL path 
    - Acts upon the entire resource
    - Will create a new item in the resource

      ```
      http://example.com/users
      ```
  - **Read [GET]**
    - Does not have an id in its URL path 
    - Acts upon the entire resource
    - Will return a list of every item in the resource

      ```
      http://example.com/users
      ```
  - **READ [GET]**
    - Has an id in its URL path 
    - Acts only on the item in the resource associated with the id
    - Will return the item associated with the id
    
      ```
      http://example.com/users/1
      ```
  - **Update [PUT]**
    - Has an id in its URL path 
    - Acts only on the item in the resource associated with the id
    - Will update the item associated with the id

      ```
      http://example.com/users/1
      ```
  - **Delete [DELETE]**
    - Has an id in its URL path 
    - Acts only on the item in the resource associated with the id
    - Will update the item associated with the id

      ```
      http://example.com/users/1
      ```

A website's URLs do not need to be formatted exactly like the examples above in order to use REST. For example, the URLs below would still be considered RESTful. However, must applications use the URLs listed above. The only thing that matters with REST is that the URLs used represent a resource, and that they support CRUD (Creating, Reading, Updating, and Deleting) from that resource using the HTTP actions GET, POST, PUT (PATCH), and DELETE.

```
[GET]     http://example.com/users
[POST]    http://example.com/users
[GET]     http://example.com/users/details/1
[PUT]     http://example.com/users/update/1
[DELETE]  http://example.com/users/delete/1
```

---------------------------------------------

Node.js/Express/MongoDB Course
MVC Explained in 4 Minutes
---------------------------------------------

MVC - **M**odel **V**iew **C**ontroller

MVC is popular pattern for building complex applications that makes the code much easier to build, read, and maintain. The goal of MVC is to split a large application into specific sections that all have their own purpose. 
```
       ┌───────────────────────────┐              ┌───────────────────────────┐
       │ Model                     │              │ View                      │
       │                           │              │                           │
       │                           │              │  <body>                   │
       │    Select * FROM cats;    │              │    <h1>Cats || Error</h1> │
       │                           │              │    ...                    │
       │                           │ ──┐      ┌── │  </body>                  │
       │                           │   │      │   │                           │
       └───────────────────────────┘   │      │   └───────────────────────────┘
                   ▲                   │      │                ▲
                   │                   │      │                │
                   │                   │      │                │
  2. Get Cat Data  │                   ▼      ▼                │  3. Get Cat or Error Presentation
                   │       ┌───────────────────────────┐       │
                   │       │ Controller                │       │
                   └────── │                           │ ──────┘
┌────────┐                 │        if (success)       │
│        │  1. Get Cats    │          View.cats        │
│ Server │ ──────────────► │        else               │
│        │ ◄────────────── │          View.error       │
└──┬──┬──┘ 4. Return Cats  │                           │
   └──┘       or Error     └───────────────────────────┘
```

**Server**
  - Sends all request information to specific Controller based on the URL
                                                          
**Controller**
  - Handles entire request from the client
  - Tells the rest of the server what to do with the request
  - Acts as a middle-man between Model and View
  - Should not contain much code
  - After receiving a request, the controller will first ask the Model for information based on the request
  - Never handles data logic
  - Manages the failure/success responses of requests
  - After the Controller receives a response from the Model, it will then interact with the view to render the data to the user
  - After the Controller receives the final presentation from the View, it will send it to the user

**Model**
  - Responsible for handling all of the data logic of a request
  - Interacts with the database and handles all of the following data operations:
    - validation
    - saving 
    - updating
    - deleting
    - reading
  - The Controller should never interact with the data. Only the Model should perform these interactions
  - Never handles requests or failure/success responses of requests
  - Only cares about interacting with the data
  - Never interacts with the View

**View**
  - Responsible for presenting the data it receives from the controller
  - The view will be a template file that dynamically render HTML based on the data received from the Controller
  - Sends final presentation of the data back to the Controller
  - Never interacts with the Model

**IMPORTANT**: The Model and the View never interact directly. This means the logic and presentation of data are completely separated which makes completing complex applications much easier.

**M**odel - Handles all data  

**V**iew - Handles all presentation  

**C**ontroller - Tells the Model and View what to do

---------------------------------------------

Node.js/Express/MongoDB Course
01 - Project Setup
---------------------------------------------

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

---------------------------------------------

Node.js/Express/MongoDB Course
02 - Author's Index/Create/New Routes
---------------------------------------------

YouTube link: https://youtu.be/esy4nRuShl8
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.1

npm Packages:
  - nodemon - Automatically reloads node server when the code base is updated. (https://nodemon.io/)
  - dotenv - Loads environment variables from .env file. (https://www.npmjs.com/package/dotenv)
  - body-parser - Helps express.js access input elements form our node server. (https://www.npmjs.com/package/body-parser)
  - IMPORTANT: body-parser is now bundled with express.js. Do not install it or import it into server.js. Just configure the express application to use the urlencoded method: app.use(express.urlencoded({ limit: "10mb", extended: false }));

---------------------------------------------

Node.js/Express/MongoDB Course
03 - Books Index/Create/New Routes
---------------------------------------------

YouTube link: https://youtu.be/Zi2UwhpooF8
Lesson code: https://youtu.be/Zi2UwhpooF8

