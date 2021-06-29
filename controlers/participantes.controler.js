const participanteCtrl = {};

const participante = require('../models/participante');

participanteCtrl.getParticipantes = async (req, res) => {
    const participantes = await participante.find();
    res.json(participantes);
};
participanteCtrl.createParticipantes = async (req, res) => {
    const participant = new participante(req.body);
    const part= participant;
    console.log('req body', req.body.imgurl);
    if(req.body.imgurl){

        const filename  =req.body.imgurl;
        part.setUrlimg(filename);
        console.log(participant);
        await part.save()
    res.send({
        message: 'participante creado'
    })
    }
};
participanteCtrl.updateParticipantes = async (req, res) => {
    const participant = new participante(req.body);
  
    if(req.body.imgurl){
        const filename = req.body.imgurl;
        console.log(filename);
        participant.setUrlimg(filename);

    }
    console.log(participant);
    await participante.findByIdAndDelete(req.params.id);
    await participant.save();
   res.send({
       message: 'participante actualizado'
   })
};
participanteCtrl.deleteParticipantes = async (req, res) => {
    await participante.findByIdAndDelete(req.params.id);
    res.send({
        message:'participante eliminado'
    })
};
participanteCtrl.getParticipante = async (req, res) => {
    const p = await participante.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};

module.exports = participanteCtrl;