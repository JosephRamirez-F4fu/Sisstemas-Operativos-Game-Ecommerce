import axios from "axios";

//Usuario
export const getUser = async (loginUser) =>
  await axios.post("http://localhost:4000/api/cliente/login", loginUser);
export const postUser = async (DataUser) =>
  await axios.post("http://localhost:4000/api/clientes", DataUser);

//Producto

export const getProducts = async () =>
  await axios.get(`http://localhost:4000/api/productos`);

export const getALLProductData = async (id) =>
  await axios.post(`http://localhost:4000/api/productos/alldata/${id}`);

export const getProductForStore = async () =>
  await axios.get(`http://localhost:4000/api/productos/store`);

//Carrito de compras

export const getCart = async (id) =>
  await axios.get(`http://localhost:4000/api/carrito/${id}`);

export const postCart = async (idCliente, idProducto) =>
  await axios.post(
    `http://localhost:4000/api/carrito/${idCliente}/${idProducto}`
  );

export const deleteProductOfCart = async (idCliente, idProducto) =>
  await axios.delete(
    `http://localhost:4000/api/carrito/${idCliente}/${idProducto}`
  );
