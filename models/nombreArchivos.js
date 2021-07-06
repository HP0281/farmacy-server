const { Schema, model } = require('mongoose');

const nameArchiSchema = new Schema({
    name: {type: String, required: true},
    ruta: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
});

nameArchiSchema.methods.setruta = function setruta(filename){
    this.ruta = `/docs/${ filename }`
} 

module.exports = model('nameArchivos', nameArchiSchema);
