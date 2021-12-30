import logo from '../../../../../assets/assets/logo.png';
import tomate from '../../../../../assets/assets/frutas/Tomate.png';
import brocolis from '../../../../../assets/assets/frutas/Brócolis.png';
import batata from '../../../../../assets/assets/frutas/Batata.png';
import pepino from '../../../../../assets/assets/frutas/Pepino.png';
import abobora from '../../../../../assets/assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista:[
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ]
    }
}
export default cesta;