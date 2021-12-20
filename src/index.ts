import express, { Express, request, response } from "express";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes";
import searchRoutes from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";


const app = express();
const port = 3000;

//focus on json base request
app.use(express.json);

app.use("/", routes);
app.use("/languages/", languageRoutes);

// enable to visit "/users"
app.use("/users/", userRoutes);

app.use("/", searchRoutes);

//enable /api/shops
app.use("/api/shops", shopRoutes);


//Directly set routes
//add / so someone can access this
app.get("/students", function(request, response) {
    response.json("Getting all students...");
});
// create /student
app.post("/stdents", (request, response) => {
    response.json("Adding a student");
});
// to made an update value
app.put("/students", (request,response) => {
    response.json("Updating a student");
});
// to delete
app.delete("/students", (request,response) => {
    response.json("Deleting a student")
});

app.listen(port, function(){
    console.log(`Listening on ${port}`)
});
