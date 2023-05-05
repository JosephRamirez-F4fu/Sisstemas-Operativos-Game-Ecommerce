import { useContext, useState } from "react";
import { UserContext } from "../context/Usuario.context";

import {
  deleteProductOfCart,
  getALLProductData,
  getCart,
  getProductForStore,
  getUser,
  postCart,
  postUser,
} from "../api/apis";
export const UseUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("useContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [productForStore, setProductForStore] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [user, setUser] = useState({
    correo: "",
    contrasenia: "",
  });

  async function ProductAllData(idProduct) {
    const response = await getALLProductData(idProduct);
    setAllProductData(response.data);
  }
  async function HomeProducts() {
    const response = await getProductForStore();
    setProductForStore(response.data);
  }

  async function LoadCart() {
    const response = await getCart(user.id);
    setCart(response);
  }

  async function addCart(idProduct) {
    const response = await postCart(user.id, idProduct);
    setCart([...cart, response.data]);
  }

  async function deleteProductofCart(idProduct) {
    const response = await deleteProductOfCart(user.id, idProduct);
    setCart(response);
  }

  const LoginUser = async (dataUser) => {
    try {
      console.log(dataUser);
      const response = await getUser(dataUser);
      setUser(response.data);
      setisLogin(true);
    } catch (error) {
      console.error(error);
    }
  };
  async function LogoutUser() {
    setUser({});
    setisLogin(false);
  }
  async function RegisterUser(NewUser) {
    try {
      const response = await postUser(NewUser);
      setUser(NewUser);
      setisLogin(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        isLogin,
        user,
        LoginUser,
        LogoutUser,
        RegisterUser,
        setisLogin,
        setUser,
        cart,
        LoadCart,
        addCart,
        deleteProductofCart,
        HomeProducts,
        productForStore,
        allProductData,
        ProductAllData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
