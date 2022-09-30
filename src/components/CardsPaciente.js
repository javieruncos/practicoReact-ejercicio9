import "../style/Card.css";
import { Card,Button, Form } from "react-bootstrap";



const CardsPaciente = ({nombre,duenio,sintoma}) => {
  return (
    <div className="card">
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
         <Form>
         <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="Nombre de Mascota"
                className="w-50"
              />
            </Form.Group>
         <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Hora</Form.Label>
              <Form.Control
                type="time"
                placeholder="Nombre de Mascota"
                className="w-50"
              />
            </Form.Group>
         <Form.Group className="d-flex my-3">
              <Form.Label className="mt-2  w-25">Sintomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de Mascota"
                className="w-50"
                value={sintoma}
              />
            </Form.Group>
         </Form>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsPaciente;
