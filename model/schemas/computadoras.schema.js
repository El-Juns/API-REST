/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const computadorasSchema = new mongoose.Schema({

    idPC:{
        type: "Number",
        required: true
    },

    modelo:{
        type: "Number",
        required: true,
        min: 2018,
        max: 2022
    },

    marca:{
        type: "String",
        required: true,
    },

    pulgadas:{
        type: "Number",    
        required: true,
    },
    
    existencia:{
        type: "Boolean",
        required: true
    },

    procesador:{
        type: "Strinbg",
        required: true
    },

    grafica:{
        type: "Boolean",
        required: true
    },

    tipoGrafica:{
        type: "Boolean",
        required: true
    }
});

/** Schema Exportation */
computadorasSchema.plugin(validator);
module.exports = computadorasSchema;