<h1 align="center">
  <img alt="Imagem da Logo do Framework express.js" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="120" /><br><br> Express Users Management MVC API
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gftf2011/express-mvc">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gftf2011/express-mvc">
  
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/gftf2011/express-mvc">

  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/57da729bfb76423189a1dd294ffdcb59">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gftf2011/express-mvc">

  <img alt="GitHub forks" src="https://img.shields.io/github/forks/gftf2011/express-mvc">

  <img alt="Github stars" src="https://img.shields.io/github/stars/gftf2011/express-mvc">

  <img alt="License" src="https://img.shields.io/github/license/gftf2011/express-mvc">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gftf2011/express-mvc">
</p>

<p align="center">
  <a href="#smiley-purpose">Purpose</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-architecture">Architecture</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#car-run-the-application">Run the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#airplane-application-routes">Application routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :smiley: Purpose

<p align="center">
  This project was built with intention to explore the MVC application pattern with the use of an interface module for PostgresSQL database! To do it it will be used, as weel, the express framework and exploring its aplication-level middlewares structure.
</p>

## :hammer: Architecture

<p align="center">
  The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.
</p>

-   Model
<p align="center">
  The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. For example, a Customer object will retrieve the customer information from the database, manipulate it and update it data back to the database or use it to render data.
</p>

-   View
<p align="center">
  The View component is used for all the UI logic of the application. For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with..
</p>

-   Controller
<p align="center">
  Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the Customer Model. The same controller will be used to view the Customer data.
</p>

## :rocket: Technologies

-   [yarn](https://classic.yarnpkg.com/lang/en/)
-   [node.JS](https://nodejs.org/en/)
-   [node-postgres](https://node-postgres.com/)
-   [eslint](https://eslint.org/)

## :car: Run the application

1.  node.js installation [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2.  YARN installation [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)
3.  Clone project in your PC :computer:
4.  Open the project with a text editor and run 'yarn' to download the dependencies
5.  Postman download [https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/)
6.  Run 'yarn dev' to use the <strong>endpoints<strong/>

## :airplane: Application routes

-   <strong>`GET /users :`<strong/> <i>Endpoint responsible to read all users<i/><br/><br/>
Endpoint Return Example:
```json
[
  {
    "id": "1",
    "email": "example@gmail.com",
    "password_hash": "$2y$07$LVJ.b28J6ixiJx13QSGzqe8r9DGUI.biuF.lRIgSf2EXALCtIITci"
  },
  {
    "id": "2",
    "email": "example2@gmail.com",
    "password_hash": "$2y$07$LVJ.b28J6ixiJx13QSGzqe8r9DGUI.biuF.lRIgSf2EXALCtIITci"
  }
]
```
-   <strong>`POST /projects :`<strong/> <i>Endpoint responsible to create a user receiving in the request body the user's `email`, which is unique and it's `password`<i/><br/><br/>
Request body example below:
```json
{
  "email": "example3@gmail.com",
  "password": "123456"
}
```
Endpoint Return Example:
```json
{
  "id": "3",
  "email": "example3@gmail.com",
  "password_hash": "$2y$07$LVJ.b28J6ixiJx13QSGzqe8r9DGUI.biuF.lRIgSf2EXALCtIITci"
}
```
-   <strong>`PUT /users :`<strong/> <i>Endpoint responsible to update a specific user's `password` given its `email`, `password` and `new_password`<i/><br/><br/>
Request body example below
```json
{
  "email": "example@gmail.com",
  "password": "123456",
  "new_password": "1234567"
}
```
Endpoint Return Example:
```json
{
  "id": "1",
  "email": "example1@gmail.com",
  "password_hash": "$2y$07$2yrDXn61CoHH.SMpnYvBS.oc6JeyzB8KDs.7FLoCK7IRThnxmdhBe"
}
```
-   <strong>`DELETE /users :`<strong/> <i>Endpoint responsible to remove a specific user given its `email`.<i/><br/><br/>
Request body example below
```json
{
  "email": "example@gmail.com"
}
```
Endpoint Return Example:
```json
{
  "id": "1",
  "email": "example1@gmail.com",
  "password_hash": "$2y$07$2yrDXn61CoHH.SMpnYvBS.oc6JeyzB8KDs.7FLoCK7IRThnxmdhBe"
}
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/gftf2011/express-mvc/blob/master/LICENSE) for more information

---
Made with ♥ by Gabriel Ferrari Tarallo Ferraz :wave: [Get in touch!](https://www.linkedin.com/in/gabriel-ferrari-tarallo-ferraz-7a4218135/)
