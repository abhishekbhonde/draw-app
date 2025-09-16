import express from "express";

const app = express();

app.get("/", (req,res)=>{
    return res.json({
        "message":"Hello there"
    })
})

app.listen(3000);