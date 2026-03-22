import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/connectdb.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
dotenv.config();
connectDB();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
})); //connect frontend and backend using cors
app.use(express.json());
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});