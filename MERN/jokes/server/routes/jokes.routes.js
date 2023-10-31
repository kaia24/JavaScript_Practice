const JokesController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/test", JokesController.testRoute);
    app.get("/api/jokes",JokesController.getAll);
    app.post("/api/jokes",JokesController.create);
    app.get("/api/jokes/:_id",JokesController.getOne);
    app.delete("/api/jokes/:_id",JokesController.deleteOne);
    app.patch("/api/jokes/:_id",JokesController.updateOne);
}