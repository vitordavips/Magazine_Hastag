import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
};

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[0px]");
    document.getElementById('carrinho').classList.add("right-[-360px]");
};


export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
};

export function adicionarAoCarrinho(idProduto){
    //Ache um produto(p) tal que esse produto(p) tenha o id igual ao idProduto
    const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutoCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
      <i class="fa-regular fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img 
      src"./assets/img/${produto.Imagem}" 
      alt="Carrinho: ${produto.nome}" 
      class="h-24 rounded-lg"
    />
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p> 
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
  </article>`;
  containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho;
};