/** Dto */
const routersDto = require("../../model/dto/routers.dto")
const config = require("config");

exports.createRouters = (req, res, next) => {
    let routers = {
        iddRouter: req.body.iddRouter,
        modelo: req.body.modelo
    };
    routersDto.create(routers, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updaterouters = (req, res, next) => {
    let routers = {
        iddRouter: req.body.iddRouter,
        modelo: req.body.modelo
    };
    routersDto.update({ _id: req.body.id }, routers, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {

    routersDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};
exports.getByiddRouter = (req, res, next) => {

    periodDto.getByiddRouter({ iddRouter: req.params.iddRouter }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleterouters = () => {
    routersDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}