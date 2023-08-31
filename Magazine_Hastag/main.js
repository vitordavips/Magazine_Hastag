const catalogo = [
    {
        id: 1,
        nome: "Polo cor de Areia",
        marca: "Zara",
        preco: 134,
        Imagem: "produto-1.jpg",
        masculino: true,
    },
    {
        id: 2,
        nome: "Polo cor Cinza",
        marca: "Zara",
        preco: 118,
        Imagem: "produto-2.jpg",
        masculino: true,
    },
    {
        id: 3,
        nome: "Moletom",
        marca: "Zara",
        preco: 213,
        Imagem: "produto-3.jpg",
        masculino: true,
    },
    {
        id: 4,
        nome: "Terno Cinza",
        marca: "Zara",
        preco: 467,
        Imagem: "produto-4.jpg",
        masculino: true,
    },
    {
        id: 5,
        nome: "Vestido Branco e Verde",
        marca: "Zara",
        preco: 321,
        Imagem: "produto-5.jpg",
        feminino: true,
    },
    {
        id: 6,
        nome: "Vestido verdo",
        marca: "Zara",
        preco: 278,
        Imagem: "produto-6.jpg",
        feminino: true,
    },
    {
        id: 7,
        nome: "Saia de Alfaiataria",
        marca: "Zara",
        preco: 213,
        Imagem: "produto-7.jpg",
        feminino: true,
    },
    {
        id: 8,
        nome: "Jaqueta Marrom",
        marca: "Zara",
        preco: 118,
        Imagem: "produto-8.jpg",
        feminino: true,
    }
]

const cartaoProduto = `
    <div id="card_produto-1">
    <img src="assets/img/${catalogo[0].Imagem}" alt="Polo cor de Areia">
    <p>${catalogo[0].marca}</p>
    <p>${catalogo[0].nome}</p>
    <p>$${catalogo[0].preco}</p>
    <button>Adicionar</button>
    </div>
`;

document.getElementById("container-produto").innerHTML += cartaoProduto