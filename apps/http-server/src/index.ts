import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
const app = express();

app.get("/", (req,res)=>{
    return res.json({
        "message":"Hello there"
    })
})


app.post("/sign-up", (req,res)=>{
    //db call
    return res.json({
        "message":"User created"
    })
})


app.post("/sign-in", (req,res)=>{   
    //db call

    const userId = 1;

    const token = jwt.sign({userId}, JWT_SECRET);

    return res.json({
        "message":"User signed in",
        "token": token
    })
})
app.listen(3001);