import { catalogo } from "./utilidades";

export function renderizarCatalago() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `
            <div class='border-solid border-2 border-sky-500 w-48 m-2 flex flex-col p-2 justify-between group' id="card-produto-${produtoCatalogo.id}">
                <img src="assets/img/${ produtoCatalogo.Imagem}" alt="Polo cor de Areia">
                <p>${ produtoCatalogo.marca}</p>
                <p>${ produtoCatalogo.nome}</p>
                <p>$${ produtoCatalogo.preco}</p>
                <button class='bg-slate-950 hover:bg-slate-700 hover:scale-110 text-slate-200'>
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        `;

    document.getElementById("container-produto").innerHTML += cartaoProduto
    };
}