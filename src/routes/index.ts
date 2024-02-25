import {Router} from 'express';
const router = Router();

import { getCategorias, getCategoriabyId, createCategoria, deleteCategoria, updateCategoria} from '../controllers/categorias.controller';
import { getNumeroClientes, getNumeroProductos, getNumeroPedidos, getGanancias, obtenerIdUltimoCliente } from '../controllers/dashboard.controller';
import { getProductos, getProductosbyId, createProducto, updateProducto, deleteProducto, getProductosNom ,getJuegos, getConsolas, getAccesorios, getComputadoras } from '../controllers/productos.controllers';
import { getClientes, getClientebyId, createCliente, updateCliente, deleteCliente} from '../controllers/clientes.controllers';
import { createCiudad, deleteCiudad, getCiudadbyId, getCiudades, updateCiudad } from '../controllers/ciudades.controllers';
import { generarPedido, getPedidos, updateEstadoPedido } from '../controllers/pedidos.controllers';
import { getGeneros } from '../controllers/generos.controllers';

//categorias
router.get('/categorias', getCategorias);
router.get('/categorias/:id', getCategoriabyId);
router.post('/categorias', createCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);

//dashboard
router.get('/nClientes', getNumeroClientes);
router.get('/nProductos', getNumeroProductos);
router.get('/nPedidos', getNumeroPedidos);
router.get('/nGanancias', getGanancias);

//productos
router.get('/productos', getProductos);
router.post('/busqueda', getProductosNom);
router.get('/productos/:id', getProductosbyId);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);
router.get('/juegos', getJuegos);
router.get('/consolas', getConsolas);
router.get('/accesorios', getAccesorios);
router.get('/computadoras', getComputadoras);

//clientes
router.get('/clientes', getClientes);
router.get('/clientes/:id', getClientebyId);
router.post('/clientes', createCliente);
router.put('/clientes/:id', updateCliente);
router.delete('/clientes/:id', deleteCliente);
router.get('/ultimoCliente', obtenerIdUltimoCliente);

//ciudades
router.get('/ciudades', getCiudades);
router.get('/ciudades/:id', getCiudadbyId);
router.post('/ciudades', createCiudad);
router.put('/ciudades/:id', updateCiudad);
router.delete('/ciudades/:id', deleteCiudad);

//pedidos
router.get('/pedidos', getPedidos);
router.put('/pedidos/:id', updateEstadoPedido);
router.post('/pedidos', generarPedido);

//Generos
router.get('/generos', getGeneros);

export default router;