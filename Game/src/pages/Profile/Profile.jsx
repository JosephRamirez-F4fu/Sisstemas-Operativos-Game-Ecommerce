import React from "react";
import { Helmet } from "react-helmet";
import "./Profile.css";
import "../../App.css";
import ButtonProfile from "../../components/ButtonProfile/ButtonProfile";
import { UseUser } from "../../Provieder/UsuarioProvieder";
export default function Profile() {
 const {user} = UseUser();
  return (
    <div className="App">
      <Helmet>
        <title>Game| Perfil</title>
      </Helmet>
      <div className="ProfileContainer">
        <h1 className="ContainerTitle">Perfil</h1>

        <div className="Profile">
          <div className="ProfileImgContainer">
            <img
              className="ProfileImg"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            />
          </div>
          <div className="ProfielDataConteiner">
            <p>Nombre: {user.nombre}</p>
            <p>Apellido: {user.apellido}</p>
            <p>Correo: {user.correo}</p>
            <p>Direccion: {user.direccion}</p>
          </div>
        </div>
        <div className="ButtonContainer">
          <ButtonProfile   url={"/"} text={"Inicio"} />
        </div>  
      </div>
    </div>
  );
}
