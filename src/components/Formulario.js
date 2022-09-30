import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Citas from "./Citas";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [nombreSintomas, setSintomas] = useState("");
  const [Fecha, setFecha] = useState("");
  const [Hora, setHora] = useState("");
  const [arregloCitas, seArregloCitas] = useState([]);

  const nuevaMascota = (e) => {
    e.preventDefault();
    let cita = {
      nombre: nombreMascota,
      duenio: nombreDuenio,
      sintomas: nombreSintomas,
      fecha: Fecha,
      hora: Hora,
    };
    seArregloCitas([...arregloCitas, cita]);
    setNombreMascota("");
    setNombreDuenio("");
    setSintomas("");
  };

  return (
    <div>
      <div className="shadow py-4">
        <h3 className="ms-3">Llenar el formulario para crear una cita</h3>
      </div>
      <form onSubmit={nuevaMascota}>
        <div className="row">
          <div className="col-12 col-md-3 d-flex flex-column">
            <label className="my-3">Nombre de mascota</label>
            <label className="my-3">Nombre de dueño</label>
            <label className="my-3">Fecha y hora</label>
            <label className="my-3">Sintomas</label>
          </div>
          <div className="col-12 col-md-9 d-flex flex-column">
            <input type="text" className="form-control my-2" />
            <input type="text" className="form-control my-2" />
            <div className="d-flex">
              <input type="date" className="w-100 form-control my-2" />
              <input type="time" className="w-100 form-control my-2" />
            </div>
            <input type="text" className="form-control my-2" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button type="submit" className="w-25">
            Agregar cita
          </Button>
        </div>
      </form>
      <Citas arregloCitas={arregloCitas} />
    </div>
  );
};

export default Formulario;
