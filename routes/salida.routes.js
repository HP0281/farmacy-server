const { Router } = require('express');
const salidaControler = require('../controlers/salida.controler.js');
const router = Router();



router.get('/salida', salidaControler.getSalidas);
router.get('/salida/:id', salidaControler.getSalida);
router.post('/salida', salidaControler.createSalida);
router.put('/salida/:id', salidaControler.updateSalida);
router.delete('/salida/:id', salidaControler.deleteSalida);

module.exports = router;