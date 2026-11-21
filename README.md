# QuizMaster

A full-stack quiz platform built with React, TypeScript, Node.js, Express, MongoDB Atlas, Mongoose, and JWT authentication.

## Features
- 8 quiz categories × Easy, Moderate, Difficult (24 quizzes, 240 questions)
- 15-minute timed quizzes with answer navigation and automatic submission
- Server-side answer validation and score calculation
- JWT authentication, bcrypt password hashing, Zod validation, and rate limiting
- Dashboard, profile, history, result explanations, and performance analytics
- Responsive dark navy and purple interface

## Setup
1. Create a MongoDB Atlas cluster and database named `quizmaster_db`.
2. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` and `JWT_SECRET`.
3. Install dependencies:
   ```bash
   npm install
   npm install --prefix frontend
   npm install --prefix backend
   ```
4. Seed MongoDB:
   ```bash
   npm run seed
   ```
5. Start both applications:
   ```bash
   npm run dev
   ```

Frontend: http://localhost:5173
Backend: http://localhost:5000

## Scripts
- `npm run dev` — frontend and backend in development mode
- `npm run build` — build both applications
- `npm run seed` — seed 24 quizzes and 240 questions
- `npm start` — start the built backend

The backend requires a configured Atlas connection. Never commit real database credentials or secrets.
