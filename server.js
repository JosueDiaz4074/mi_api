const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' }
];

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde mi primer servicio web!' });
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const nuevo = { id: usuarios.length + 1, nombre: req.body.nombre };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});