const { Router } = require('express');
const medicamentoCtrl = require('../controlers/medicamento.controler.js');
const medicamentoControler = require('../controlers/medicamento.controler.js');
const router = Router();



router.get('/medicamentos', medicamentoControler.getMedicamentos);
router.get('/medicamentos/:id', medicamentoControler.getMedicamento);
router.post('/medicamentos', medicamentoControler.createMedicamento);
router.put('/medicamentos/:id', medicamentoControler.updateMedicamento);
router.put('/medicamentosupdateE', medicamentoCtrl.updateCantidadE);
router.put('/medicamentosupdateS', medicamentoCtrl.updateCantidadS);
router.delete('/medicamentos/:id', medicamentoControler.deleteMedicamento);

module.exports = router;