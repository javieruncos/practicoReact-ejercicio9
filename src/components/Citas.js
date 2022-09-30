import React from 'react';

import { Container,Row } from 'react-bootstrap';
import CardsPaciente from './CardsPaciente';

const Citas = ({arregloCitas,nuevaMascota,borrarCita}) => {
    return (
         <>
        <div>
            <h3 className='text-center mt-5'>numero de citas  ({arregloCitas.length})</h3>
        </div>
        <Container className="mt-5">
           <Row>

           {
                 
             arregloCitas.map((item,indice)=><CardsPaciente  item={item} key={indice} nombre={item.nombre} dueño={item.duenio} sintoma={item.sintomas} fecha={item.fecha}  hora={item.hora} nuevaMascota={nuevaMascota} borrarCita={borrarCita}/>)



           }  
           </Row>
        </Container>
        </>
    );
};

export default Citas;