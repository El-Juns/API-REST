const controller = require("../controller/logic/televisores.controller");

module.exports = (app) => {
    app.get("/televisores", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/televisores/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });
    
    app.post("/televisores", (req, res, next) => {
        controller.createtelevisores(req, res, next);
    });
    
    app.put("/televisores", (req, res, next) => {
        controller.updatetelevisores(req, res, next);
    });
    
    app.delete("/televisores", (req, res, next) => {
        controller.deletetelevisores(req, res, next);
    });
};