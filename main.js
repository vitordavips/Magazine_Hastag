import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [
    {
        id: 1,
        nome: "POLO EM TRICÔ COM MISTURA DE VISCODE",
        marca: "Zara",
        preco: 134,
        Imagem: "produto-1.jpg",
        masculino: true,
    },
    {
        id: 2,
        nome: "POLO COM TEXTURA",
        marca: "Zara",
        preco: 118,
        Imagem: "produto-2.jpg",
        masculino: true,
    },
    {
        id: 3,
        nome: "MOLETOM COM ESTAMPA COMBINANDO",
        marca: "Zara",
        preco: 213,
        Imagem: "produto-3.jpg",
        masculino: true,
    },
    {
        id: 4,
        nome: "TERNO COM TEXTURA",
        marca: "Zara",
        preco: 467,
        Imagem: "produto-4.jpg",
        masculino: true,
    },
    {
        id: 5,
        nome: "VESTIDO DE POPELINA COMBINANDO",
        marca: "Zara",
        preco: 321,
        Imagem: "produto-5.jpg",
        feminino: true,
    },
    {
        id: 6,
        nome: "VESTIDO FRANZIDO DE LINHO",
        marca: "Zara",
        preco: 278,
        Imagem: "produto-6.jpg",
        feminino: true,
    },
    {
        id: 7,
        nome: "SHORT-SAIA CARGO",
        marca: "Zara",
        preco: 213,
        Imagem: "produto-7.jpg",
        feminino: true,
    },
    {
        id: 8,
        nome: "BOMBER COM EFEITO DE LAVAGEM",
        marca: "Zara",
        preco: 118,
        Imagem: "produto-8.jpg",
        feminino: true,
    }
];

for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `
            <div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
            <img src="assets/img/${ produtoCatalogo.Imagem}" alt="Polo cor de Areia" style="height: 300px">
            <p>${ produtoCatalogo.marca}</p>
            <p>${ produtoCatalogo.nome}</p>
            <p>$${ produtoCatalogo.preco}</p>
            <button>Adicionar</button>
            </div>
        `;

    document.getElementById("container-produto").innerHTML += cartaoProduto
};

inicializarCarrinho();
