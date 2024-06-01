# Skill-App

Skill App is a web application that allows users to register, log in, and manage their skills. It provides functionality for adding and removing skills and displays users and their respective skills.

Live Link: https://665b789b7c1671f787c02ce8--prismatic-brigadeiros-14ae59.netlify.app/

## Table of Contents
- Features
- File Structure
- Installation
- Usage
- Backend Endpoints
- Frontend Components
- Technologies Used
- Web Preview
## Features
- User authentication (register, login, logout)
- Add and remove skills
- View all users and their skills
- Secure routes with authentication middleware
## File Structure
  
    skill-app/
    │
    ├── backend/
    │   ├── controllers/
    │   │   └── skillController.js
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   ├── models/
    │   │   ├── Skill.js
    │   │   └── User.js
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   └── skillRoutes.js
    │   └── server.js
    │
    ├── frontend/
    │   ├── public/
    │   │   └── index.html
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── AuthForm.js
    │   │   │   ├── Navbar.js
    │   │   │   ├── SkillForm.js
    │   │   │   └── UserList.js
    │   │   ├── pages/
    │   │   │   ├── Dashboard.js
    │   │   │   └── Home.js
    │   │   ├── utils/
    │   │   │   └── api.js
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── App.css
    │   └── package.json
    │
    ├── .gitignore
    ├── README.md
    └── package.json
  

## Installation

### Prerequisites
- Node.js
- npm
- MongoDB
- 
### Backend Setup
1. Clone the repository:
   ```bash
    git clone https://github.com/krishna7054/Skill-App.git
    cd skill-app/backend
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file with the following content:
   ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
4. Start the backend server:
    ```bash
    npm run dev
The backend server will be running on http://localhost:5000.

### Frontend Setup
1.Navigate to the frontend directory:

  ``bash
cd frontend
  
2. Install dependencies:
    ```bash
    npm install
3. Start the frontend development server:
    ```bash
    npm start
The frontend server will be running on http://localhost:3000.

## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Register a new user or log in with an existing account.
3. Add or remove skills and view all users and their skills.
   
## Backend Endpoints
- POST /api/auth/register: Register a new user
- POST /api/auth/login: Log in a user
- GET /api/auth/user: Get authenticated user's information
- POST /api/skills/add-skill: Add a new skill
- GET /api/skills/users: Get all users and their skills
- GET /api/skills/users/
: Get a specific user and their skills
- DELETE /api/skills/delete-skill/
: Delete a skill by ID

## Frontend Components
- AuthForm: Handles user registration and login
- Navbar: Navigation bar with links to Home, Login, Register, and Dashboard
- SkillForm: Form to add new skills and display current skills
- UserList: Displays a list of all users and their skills
## Technologies Used
- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Frontend: React, Axios, Tailwind CSS
- Authentication: JSON Web Tokens (JWT)

  ## preview
  ![image](https://github.com/krishna7054/Skill-App/assets/102844052/580b3793-044c-443f-b29b-871b1e1d213f)
  ![image](https://github.com/krishna7054/Skill-App/assets/102844052/ac9de8f9-ba17-495b-aa34-4a12565052fc)
  ![image](https://github.com/krishna7054/Skill-App/assets/102844052/61fbe044-30a6-401e-9ac5-c7c0612d89c0)
  ![image](https://github.com/krishna7054/Skill-App/assets/102844052/a097256c-e314-469c-83b6-c0358dd95ac1)
  ![image](https://github.com/krishna7054/Skill-App/assets/102844052/f19d0e34-76e2-4520-9580-b5743cdcd71a)




