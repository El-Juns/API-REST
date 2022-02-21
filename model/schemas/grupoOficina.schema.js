/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const oficinaSchema = new mongoose.Schema({

    computadora_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_PC",
        required: true
    },

    reproductor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_reproductor",
        required: true
    }

});

/** Schema Exportation */
module.exports = oficinaSchema;