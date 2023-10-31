const SundaeController = require("../controllers/sundae.controller")

module.exports = (app) => {
    app.get("/api/test", SundaeController.testRoute);
    app.get("/api/sundaes",SundaeController.getAll);
    app.get("/api/sundaes/random",SundaeController.randomSundae);
    app.post("/api/sundaes",SundaeController.create);
    app.get("/api/sundaes/:_id",SundaeController.getOne);
    app.delete("/api/sundaes/:_id",SundaeController.deleteOne);
    app.patch("/api/sundaes/:_id",SundaeController.updateOne);
    app.put("/api/sundaes/_id",SundaeController.addTopping);
}