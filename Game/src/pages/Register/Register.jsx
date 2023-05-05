import React from "react";
import { Helmet } from "react-helmet";
import { UseUser } from "../../Provieder/UsuarioProvieder";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import { useFormik } from "formik";
export default function Register() {
  const { RegisterUser } = UseUser();
  const submitForm = (values) => {
    RegisterUser({
      nombre:values.nombre,
      apellido:values.apellido,
      correo:values.correo,
      contrasenia:values.contrasenia,
      direccion:values.direccion,
      codigo_postal:values.codigo_postal
    });
  };
  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      contrasenia: "",
      direccion: "",
      codigo_postal: "",
      confirmpassword: "",
    },
    onSubmit: submitForm,
  });

  return (
    <div className="Registro">
      <Navbar />
      <Helmet>
        <title>Game| Registro</title>
      </Helmet>
      <h1>Registro</h1>
      <h2>Bienvenido a Game !</h2>
      <h3>Ingrese los datos para continuar</h3>
      <div className="RegisterImageContent">
        <img alt="Image Register" />
        <form onSubmit={handleSubmit}>
          <input
            type="nombre"
            placeholder="nombre"
            name="nombre"
            onChange={handleChange}
          ></input>
          <input
            type="apellido"
            placeholder="apellido"
            name="apellido"
            onChange={handleChange}
          ></input>
          <input
            type="correo"
            placeholder="correo"
            name="correo"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            placeholder="contraseña"
            name="contrasenia"
            onChange={handleChange}
          ></input>
           <input
            type="password"
            placeholder="confirmar contraseña"
            name="confirmpassword"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="dirección"
            name="direccion"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="codigo postal"
            name="codigo_postal"
            onChange={handleChange}
          ></input>
          <button type="submit" disabled={isSubmitting}>
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}
