# NestJS App with MySQL Database 🚀

## Description
This project is a NestJS application integrated with a MySQL database using TypeORM. It demonstrates the basic setup and CRUD operations.

## Prerequisites 🛠️

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MySQL](https://www.mysql.com/) (v8.x or later)

## Installation 🔧

1. **Clone the repository:**

   ```bash
   git clone  https://github.com/DulyaDeCosta/nestjs-mysql-web-api.git
   cd nestjs-mysql-web-api
   ```
2. **Install dependencies:**
  ```bash
    npm install
  ```
3. **Install TypeORM and MySQL dependencies:**
   ```bash
    npm install @nestjs/typeorm typeorm mysql
    ```
  ## Set Up MySQL ⚙️
  
  Ensure your MySQL server is running.
  Create a new database.
  
  Configure your database connection:
  
  Edit the src/app.module.ts file to set up your MySQL database connection in the TypeORM configuration.
  
  ## Running the Application 🚀
  
  **Build the project:** 
  ```bash
    npm run build
  ```
  **Start the server:**
  ```bash
    npm run start
  ```
  Your server will be running on http://localhost:3000.
  
  ## Usage 📋
  
  API Endpoints: Check your application for available API endpoints and their usage.
  
  Database: You can interact with your database using TypeORM and the provided repository services.
