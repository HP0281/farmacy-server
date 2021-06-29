const { Schema, model } = require('mongoose');

const tratamientoSchema = new Schema({
    codpart: {type: String, required: true},
    name: {type: String, required: true},
    fecNac: {type: String, required: true},
    eps: {type: String, required: true},
    fecNac: {type: String, required: true},
    medicamentos: {type: Array, required: true},
    obtra: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('Tratamiento', tratamientoSchema);
