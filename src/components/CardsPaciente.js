import { Card,Button, Form } from "react-bootstrap";
import '../style/CardAvatar.css'



const CardsPaciente = ({nombre,duenio,sintoma,fecha,hora, nuevaMascota}) => {
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
           <ul className="text-center">
            <li className="my-5 ">Fecha :  {fecha}</li>
            <li className="my-5 ">Hora :  {hora}</li>
            <li className="my-5 ">Sintomas :  {sintoma}</li>
           </ul>
          <Button variant="primary" className="ms-5">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsPaciente;
