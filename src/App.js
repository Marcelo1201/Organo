import { useState } from 'react';
import Banner from './componentes/Banner';
import Carro from './componentes/Carro';
import Formulario from './componentes/Formulario';

function App() {

  const tipos = [
    {
      nome: 'Hatch',
      corPrimaria: '#e06b69',
      corSecundario: '#fde7e8'
    },
    {
      nome: 'Sedan',
      corPrimaria: '#82cffa',
      corSecundario: '#e8f8ff'
    },
    {
      nome: 'SUV',
      corPrimaria: '#ff8a29',
      corSecundario: '#fff5d9'
    },
    {
      nome: 'Perua',
      corPrimaria: '#57c278',
      corSecundario: '#d9f7e9'
    },
    {
      nome: 'Coupe',
      corPrimaria: '#F8FF5E',
      corSecundario: '#F8FFC8'
    }
    
  ]

  const [carros, setCarros] = useState([]);

  const novoCarroAdicionado = (carro) => {
    setCarros([...carros, carro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario tipos={tipos.map(carroceria => carroceria.nome)} carroCadastrado={carro => novoCarroAdicionado(carro)}/>

      {tipos.map(carroceria => <Carro 
      key={carroceria.nome} 
      carroceria={(carroceria.nome)} 
      corPrimaria={carroceria.corPrimaria} 
      corSecundario={carroceria.corSecundario}
      carros={carros.filter(carro => carro.carroceria === carroceria.nome)}
      />)}
    </div>
  );
}

export default App;
