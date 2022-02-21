/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const reproductoresSchema = new mongoose.Schema({

    idRep:{
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

    capacidadWhats:{
        type: "Number",   
        required: true,
    },
    
    existencia:{
        type: "Boolean",
        required: true
    },

    bluethoot:{
        type: "Boolean",
        required: true
    }
});

/** Schema Exportation */
reproductoresSchema.plugin(validator);
module.exports = reproductoresSchema;