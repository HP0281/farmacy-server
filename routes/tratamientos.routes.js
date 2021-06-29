const { Router } = require('express');
const tratamientoControler = require('../controlers/tratamiento.controler.js');
const router = Router();



router.get('/tratamientos', tratamientoControler.getTratamientos);
router.get('/tratamientos/:id', tratamientoControler.getTratamiento);
router.post('/tratamientos', tratamientoControler.createTratamiento);
router.put('/tratamientos/:id', tratamientoControler.updateTratamiento);
router.delete('/tratamientos/:id', tratamientoControler.deleteTratamiento);

module.exports = router;