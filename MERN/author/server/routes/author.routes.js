const AuthorController = require("../controllers/author.controller")

module.exports = (app) => {
    app.get("/api/test", AuthorController.testRoute);
    app.get("/api/authors",AuthorController.getAll);
    app.get("/api/authors/random",AuthorController.randomAuthor);
    app.post("/api/authors",AuthorController.create);
    app.get("/api/authors/:_id",AuthorController.getOne);
    app.delete("/api/authors/:_id",AuthorController.deleteOne);
    app.patch("/api/authors/:_id",AuthorController.updateOne);
    
}