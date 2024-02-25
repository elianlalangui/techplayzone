import express from 'express';
const app = express();

import indexRoutes from './routes/index';

//Línea de código para autorizar acceso a la API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api",indexRoutes);

app.listen(3000);
console.log('Server on port', 3000);