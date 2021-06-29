const entradaCtrl = {};

const entrada = require('../models/entrada');

entradaCtrl.getEntradas = async (req, res) => {
    const entradas = await entrada.find();
    res.json(entradas);
};
entradaCtrl.createEntrada = async (req, res) => {
    const n = new entrada(req.body);
    console.log(n);
    await n.save()
    res.send({
        message: 'entrada de medicamento creada'
    })
};
entradaCtrl.updateEntrada = async (req, res) => {
    await entrada.findByIdAndUpdate(req.params.id, req.body);
};
entradaCtrl.deleteEntrada = async (req, res) => {
    await entrada.findByIdAndDelete(req.params.id);
    res.send({
        message:'entrada de medicamento eliminada'
    })
    console.log(req.params.id);
};
entradaCtrl.getEntrada = async (req, res) => {
    const p = await entrada.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};

module.exports = entradaCtrl;