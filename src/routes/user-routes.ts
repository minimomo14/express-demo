import express, { Express } from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req,res) => {
    res.json(req.body);
});
//get user by id
userRoutes.get("/:id", (req,res) => {
    res.json(`User ID: ${req.params.id}`);
});


userRoutes.post("/", (req,res) => {
    console.log(req.body);
});



export default userRoutes;