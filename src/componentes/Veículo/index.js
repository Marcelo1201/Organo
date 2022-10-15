import './Veiculo.css';

const Veiculo = ({ marca, modelo, potencia, imagem, corDeFundo}) => {
    return(
        <div className='veiculo'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={modelo}/>
            </div>
            <div className='rodape'>
                <h4>{marca}</h4>
                <h5>{modelo}</h5>
                <h6>{potencia + "Cv"}</h6>
            </div>
        </div>
    )
}

export default Veiculo;
