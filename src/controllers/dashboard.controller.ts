import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getNumeroClientes = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('select obtener_numero_clientes()');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}

export const getNumeroProductos = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('select obtener_numero_productos()');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}

export const getNumeroPedidos = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('select obtener_numero_pedidos()');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}

export const getGanancias = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('select sumar_total_detalles_pedido()');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }

    
}

export const obtenerIdUltimoCliente = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('select obtenermaxidcliente()');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}


