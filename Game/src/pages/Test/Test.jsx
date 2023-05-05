import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

export default function Test() {
  const createTarea = async (tarea) => {

    await axios.post("http://localhost:4000/api/tarea", {
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
    });
  };

  const getTarea = async (id) => {
    await axios.get(`http://localhost:4000/api/tarea/${id}`);
  };
  const getTareas = async () =>
    await axios.get("http://localhost:4000/api/tareas");

  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
    },
    onSubmit: async () => {
      console.log(values);
      createTarea(values);
    },
  });

  const [tareas, setTareas] = useState([]);
  
  useEffect(() => {
    const loadTareas = async () => {
      const response = await getTareas();
      setTareas(response.data);
    };
    loadTareas();
    
  }, []);

  function renderTareas(){
    return tareas.map((tareas)=><div key={tareas.id}>
        <h1> {tareas.titulo}</h1>
        <p> {tareas.descripcion}</p>
    </div>)
  }

  return (
    <div>
      <Helmet>
        <title>Game| Test</title>
      </Helmet>
      <h1>Test Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          text="titulo"
          placeholder="titulo"
          name="titulo"
          onChange={handleChange}
        ></input>
        <input
          text="descripcion"
          placeholder="descripcion"
          name="descripcion"
          onChange={handleChange}
        ></input>
        <button type="submit">enviar</button>
      </form>
      <div>{renderTareas()}</div>
    </div>
  );
}
