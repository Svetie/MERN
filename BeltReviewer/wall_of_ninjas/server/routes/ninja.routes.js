const NinjaController = require("../controllers/ninja.controller");

module.exports = app => {
    app.get("/api", NinjaController.helloworld);
    app.get('/api/ninjas', NinjaController.findAllNinjas);
    app.post("/api/ninjas", NinjaController.createNewNinja);
    app.get('/api/ninjas/random', NinjaController.findRandomNinja);
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);
    app.put("/api/ninjas/:id", NinjaController.updateExistingNinja);
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja);
    
}