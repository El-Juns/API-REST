const controller = require("../controller/logic/computadoras.controller");

module.exports = (app) => {
    app.get("/computadoras", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/computadoras/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });
    
    app.post("/computadoras", (req, res, next) => {
        controller.createcomputadoras(req, res, next);
    });
    
    app.put("/computadoras", (req, res, next) => {
        controller.updatecomputadoras(req, res, next);
    });
    
    app.delete("/computadoras", (req, res, next) => {
        controller.deletecomputadoras(req, res, next);
    });
};