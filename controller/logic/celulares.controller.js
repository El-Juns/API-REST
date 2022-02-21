/** Dto */
const celularDto = require("../../model/dto/celulares.dto")
const config = require("config");


/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

 
exports.createCelular = (req, res, next) => {
    let celular = {
        idCel: req.body.idCel,
        modelo: req.body.modelo
    };
    celularDto.create(celular, (err, data) => {
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


exports.updatecelular = (req, res, next) => {
    let celular = {
        idCel: req.body.idCel,
        modelo: req.body.modelo
    };
    celularDto.update({ _id: req.body.id }, celular, (err, data) => {
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

    celularDto.getAll({}, (err, data) => {
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
exports.getByidCel = (req, res, next) => {

    periodDto.getByidCel({ idCel: req.params.idCel }, (err, data) => {
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

exports.deletecelular = () => {
    celularDto.delete({ _id: req.body.id }, (err, data) => {
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