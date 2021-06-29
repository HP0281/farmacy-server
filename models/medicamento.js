const { Schema, model } = require('mongoose');

const medicamentoSchema = new Schema({
    name: {type: String, required: true},
    concentracion: {type: Number, required: true},
    presentacion: {type: String, required: true},
    lab: {type: String, required: true},
    lote: {type: String, required: true},
    regivm: {type: String, required: true},
    fecha: {type: String, required: true},
    cantidad: {type: Number, required: true},
    lugpro: {type: String, required: true},
    quienE: {type: String, required: true},
    quienR: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('Medicamento', medicamentoSchema);
