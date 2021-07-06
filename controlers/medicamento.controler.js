const medicamentoCtrl = {};

const medicamento = require('../models/medicamento');

medicamentoCtrl.getMedicamentos = async (req, res) => {
    const medicamentos = await medicamento.find();
    res.json(medicamentos);
};
medicamentoCtrl.createMedicamento = async (req, res) => {
    const medicament = new medicamento(req.body);
    console.log(medicamento);
    await medicament.save()
    res.send({
        message: 'medicamento creado'
    })
};
medicamentoCtrl.updateMedicamento = async (req, res) => {
    await medicamento.findByIdAndUpdate(req.params.id, req.body);
};
medicamentoCtrl.deleteMedicamento = async (req, res) => {
    await medicamento.findByIdAndDelete(req.params.id);
    res.send({
        message:'medicamento eliminado'
    })
};
medicamentoCtrl.getMedicamento = async (req, res) => {
    const p = await medicamento.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};
medicamentoCtrl.updateCantidadE = async (req, res) => {
    const n = req.body.name;
    const c = req.body.concentracion;
    const p = req.body.presentacion;
    const l = req.body.lab;
    const med = await medicamento.findOne({
        name:n,
        concentracion:c,
        presentacion:p,
        lab:l
    })
    const cantidad = med.cantidad + req.body.cantidad;
    med.cantidad = cantidad;
    console.log(med);
    await medicamento.findByIdAndUpdate(med._id, med, "upsert:true");

}
medicamentoCtrl.updateCantidadS = async (req, res) => {
    const n = req.body.name;
    const c = req.body.concentracion;
    const p = req.body.presentacion;
    const l = req.body.lab;
    const med = await medicamento.findOne({
        name:n,
        concentracion:c,
        presentacion:p,
        lab:l
    })
    const cantidad = med.cantidad - req.body.cantidad;
    med.cantidad = cantidad;
    console.log(med);
    await medicamento.findByIdAndUpdate(med._id, med, "upsert:true");

}

module.exports = medicamentoCtrl;