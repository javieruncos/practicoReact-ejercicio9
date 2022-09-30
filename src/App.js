import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <h1 className='text-center'>Administrador pacientes de veterinaria</h1>
      <Container>
      <Formulario />
      </Container>
    </div>
  );
}

export default App;
