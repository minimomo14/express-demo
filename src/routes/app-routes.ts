import express, { Express } from "express";

const routes = express.Router();

routes.get("/", (req,res) => {
    res.json("Home");
});
routes.get("/node", (req,res) => {
    res.json("Node");
});

export default routes;