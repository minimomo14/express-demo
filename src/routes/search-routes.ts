import express, { Express } from "express";
const searchRoutes = express.Router();

searchRoutes.get("/search", (req,res) => {
    res.json(`Keyword: ${req.query.Keyword} || Page: ${req.query.Page}`)
});

export default searchRoutes;