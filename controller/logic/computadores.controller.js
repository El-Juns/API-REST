/** Dto */
const computadorDto = require("../../model/dto/computadores.dto")
const config = require("config");

exports.createComputador = (req, res, next) => {
    let computador = {
        idPC: req.body.idPC,
        modelo: req.body.modelo
    };
    computadorDto.create(computador, (err, data) => {
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


exports.updatecomputador = (req, res, next) => {
    let computador = {
        idPC: req.body.idPC,
        modelo: req.body.modelo
    };
    computadorDto.update({ _id: req.body.id }, computador, (err, data) => {
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

    computadorDto.getAll({}, (err, data) => {
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
exports.getByidPC = (req, res, next) => {

    periodDto.getByidPC({ idPC: req.params.idPC }, (err, data) => {
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

exports.deletecomputador = () => {
    computadorDto.delete({ _id: req.body.id }, (err, data) => {
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