const controller = require("../controller/logic/celulares.controller");

module.exports = (app) => {
    app.get("/celulares", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/celulares/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });
    
    app.post("/celulares", (req, res, next) => {
        controller.createcelulares(req, res, next);
    });
    
    app.put("/celulares", (req, res, next) => {
        controller.updatecelulares(req, res, next);
    });
    
    app.delete("/celulares", (req, res, next) => {
        controller.deletecelulares(req, res, next);
    });
};