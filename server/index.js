import express from "express";
import cors from "cors";
import { Router } from "express";
import { createPool } from "mysql2/promise";

/*Desplegue */

import {fileURLToPath} from 'url';
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

const pool = new createPool({
  host: "database-upc.cenpkg3wuuox.us-east-1.rds.amazonaws.com",
  user: "admin",
  port: 3306,
  password: "ThOl76muxdtyDfWyl3pZ",
  database: "Game_e",
});

const app = express();
app.use(cors());
app.use(express.json());
const router = Router();

/*quearys */
//Clientes
router.post("/api/cliente/login", async (req, res) => {
  try{
  const {correo,contrasenia}=req.body;
  console.log(req.body)
  const [result] = await pool.query(
    "select * from Clientes where correo = ? and contrasenia= ? ",
    [correo,contrasenia]
  );
  console.log(result);
  res.status(200).json(result[0]);}
  catch(error){
    res.status(500).json(error);
  }
});

router.post("/api/clientes", async (req, res) => {
  const [result] = await pool.query(
    "insert into Clientes( nombre, apellido, correo, direccion, codigo_postal, contrasenia) values ( ?,?,?,?,?,?)",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.correo,
      req.body.direccion,
      req.body.codigo_postal,
      req.body.contrasenia,
    ]
  );
});

//Productos
//get todos los productos

router.get("/api/productos", async (req, res) => {
  const [result] = await pool.query("select * from Productos");
  res.status(200).json(result);
});

//get de un producto con todos sus datos
router.get("/api/productos/alldata/:id", async (req, res) => {
  const [result] = await pool.query(
    "select * from Productos inner join Anuncios A on Productos.id = A.Videojuegos_id inner join TipoAnuncio on A.TipoAnuncio_id = TipoAnuncio.id inner join ListaDesarroladora LD on Productos.id = LD.Productos_id inner join TipoProductos on Productos.TipoProductos_id = TipoProductos.id inner join ProductosDistrbuidoras PD on Productos.id = PD.Productos_id inner join ProductosCategorias PC on Productos.id = PC.Productos_id where Productos.id=?",
    [req.params.id]
  );
  res.status(200).json(result);
});

router.get("/api/productos/store", async (req, res) => {
  pool.query(
    "select * from Productos inner join Anuncios A on Productos.id = A.Videojuegos_i inner join TipoProductos on Productos TipoProductos_id = TipoProductos.id inner join ProductosCategorias PC on Productos.id = PC.Productos_id;"
  );
  res.status(200).json(result);
});
//carrito de compras

router.get("/api/carrito/:idCliente", async (req, res) => {
  //*
  try {
    const [result] = await pool.query(
      "select * from Carrito where idCliente =? ",
      [req.params.idCliente]
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/api/carrito/:idCliente/:idProducto", async (req, res) => {
  try {
    const [result] = await pool.query(
      "insert into Carrito( idCliente, idProducto)",
      [req.params.idCliente, req.params.idProducto]
    );
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/api/carrito/:idCarrito/:idProducto", async (req, res) => {
  try {
    const [result] = await pool.query(
      "delete from Carrito where idCliente =? and idProducto =? ",
      [req.params.idCliente, req.params.idProducto]
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//ping to pool
router.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS solution");
  res.status(200).json(result);
});

//pruebando la tareas para api
//crear
router.post("/api/tarea", async (req, res) => {
console.log(req.body);
const {titulo,descripcion}=req.body;

const[result]=await pool.query("insert into tareas (titulo,descripcion) values (?,?)",[titulo,descripcion]);
res.status(200).json({
  id: result.insertId,
  titulo,
  descripcion,
});
})
//obtener tarea 
router.get("/api/tarea/:id", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tareas WHERE id = ?", [
    req.params.id,
  ]);
  if (result.length === 0)
    return res.status(404).json({ message: "Task not found" });

  res.json(result[0]);
})
//obetener tareas
router.get("/api/tareas", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tareas ");
  res.json(result);
})
app.use(router);
app.use(express.static(join(__dirname,"../Game/dist")));
app.listen(4000);

