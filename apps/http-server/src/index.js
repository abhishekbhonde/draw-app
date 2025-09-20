import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { UserSchema, SigninSchema, RoomSchema } from "@repo/common/types";
const app = express();
app.get("/sign-up", (req, res) => {
    const data = UserSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            "message": "Invalid data",
            "error": data.error
        });
    }
    return res.json({
        "message": "Hello there"
    });
});
app.post("/sign-in", (req, res) => {
    //db call
    const data = SigninSchema.safeParse(req.body);
    return res.json({
        "message": "User created"
    });
});
app.post("/create-room", (req, res) => {
    //db call
    const data = RoomSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            "message": "Invalid data",
            "error": data.error
        });
    }
    const userId = 1;
    const token = jwt.sign({ userId }, JWT_SECRET);
    return res.json({
        "message": "User signed in",
        "token": token
    });
});
app.listen(3001);
