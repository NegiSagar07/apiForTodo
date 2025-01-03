# apiForTodo

Todo List REST API
A simple RESTful API for managing todo tasks built with Node.js, Express, and SQLite.
Features

Create, read, update, and delete todo tasks
Persistent storage using SQLite database
RESTful API architecture
Error handling and input validation
Timestamp tracking for tasks

Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager)

Project Structure
  apiForTodo/
  ├── package.json
  ├── README.md
  ├── todo.db
  └── src/
      ├── app.js           # Express app configuration
      ├── server.js        # Server startup
      ├── config/
      │   └── database.js  # Database configuration
      ├── models/
      │   └── Task.js      # Task model
      ├── controllers/
      │   └── taskController.js  # Request handlers
      ├── routes/
      │   └── taskRoutes.js      # API routes
      └── middleware/
          └── errorHandler.js     # Error handling middleware


Installation
  
Clone the repository:  
  git clone https://github.com/NegiSagar07/apiForTodo
  
install dependencies : 
  npm init -y
  npm install express sqlite3 body-parser
  npm install nodemon --save-dev


To start the server : npm run dev
