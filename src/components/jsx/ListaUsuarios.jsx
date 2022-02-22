import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListaUsuarios = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://prueba-stack-mern-back.herokuapp.com/api/usuarios");
      setLista(res.data);
    })();
  }, [lista]);

  const delUser = async (id) => {
    await axios.delete("https://prueba-stack-mern-back.herokuapp.com/api/usuarios/" + id);
  };

  return (
    <div className="row">
      {lista.map((list) => (
        <div className="col-md-4 p-2" key={list._id}>
          <div className="card">
            <div className="card-header">
              <h5>
                {list.nombre} {list.apellido}
              </h5>
            </div>
            <div className="card-body">
              <p>Edad: {list.edad}</p>
              <p>Teléfono: {list.telefono}</p>
              <p>E-mail: {list.correo}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => delUser(list._id)}
                value={list._id}
              >
                Eliminar
              </button>
              <Link className="btn btn-primary m-1" to={"/editarUsuario/" + list._id}>
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuarios;
