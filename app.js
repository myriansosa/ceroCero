const express = require('express');
const app = express();

const port = 3000;

//Motor de plantillas
app.set('view engine', 'ejs')

//desarrollo de motores de plantillas 
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render("index", {titulo: "mi titulo dinámico"})
})


app.get('/Servicios', (req, res) => {
    res.render('servicios', {tituloServicios : "Este es un mensaje dinámico de servicios"})
})


app.use((req, res, next) => {
    res.status(404).render('404')
})


app.listen(port, () => {
    console.log('servidor abierto en el puerto ' + port);
});