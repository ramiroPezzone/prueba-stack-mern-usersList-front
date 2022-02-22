import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditarUsuario = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: 18,
    telefono: 0,
    correo: "",
  };

  let { id } = useParams();

  const [usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId] = useState(id);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  // lógica de actualización de usuario
  const updateUser = async (e) => {
    e.preventDefault();
    const dataUpdated = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };
    await axios.put("https://prueba-stack-mern-back.herokuapp.com/api/usuarios/" + subId, dataUpdated);
    setUsuario({ ...valorInicial });
    setSubId("");
  };

  // Lógica para hacer peticion a la api

  const editarUser = async (valorId) => {
    const res = await axios.get(
      "https://prueba-stack-mern-back.herokuapp.com/api/usuarios/" + valorId
    );
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      edad: res.data.edad,
      telefono: res.data.telefono,
      correo: res.data.correo,
    });
  };

  useEffect(() => {
    if (subId !== "") {
      editarUser(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={updateUser}>
          <h3 className="text-center">Edición de usuario</h3>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Juan"
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pelotas"
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="Number"
              className="form-control"
              placeholder="18"
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Teléfono:</label>
            <input
              type="Number"
              className="form-control"
              placeholder="3424219046"
              name="telefono"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              placeholder="juan.pelotas@pelotasmail.com"
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <button className="btn btn-danger form-control mt-2">
            Actualizar usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarUsuario;
