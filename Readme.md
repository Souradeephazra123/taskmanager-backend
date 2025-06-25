# SeekHelpers Task API

A simple Express.js REST API for managing tasks, using an in-memory data store.  
Supports CRUD operations with basic validation.

---

## Features

- **GET /tasks**: Fetch all tasks
- **GET /tasks/:id**: Fetch a single task by ID
- **POST /tasks**: Add a new task (with validation)
- **PUT /tasks/:id**: Update a task's title or completed status
- **DELETE /tasks/:id**: Delete a task by ID

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd SeekHelpers
```

### 2. Install Dependencies
```sh 
npm install
```
### 3. Project Structure
        SeekHelpers/
    │   ├── controller/
    │   │   └── task.controller.js
    │   ├── router/
    │   │   └── task.routes.js
    │   └── [server.js]
    ├── [package.json]
    └── [Readme.md]

### 4. Run the Server (Development)

```sh
npm run dev
```

The server will start on http://localhost:8080 (or the port set in your environment).


API Endpoints

Get All Tasks

```sh
GET /tasks

{
  "message": "All Data retrieved successfully",
  "data": [
    { "id": 1, "title": "Sample Task", "completed": false }
  ]
}

```


Get Task by ID

```sh
GET /tasks/:id
```
