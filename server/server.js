import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./Routes/authRouter.js";
import userRouter from "./Routes/userRouter.js";
import GeminiRouter from "./Routes/GeminiRouter.js";

const app=express();
const port=process.env.PORT || 4000
connectDB();
const allowedOrigins = ['https://gentc-testcase-generator.vercel.app/']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.get('/',(req,res)=>res.send("api working"));

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/gemini',GeminiRouter);

app.listen(port, ()=>console.log(`server on ${port}`));



