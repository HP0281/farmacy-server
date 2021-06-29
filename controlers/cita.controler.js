const citaCtrl = {};

const cita = require('../models/cita');

citaCtrl.getCitas = async (req, res) => {
    const citas = await cita.find();
    res.json(citas);
};
citaCtrl.createCita = async (req, res) => {
    const cit = new cita(req.body);
    await cit.save()
    res.send({
        message: 'cita creado'
    })
};
citaCtrl.updateCita = async (req, res) => {
    await cita.findByIdAndUpdate(req.params.id, req.body);
};
citaCtrl.deleteCita = async (req, res) => {
    await cita.findByIdAndDelete(req.params.id);
    res.send({
        message:'cita eliminada'
    })
};
citaCtrl.getCita = async (req, res) => {
    const p = await cita.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};

module.exports = citaCtrl;