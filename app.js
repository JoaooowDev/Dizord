require('dotenv').config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pages'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT)
})