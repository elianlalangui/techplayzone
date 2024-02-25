"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarPedido = exports.updateEstadoPedido = exports.getPedidos = void 0;
const database_1 = require("../database");
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('select * from vistapedidos');
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getPedidos = getPedidos;
const updateEstadoPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { id_estadopedido } = req.body;
    yield database_1.pool.query('update pedidos set id_estadopedido = $1 where id_pedido = $2', [id_estadopedido, id]);
    return res.json(`Pedido ${id} Updated Succesfully`);
});
exports.updateEstadoPedido = updateEstadoPedido;
const generarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_cliente, id_producto, cantidad } = req.body;
    const response = yield database_1.pool.query('Call sp_generar_pedido($1, $2, $3);', [id_cliente, id_producto, cantidad]);
    return res.json({
        message: 'City created succesfully',
        body: {
            id_cliente, id_producto, cantidad
        }
    });
});
exports.generarPedido = generarPedido;
