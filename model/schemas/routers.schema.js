/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const routersSchema = new mongoose.Schema({

    idRouter:{
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
        required: true
    },

    rango:{
        type: "Number",   
        required: true,
        min: 10,
        max: 20
    },
    
    existencia:{
        type: "Boolean",
        required: true
    }
});

/** Schema Exportation */
routersSchema.plugin(validator);
module.exports = routersSchema;