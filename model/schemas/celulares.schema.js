/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const celularesSchema = new mongoose.Schema({

    idCel:{
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

    tecnologia:{
        type: "String",    //Smartphone o no
        required: true,
    },
    
    existencia:{
        type: "Boolean",
        required: true
    },

    color:{
        type: "String",
        required: true
    }

});

/** Schema Exportation */
celularesSchema.plugin(validator);
module.exports = celularesSchema;