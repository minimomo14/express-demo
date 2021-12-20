import express, { Express, request, response } from "express";

const app = express();
const port = 3000;
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
