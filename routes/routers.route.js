const controller = require("../controller/logic/routers.controller");

module.exports = (app) => {
    app.get("/routers", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/routers/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });
    
    app.post("/routers", (req, res, next) => {
        controller.createrouters(req, res, next);
    });
    
    app.put("/routers", (req, res, next) => {
        controller.updaterouters(req, res, next);
    });
    
    app.delete("/routers", (req, res, next) => {
        controller.deleterouters(req, res, next);
    });
};