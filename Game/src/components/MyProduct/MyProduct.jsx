import React from "react"
import Navbar from "../NavBar/NavBar"
import ReactPlayer from "react-player"
export default function MyProduct({nombre},{Adds},{Productoras}){
    const Portada=Adds.filter(Add=>Add.tipo=="Portada")
    const listProductoras=Productoras.map(Productora=><div>{Productora.nombre}</div>)
    const listVideos=Adds.filter(Add=>Add.tipo=="Video")
    const listVideosmap=listVideos.map(Video=><div>{Video.url}</div>)
    const listImages=Adds.filter(Add=>Add.tipo=="Imagen")
    const listImagesmap=listImages.map(Imagen=><div>{Imagen.url}</div>)
    return (<>
        <Navbar/>
        <div className="MyProductcontainer">
            <img src={Portada.url}></img>
            <div>{nombre}</div>
            <div>{listProductoras}</div>
            <img src={listImagesmap.url}/>
            <ReactPlayer src={listVideosmap.url}/>
        </div>
    </>)
}