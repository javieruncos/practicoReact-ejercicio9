import React from 'react';

import { Container } from 'react-bootstrap';
import CardsPaciente from './CardsPaciente';

const Citas = ({arregloCitas,nuevaMascota}) => {
    return (
         <>
        <div>
            <h3 className='text-center mt-5'>numero de citas  ({arregloCitas.length})</h3>
        </div>
        <Container className="mt-5 row">

           {
                 
             arregloCitas.map((item,indice)=><CardsPaciente key={indice} nombre={item.nombre} dueño={item.duenio} sintoma={item.sintomas} fecha={item.fecha}  hora={item.hora} nuevaMascota={nuevaMascota}/>)



           }  
        </Container>
        </>
    );
};

export default Citas;