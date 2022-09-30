import { Card,Button,Col} from "react-bootstrap";
import '../style/CardAvatar.css'



const CardsPaciente = ({nombre,dueño,sintoma,fecha,hora,borrarCita,item}) => {
  return (
      <Col md={4}>
      <Card>
        <Card.Body>
            <div className="d-flex justify-content-around shadow">
                <div className="avatar">
                    <img src={require('../img/perros.jpg')} alt="perros" className="w-100"></img>
                </div>
                <div className="mx-5 my-4">
                    <h5>{nombre}</h5>
                    <p><span>{dueño}</span></p>
                </div>
            </div>
            <div className="d-flex justify-content-center shadow">
              <ul className="">
                <li className="my-5 list-group-item">Fecha :{fecha}</li>
                <li className="my-5 list-group-item">Hora :{hora}</li>
                <li className="my-5 list-group-item">Sintomas:{sintoma}</li>
              </ul>
            </div>
           <div className="d-flex justify-content-center my-3">
              <Button variant="primary" className="shadow" onClick={()=>borrarCita(item)}>Borrar</Button>
           </div>
        </Card.Body>
      </Card>
      </Col>
  );
};

export default CardsPaciente;
