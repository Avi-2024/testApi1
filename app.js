import express from "express";
import { authRouters } from "./routers/router.js";
import cookieParser from "cookie-parser"
import {connectDB} from "./config/db.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.set('view engine', '.ejs');
app.use(authRouters);
connectDB();
// app.get("/",(req,res)=>{
//     res.send("Home Page");
    
// })

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})