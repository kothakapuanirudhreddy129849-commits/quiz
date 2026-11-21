import dotenv from 'dotenv'; dotenv.config();
export const config={
  port:Number(process.env.PORT||5000),
  mongoUri:process.env.MONGODB_URI||'',
  jwtSecret:process.env.JWT_SECRET||'development-secret-change-me',
  frontendOrigins:(process.env.FRONTEND_ORIGIN||'http://localhost:5173')
    .split(',')
    .map(origin=>origin.trim())
    .filter(Boolean),
};
