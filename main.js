import { renderizarCatalago } from "./src/cartaoProduto";
import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [
    {
        id: 1,
        nome: "POLO EM TRICÔ COM MISTURA DE VISCODE",
        marca: "Zara",
        preco: 134,
        tamanho: "M",
        Imagem: "produto-1.jpg",
        masculino: true,
    },
    {
        id: 2,
        nome: "POLO COM TEXTURA",
        marca: "Zara",
        preco: 118,
        tamanho: "M",
        Imagem: "produto-2.jpg",
        masculino: true,
    },
    {
        id: 3,
        nome: "MOLETOM COM ESTAMPA COMBINANDO",
        marca: "Zara",
        preco: 213,
        tamanho: "G",
        Imagem: "produto-3.jpg",
        masculino: true,
    },
    {
        id: 4,
        nome: "TERNO COM TEXTURA",
        marca: "Zara",
        preco: 467,
        tamanho: "M",
        Imagem: "produto-4.jpg",
        masculino: true,
    },
    {
        id: 5,
        nome: "VESTIDO DE POPELINA COMBINANDO",
        marca: "Zara",
        preco: 321,
        tamanho: "M",
        Imagem: "produto-5.jpg",
        feminino: true,
    },
    {
        id: 6,
        nome: "VESTIDO FRANZIDO DE LINHO",
        marca: "Zara",
        preco: 278,
        tamanho: "M",
        Imagem: "produto-6.jpg",
        feminino: true,
    },
    {
        id: 7,
        nome: "SHORT-SAIA CARGO",
        marca: "Zara",
        preco: 213,
        tamanho: "P",
        Imagem: "produto-7.jpg",
        feminino: true,
    },
    {
        id: 8,
        nome: "BOMBER COM EFEITO DE LAVAGEM",
        marca: "Zara",
        preco: 118,
        tamanho: "P",
        Imagem: "produto-8.jpg",
        feminino: true,
    }
];

renderizarCatalago();
inicializarCarrinho();
