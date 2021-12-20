import express, { Express } from "express";
//import routes from "./app-routes";


const languageRoutes = express.Router();

let languages:string[] = ["English", "Thai", "French", "Italian", "Spanish"];


languageRoutes.get("/", (req,res) => {
    res.json(languages);
});

//this is to show languages by id /languages/:id
languageRoutes.get("/:id/", (req,res) => {
   //use req.params.id -> a spacific language
    let searchIndex: number = Number.parseInt(req.params.id)-1;
    let languageObject = languages[searchIndex]; 
    res.json([languageObject]);
});


// to see it in browser http://localhost:3000/languages/random/
languageRoutes.get("/random", (req,res) => {
    res.json("Random languages");
});

export default languageRoutes;