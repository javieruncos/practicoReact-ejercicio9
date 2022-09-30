import { useState } from "react";
import { Form ,Button} from "react-bootstrap";
import Citas from "./Citas";

const Formulario = () => {

    const [nombreMascota, setNombreMascota] = useState("")
    const [nombreDuenio, setNombreDuenio] = useState("")
    const [nombreSintomas, setSintomas] = useState("")
    const [arregloCitas, seArregloCitas] = useState([])

   const nuevaMascota = (e)=>{
    e.preventDefault()
    let cita = {
     nombre:nombreMascota,
     duenio:nombreDuenio,
     sintomas:nombreSintomas
    }
    seArregloCitas([...arregloCitas,cita])
    setNombreMascota("")
    setNombreDuenio("")
    setSintomas("")
   }

  return (
    <div className="mt-4">
      <div>
        <div className="shadow py-4">
          <h3 className="ms-3">Llenar el formulario para crear una cita</h3>
        </div>
        <Form className="d-flex shadow-lg " onSubmit={nuevaMascota}>
          <Form.Group
            className="mb-3 d-flex flex-column w-75 ms-3"
          >
            <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Nombre de Mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de Mascota"
                className="w-50"
                value={nombreMascota}
                onChange={(e)=> setNombreMascota(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Nombre de Dueño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del Dueño"
                className="w-50"
                value={nombreDuenio}
                onChange={(e)=> setNombreDuenio(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter email"
                className="w-25"
              />
              <Form.Label className="mt-2 mx-1">Hora</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter email"
                className="w-25"
              />
            </Form.Group>
            <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Sintomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sintomas"
                className="w-50"
                value={nombreSintomas}
                onChange={(e)=> setSintomas(e.target.value)}
              />
            </Form.Group>
              <Form.Group className="text-center py-3">
              <Button type="submit">Agregar cita</Button>
              </Form.Group>
          </Form.Group>
        </Form>
        <Citas arregloCitas={arregloCitas}/>
      </div>
    </div>
  );
};

export default Formulario;
