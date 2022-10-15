import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [potencia, setPotencia] = useState('');
    const [imagem, setImagem] = useState('');
    const [carroceria, setCarroceria] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.carroCadastrado({
            marca,
            modelo,
            potencia,
            imagem,
            carroceria
        })
        setMarca('')
        setModelo('')
        setPotencia('')
        setImagem('')
        setCarroceria('')
        }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do carro</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Marca" 
                    placeholder="Digite a marca do carro"
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />

                <CampoTexto
                    obrigatorio={true} 
                    label="Modelo"
                    placeholder="Digite o modelo do carro"
                    valor={modelo}
                    aoAlterado={valor => setModelo(valor)}
                />

                <CampoTexto
                    tipo="number"
                    obrigatorio={true} 
                    label="Potência" 
                    placeholder="Digite a cavalaria do carro"
                    valor={potencia}
                    aoAlterado={valor => setPotencia(valor)}
                />
                
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true}
                    label="Carroceria" 
                    itens={props.tipos}
                    valor={carroceria}
                    aoAlterado={valor => setCarroceria(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;
