const { Router } = require('express');
const nameArchivosControler = require('../controlers/nameArchivos.controler.js');
const router = Router();



router.get('/names', nameArchivosControler.getNames);
router.get('/names/:id', nameArchivosControler.getName);
router.post('/names', nameArchivosControler.createName);
router.put('/names/:id', nameArchivosControler.updateName);
router.delete('/names/:id', nameArchivosControler.deleteName);
router.delete('/names', nameArchivosControler.deleteAll);

module.exports = router;