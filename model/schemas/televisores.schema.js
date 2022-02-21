/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const televisoresSchema = new mongoose.Schema({

    idTV:{
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
        type: "String",    //SmartTV o no
        required: true,
    },
    
    existencia:{
        type: "Boolean",
        required: true
    },

    pulgadas:{
        type: "Number",
        required: true
    }

});

/** Schema Exportation */
televisoresSchema.plugin(validator);
module.exports = televisoresSchema;