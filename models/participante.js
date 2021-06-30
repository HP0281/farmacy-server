const { Schema, model } = require('mongoose');

const participantSchema = new Schema({
    name: {type: String, required: true},
    apname: {type: String, required: true},
    cedula: {type: Number, required: true},
    eps: {type: String, required: true},
    fecNac: {type: String, required: true},
    edad: {type: Number, required: true},
    rh: {type: String, required: true},
    codpart: {type: String, required: true},
    diag: {type: String, required: true},
    obpar: {type: String, required: true},
    imgurl: {type: String, required: false}
},
{
    timestamps: true,
    versionKey: false
});

participantSchema.methods.setUrlimg = function setUrlimg(filename){
    this.imgurl =`/fotos/${ filename }`
}

module.exports = model('Participante', participantSchema);
