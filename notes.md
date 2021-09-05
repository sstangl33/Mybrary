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
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.2

Lesson Goals: Create the index, new, and create views for the books; and flesh-out the home page. There will be multi-part form uploads with files, and more complex search operations.

A file form is a multi-part form. In order for our form to be able to upload cover images, we need to install an npm package named multer which will give our form the multi-part form capabilities. 

Also, we will need to set enctype of our form to "multipart/form-data".
```
<form method="POST" action="/books" enctype="multipart/form-data">
```

We will also need a library built into node.js named path.

IMPORTANT: Heroku will not persist your files on the server. If the dynos are restarted your images and files will be deleted. A CDN is needed, but for this tutorial the images will be stored in the database. This is not an ideal solution.

---------------------------------------------

Node.js/Express/MongoDB Course
04 - File Upload Setup
---------------------------------------------

YouTube link: https://youtu.be/Xm5MzWvklbI
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.3

Lesson Goals: Use the FilePond library (https://pqina.nl/filepond/) to upload files to the database.

IMPORTANT: The filepond library will send a base64 string to the server instead of an image file. This means that we will be uploading a string instead of a file to the server, and we no longer need a multi-part image upload form, or multer, to handle image uploads.

---------------------------------------------

Node.js/Express/MongoDB Course
05 - Authors Show/Edit/Update/Delete Routes
---------------------------------------------

YouTube link: https://youtu.be/UIf1Lh9OZ-k
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.4

Lesson Goals: Create the show, edit, update, and delete routes for the authors; create "pre" actions for our models to maintain data integrity; and learn how to debug issues that main arise when working on the backend of a server.

IMPORTANT: Browsers can only make GET and POST requests. The Method Override library (https://www.npmjs.com/package/method-override) is needed to make PUT or DELETE requests.

Fun Fact: The Google bots are one reason you never want to use a GET request to delete data. When the Google bots crawl a website, they will click on every link within a site's GET routes in order to index the site. If you use a tags to delete data within GET routes, the Google bots will click every one of these links and delete everything on your site. NEVER EVER USE A GET REQUEST TO DELETE DATA. ALWAYS USE A DELETE REQUEST.

IMPORTANT: Anytime you have data that is associated to one another by an id, you must have "pre" actions in your data models to prevent them from being removed if there are other models referencing them. For example: in this lesson, we created a route to delete authors. However, we do not want to delete an author if there are books associated with that author's id. Therefore, in this lesson we added a "pre" action to the author's model that will check if any books are associated with an author's id before deleting the author. If the their are any associated books, the author will not be deleting and an error message will be displayed to the user. This operation is essential to maintain the data integrity of our application. Otherwise, there will be orphaned books that are not associated to any author, and this will lead to errors when we try to view these books.

IMPORTANT: Show routes must appear after New routes in the code base. Otherwise, the server will think '/new' is the id parameter in the Show route.

---------------------------------------------

Node.js/Express/MongoDB Course
06 - Finish Backend
---------------------------------------------

YouTube link: https://youtu.be/GtTolway2H0
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.5

Lesson Goals: Create the show, edit, update, and delete routes for the books.

---------------------------------------------

Node.js/Express/MongoDB Course
07 - General CSS Styles
---------------------------------------------

YouTube link: https://youtu.be/ToMlS8RjFiI
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.6

Lesson Goals: Create all of the general CSS styles for our application. This includes the background color, all of the header styles, and the button styles.

transfonter (https://transfonter.org/) is used to convert the fonts used in this lesson to web fonts.

IMPORTANT:  In order to use Live Server for a Node.js site, you must install the Live Serve Web Extension for in your browser. 

---------------------------------------------

Node.js/Express/MongoDB Course
08 - Form CSS Styles
---------------------------------------------

YouTube link: https://youtu.be/iPKrpRpUOzQ
Lesson code: https://github.com/WebDevSimplified/Mybrary/tree/v1.7

Lesson Goals: Style all of the form inputs for our application, and apply all of the styles created in last lesson to the rest of the application.

