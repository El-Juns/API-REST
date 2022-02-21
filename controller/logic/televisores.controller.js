/** Dto */
const televisoreesDto = require("../../model/dto/televisores.dto")
const config = require("config");

exports.createTelevisorees = (req, res, next) => {
    let televisorees = {
        idTV: req.body.idTV,
        modelo: req.body.modelo
    };
    televisoreesDto.create(televisorees, (err, data) => {
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


exports.updatetelevisorees = (req, res, next) => {
    let televisorees = {
        idTV: req.body.idTV,
        modelo: req.body.modelo
    };
    televisoreesDto.update({ _id: req.body.id }, televisorees, (err, data) => {
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

    televisoreesDto.getAll({}, (err, data) => {
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
exports.getByidTV = (req, res, next) => {

    periodDto.getByidTV({ idTV: req.params.idTV }, (err, data) => {
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

exports.deletetelevisorees = () => {
    televisoreesDto.delete({ _id: req.body.id }, (err, data) => {
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