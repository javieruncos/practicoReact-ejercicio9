import { Card,Button, Form } from "react-bootstrap";
import '../style/CardAvatar.css'



const CardsPaciente = ({nombre,duenio,sintoma,fecha,hora}) => {
  return (
    <div className="card col-12 col-md-4">
      <Card>
        <Card.Body>
            <div className="d-flex justify-content-beetwen">
                <div className="avatar">
                    <img src={require('../img/perros.jpg')} alt="perros" className="w-100"></img>
                </div>
                <div className="mx-5 my-4">
                    <h5>{nombre}</h5>
                </div>
            </div>
         <Form>
         <Form.Group className="d-flex my-3 justify-content-center">
              <Form.Label className="mt-2  w-25">Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="Nombre de Mascota"
                className="w-50"
                value={fecha}
              />
            </Form.Group>
         <Form.Group className="d-flex my-3 justify-content-center">
              <Form.Label className="mt-2  w-25">Hora</Form.Label>
              <Form.Control
                type="time"
                placeholder="Nombre de Mascota"
                className="w-50"
                value={hora}
              />
            </Form.Group>
         <Form.Group className="d-flex my-3 justify-content-center">
              <Form.Label className="mt-2  w-25">Sintomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de Mascota"
                className="w-50"
                value={sintoma}
              />
            </Form.Group>
         </Form>
          <Button variant="primary" className="ms-5">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsPaciente;
