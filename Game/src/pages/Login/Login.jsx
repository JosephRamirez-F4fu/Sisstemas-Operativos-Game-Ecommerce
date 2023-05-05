import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { UseUser } from "../../Provieder/UsuarioProvieder";
import Navbar from "../../components/NavBar/NavBar";
import { useFormik } from "formik";

export default function Login() {

  const { LoginUser } = UseUser();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      LoginUser({ correo: values.email, contrasenia: values.password });
    },
  });

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        ></input>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
