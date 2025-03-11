# 🚀 Employee Records Management App

*A Full-Stack Next.js Application with MongoDB & NextAuth.js*

![Next.js](https://img.shields.io/badge/Next.js-13-blue?style=flat&logo=nextdotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat&logo=mongodb)
![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-blue?style=flat&logo=tailwindcss)
![NextAuth.js](https://img.shields.io/badge/NextAuth-Authentication-purple?style=flat&logo=auth0)

---

## 📌 Overview

This is a **full-stack employee records management app** built with **Next.js, MongoDB, and NextAuth.js**. It allows users to **create, read, update, and delete (CRUD)** employee records while ensuring **secure authentication** with JWT-based authentication.

---

## 🎯 Features

✅ **Employee Management**: Add, edit, and delete employee records.  
✅ **Secure Authentication**: Sign up & log in with email/password (NextAuth.js).  
✅ **Role-Based Access**: Only authenticated users can manage records.  
✅ **Responsive UI**: Styled with **Tailwind CSS** for a modern look.  
✅ **Server-Side Rendering (SSR)**: Optimized performance with SSR/SSG.  
✅ **Error Handling & Validations**: Ensures proper input validation and error messages.  

---

## 📦 Installation & Setup

### Clone the repository

```bash
https://github.com/patiencemanzen/emp-records-management.git
cd employee-records
```

### Install dependencies

```bash
npm install
```

### Set up the `.env` file

```
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/employeeRecords
NEXTAUTH_SECRET=your_secret_key
```

### Run Prisma to sync database

```bash
npx prisma generate
npx prisma db push
```

### Start the development server

```bash
npm run dev
```

The app runs on **<http://localhost:3000>** 🚀

---

## 🔑 API Endpoints

### Authentication

- `POST /api/auth/signup` → Register new users  
- `POST /api/auth/signin` → Login with email & password  

### Employee Management

- `GET /api/employees/` → Get all employees  
- `POST /api/employees/` → Add a new employee  
- `PUT /api/employees/:id` → Update an employee  
- `DELETE /api/employees/:id` → Remove an employee  

---

## 🔒 Authentication & Authorization

- Users **must be logged in** to manage employee records.  
- The app uses **NextAuth.js (Credentials Provider)** for secure login.  
- Passwords are **hashed with bcrypt** before storing in the database.  

---

## 🚀 Deployment

Deployed on **Vercel**: 👉 [Live Demo](https://empmanagerapp.netlify.app)  

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

### 💡 Need Improvements or Features?

Feel free to open an issue or submit a pull request. Let's build together! 🚀
