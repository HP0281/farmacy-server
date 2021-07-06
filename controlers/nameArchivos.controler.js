const fs = require('fs');
const nameArchivosCtrl = {};

const nameArchivo = require('../models/nombreArchivos');

nameArchivosCtrl.getNames = async (req, res) => {
    fs.readdir("./documentacion/normatividad", async (error, files) => {
        if(error){
            throw error
        }
        arhivos = files;
    
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            const nameA = new nameArchivo({
                name: files[i],
                ruta: "/docs" + "/"+ files[i]
            });
             nameA.save();
            
        }
        const names = await nameArchivo.find();
        res.json(names);
    });
};
nameArchivosCtrl.createName = async (req, res) => {
    const name = new nameArchivo(req.body);
    await name.save()
    res.send({
        message: 'nombre de archivo creado'
    })
};
nameArchivosCtrl.updateName = async (req, res) => {
    await nameArchivo.findByIdAndUpdate(req.params.id, req.body);
};
nameArchivosCtrl.deleteName = async (req, res) => {
    await nameArchivo.findByIdAndDelete(req.params.id);
    res.send({
        message:'nombre de archivo eliminado'
    })
};
nameArchivosCtrl.getName = async (req, res) => {
    const p = await nameArchivo.findOne({_id: req.params.id })
    console.log(req.params);
    res.json(p);
};
nameArchivosCtrl.deleteAll = async (req, res) => {
    await nameArchivo.remove();
    res.send({
        message: 'se han borrado todos los registros'
    })
};

module.exports = nameArchivosCtrl;