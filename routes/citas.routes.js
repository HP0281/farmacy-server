const { Router } = require('express');
const citaControler = require('../controlers/cita.controler.js');
const router = Router();



router.get('/citas', citaControler.getCitas);
router.get('/citas/:id', citaControler.getCita);
router.post('/citas', citaControler.createCita);
router.put('/citas/:id', citaControler.updateCita);
router.delete('/citas/:id', citaControler.deleteCita);

module.exports = router;