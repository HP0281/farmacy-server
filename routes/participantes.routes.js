const { Router } = require('express');
const participanteControler = require('../controlers/participantes.controler.js');
const router = Router();



router.get('/participantes', participanteControler.getParticipantes);
router.get('/participantes/:id', participanteControler.getParticipante);
router.post('/participantes', participanteControler.createParticipantes);
router.put('/participantes/:id', participanteControler.updateParticipantes);
router.delete('/participantes/:id', participanteControler.deleteParticipantes);

module.exports = router;