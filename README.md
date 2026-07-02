# 🔐 Secure Task Manager REST API

> A production-ready Task Manager REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**, featuring **Google OAuth**, **HTTP-only Cookies**, **Role-Based Authorization**, and industry-standard security best practices.

---

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens)
![Passport](https://img.shields.io/badge/Passport.js-Google%20OAuth-34E27A?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

---

# 📖 Overview

This project is a secure RESTful API that allows authenticated users to manage their personal tasks while following modern backend development practices.

The application implements **JWT Authentication**, **Google OAuth**, **HTTP-only Secure Cookies**, **Input Validation**, **Centralized Error Handling**, and several security layers to protect against common web vulnerabilities.

The project follows a clean architecture using the **MVC + Service Layer** pattern, making it scalable and maintainable.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- Google OAuth Authentication
- JWT Authentication
- HTTP-only Secure Cookies
- Logout
- Protected Routes
- Current Logged-in User

---

## Task Management

- Create Task
- View All Tasks
- View Single Task
- Update Task
- Delete Task

Only the owner of a task can access, update, or delete it.

---

## Security

- Helmet Security Headers
- Rate Limiting
- XSS Protection
- MongoDB Injection Protection
- Password Hashing using bcrypt
- HTTP-only Cookies
- JWT Verification
- Input Validation
- Environment Variables

---

## Error Handling

- Centralized Error Middleware
- Custom AppError Class
- Async Error Wrapper
- Validation Errors
- JWT Errors
- MongoDB Errors
- 404 Route Handler

---

# 🏗️ Project Structure

```text
task-manager-api/
│
├── src/
│
├── config/
│   ├── db.js
│   └── passport.js
│
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── notFound.middleware.js
│   └── rateLimiter.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
│
├── services/
│   ├── auth.service.js
│   └── task.service.js
│
├── utils/
│   ├── AppError.js
│   ├── catchAsync.js
│   └── generateToken.js
│
├── validators/
│   ├── auth.validator.js
│   └── task.validator.js
│
├── app.js
└── server.js
│
├── .env
├── package.json
└── README.md
```

---

# 🛠️ Technologies Used

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- Passport.js
- Google OAuth 2.0

### Security

- Helmet
- bcryptjs
- express-rate-limit
- xss-clean
- express-mongo-sanitize
- cookie-parser

### Validation

- express-validator

### Logging

- Morgan

---

# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/task-manager-api.git

cd task-manager-api
```

---

## Install dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/task-manager

JWT_SECRET=your_secret_key

JWT_EXPIRE=7d

CLIENT_URL=http://localhost:3000

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

---

# ▶️ Running the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/signup | Register a new user |
| POST | /api/auth/login | Login user |
| POST | /api/auth/logout | Logout |
| GET | /api/auth/me | Current authenticated user |
| GET | /api/auth/google | Google Login |
| GET | /api/auth/google/callback | Google Callback |

---

## Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/tasks | Create Task |
| GET | /api/tasks | Get User Tasks |
| GET | /api/tasks/:id | Get Single Task |
| PATCH | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

# 🔒 Security Features

- JWT Authentication
- Google OAuth
- Secure Cookies
- Password Hashing
- Route Protection
- Request Validation
- Helmet Security Headers
- MongoDB Injection Protection
- XSS Protection
- Rate Limiting
- Environment Variable Management

---

# 📋 Example Request

## Register

```http
POST /api/auth/signup
```

```json
{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"12345678"
}
```

---

## Create Task

```http
POST /api/tasks
```

```json
{
    "title":"Finish Backend Project",
    "description":"Complete the Task Manager REST API."
}
```

---

# 📌 HTTP Status Codes

| Code | Meaning |
|------|----------|
|200|OK|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# 🧪 Testing

The API can be tested using:

- Postman
- Thunder Client
- Insomnia

---

# 📈 Future Improvements

- Email Verification
- Password Reset
- Refresh Tokens
- Swagger API Documentation
- Docker Support
- Unit Testing
- Integration Testing
- CI/CD Pipeline
- File Uploads
- Task Categories
- Task Priorities
- Task Deadlines

---

# 👨‍💻 Author

**Yassine Kalhoum**

Backend Developer

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Acknowledgments

This project was developed as part of a backend security checkpoint to demonstrate:

- REST API Development
- Secure Authentication
- JWT Authorization
- Google OAuth Integration
- Express.js Best Practices
- MongoDB Data Management
- Backend Security Principles
- Clean Architecture (MVC + Service Layer)

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!
