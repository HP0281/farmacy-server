const tratamientoCtrl = {};

const tratamiento = require('../models/tratamiento');

tratamientoCtrl.getTratamientos = async (req, res) => {
    const tratamientos = await tratamiento.find();
    res.json(tratamientos);
};
tratamientoCtrl.createTratamiento = async (req, res) => {
    const trat = new tratamiento(req.body);
    await trat.save()
    res.send({
        message: 'tratamiento creado'
    })
};
tratamientoCtrl.updateTratamiento = async (req, res) => {
    await tratamiento.findByIdAndUpdate(req.params.id, req.body);
};
tratamientoCtrl.deleteTratamiento = async (req, res) => {
    await tratamiento.findByIdAndDelete(req.params.id);
    res.send({
        message:'tratamiento eliminado'
    })
};
tratamientoCtrl.getTratamiento = async (req, res) => {
    const p = await tratamiento.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};

module.exports = tratamientoCtrl;