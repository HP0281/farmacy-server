const { Router } = require('express');
const entradaControler = require('../controlers/entrada.controler.js');
const router = Router();



router.get('/entrada', entradaControler.getEntradas);
router.get('/entrada/:id', entradaControler.getEntrada);
router.post('/entrada', entradaControler.createEntrada);
router.put('/entrada/:id', entradaControler.updateEntrada);
router.delete('/entrada/:id', entradaControler.deleteEntrada);

module.exports = router;