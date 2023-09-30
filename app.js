const express = require('express');
const app = express();

const port = parseInt(process.env.PORT) || 8080;

// Array de datos de ejemplo
const datos = [
  { id: 1, nombre: 'Alexander Huarcaya' },
  { id: 2, nombre: 'Eder Allcca Lopez' },
  // Agrega más datos según sea necesario
];



app.use(express.json());



// Ruta para obtener todos los datos
app.get('/datos', (req, res) => {
  res.json(datos);
});



// Ruta para obtener un dato por ID
app.get('/datos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const dato = datos.find((d) => d.id === id);

  if (!dato) {
    return res.status(404).json({ mensaje: 'Dato no encontrado' });
  }

  res.json(dato);

});



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});


