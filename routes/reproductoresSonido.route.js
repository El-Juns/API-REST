const controller = require("../controller/logic/reproductoresSonido.controller");

module.exports = (app) => {
    app.get("/reproductoresSonido", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/reproductoresSonido/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });
    
    app.post("/reproductoresSonido", (req, res, next) => {
        controller.createreproductoresSonido(req, res, next);
    });
    
    app.put("/reproductoresSonido", (req, res, next) => {
        controller.updatereproductoresSonido(req, res, next);
    });
    
    app.delete("/reproductoresSonido", (req, res, next) => {
        controller.deletereproductoresSonido(req, res, next);
    });
};