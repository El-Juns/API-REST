/** packager */
const mongoose = require ("mongoose");

/** Schema Creation */
const hogarSchema = new mongoose.Schema({
    routers_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_router",
        required: true
    },

    celulares_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_celular",
        required: true
    },

    televisor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_tv",
        required: true
    }

});

/** Schema Exportation */
module.exports = hogarSchema;