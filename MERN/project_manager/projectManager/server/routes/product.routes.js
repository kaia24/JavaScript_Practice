const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/test", ProductController.testRoute);
    app.get("/api/products",ProductController.getAll);
    app.post("/api/products",ProductController.create);
    app.get("/api/products/:_id",ProductController.getOne);
    app.delete("/api/products/:_id",ProductController.deleteOne);
    app.patch("/api/products/:_id",ProductController.updateOne);
}