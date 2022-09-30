import React from 'react';

import { Container } from 'react-bootstrap';
import CardsPaciente from './CardsPaciente';

const Citas = ({arregloCitas}) => {
    return (
        <Container>
            <h3 className='text-center'>No hay citas</h3>

           {
                 
             arregloCitas.map((item,indice)=><CardsPaciente key={indice} nombre={item.nombre} dueño={item.duenio} sintoma={item.sintomas} />)



           }


           
        </Container>
    );
};

export default Citas;