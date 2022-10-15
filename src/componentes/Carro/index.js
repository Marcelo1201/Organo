import Veiculo from '../Veículo';
import './Carro.css';

const Carro = (props) => {
    const css = {backgroundColor: props.corSecundario};

    return(
        (props.carros.length > 0) ? <section className='carro' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.carroceria}</h3>
            <div className='carros'> 
                {props.carros.map(carros => <Veiculo 
                key={carros.marca}  
                corDeFundo={props.corPrimaria} 
                marca={carros.marca} 
                modelo={carros.modelo} 
                potencia={carros.potencia} 
                imagem={carros.imagem}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Carro;
