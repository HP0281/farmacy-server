const salidaCtrl = {};

const salida = require('../models/salida');

salidaCtrl.getSalidas = async (req, res) => {
    const salidas = await salida.find();
    res.json(salidas);
};
salidaCtrl.createSalida = async (req, res) => {
    const salidan = new salida(req.body);
    console.log(salidan);
    await salidan.save()
    res.send({
        message: 'salida de medicamento creada'
    })
};
salidaCtrl.updateSalida = async (req, res) => {
    await salida.findByIdAndUpdate(req.params.id, req.body);
};
salidaCtrl.deleteSalida = async (req, res) => {
    await salida.findByIdAndDelete(req.params.id);
    res.send({
        message:'salida de medicamento eliminada'
    })
};
salidaCtrl.getSalida = async (req, res) => {
    const p = await salida.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};

module.exports = salidaCtrl;