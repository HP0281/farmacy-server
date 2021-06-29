const { Schema, model } = require('mongoose');

const citaSchema = new Schema({
    tipcit: {type: String, required: true},
    codpart: {type: String, required: true},
    name: {type: String, required: true},
    feccit: {type: String, required: true},
    medicamentos: {type: Array, required: false}
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('Cita', citaSchema);
