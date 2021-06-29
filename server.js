const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');
const fs = require('fs');
const whitelist = [
    'https://hp0281.github.io',
    'http://localhost:4200'
];

const app = express();
 
app.set('port', process.env.PORT || 3000);

app.use(cors({ origin: whitelist }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/participantes.routes'));
app.use(require('./routes/medicamentos.routes'));
app.use(require('./routes/tratamientos.routes'));
app.use(require('./routes/citas.routes'));
app.use(require('./routes/nameArchivos.routes'));
app.use(require('./routes/salida.routes'));
app.use(require('./routes/entrada.routes'));


const multipartMiiddleware = multipart({
    uploadDir: './evidencias/kardexma'
});
const multipartMiiddlewarev = multipart({
    uploadDir: './evidencias/varios'
});
const multipartMiiddlewarec = multipart({
    uploadDir: './evidencias/capacitaciones'
});
const multipartMiiddlewareR = multipart({
    uploadDir: './evidencias/residuos'
});
const multipartMiiddlewareD = multipart({
    uploadDir: './documentacion'
});
const multipartMiiddlewareFO = multipart({
    uploadDir: './fotos'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use('/docs', express.static(`${__dirname}/documentacion/normatividad`));
app.use('/fotos', express.static(`${__dirname}/fotos`));
app.use('/Home', express.static(`${__dirname}/login/dist/login/index.html`));
app.use('/inicio', express.static(`${__dirname}/login/dist/login`))
//End point to Upload files
app.post('/api/subirk', multipartMiiddleware, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `evidencias/kardexma/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirv', multipartMiiddlewarev, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `evidencias/varios/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirc', multipartMiiddlewarec, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `evidencias/capacitaciones/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirR', multipartMiiddlewareR, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `evidencias/residuos/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirDO', multipartMiiddlewareD, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `documentacion/oficios/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirFO', multipartMiiddlewareFO, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `fotos/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.post('/api/subirDN', multipartMiiddlewareD, (req, res) => {
    let archivos = req.files.uploads;
    for(let i =0; i < archivos.length; i++){
        fs.rename(archivos[i].path, `documentacion/normatividad/${archivos[i].name}`, () => {
            console.log('file renamed');
        });
    }
    res.json({mensaje: "archivo subido"});
});
app.get('/', (req, res) => {
    res.send('hola mundo' + PORT);
});
module.exports = app;


