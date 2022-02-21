/** Dto */
const reproductoresSonidoDto = require("../../model/dto/reproductoresSonido.dto")
const config = require("config");

exports.createReproductoresSonido = (req, res, next) => {
    let reproductoresSonido = {
        idRep: req.body.idRep,
        modelo: req.body.modelo
    };
    reproductoresSonidoDto.create(reproductoresSonido, (err, data) => {
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


exports.updatereproductoresSonido = (req, res, next) => {
    let reproductoresSonido = {
        idRep: req.body.idRep,
        modelo: req.body.modelo
    };
    reproductoresSonidoDto.update({ _id: req.body.id }, reproductoresSonido, (err, data) => {
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

    reproductoresSonidoDto.getAll({}, (err, data) => {
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
exports.getByidRep = (req, res, next) => {

    periodDto.getByidRep({ idRep: req.params.idRep }, (err, data) => {
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

exports.deletereproductoresSonido = () => {
    reproductoresSonidoDto.delete({ _id: req.body.id }, (err, data) => {
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