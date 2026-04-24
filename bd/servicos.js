import { produtos } from "./bd.js";

function listarProdutos(){
    return produtos
}

function listarPorCategoria(categoria){
    const produtosFiltrados = produtos.filter(produto => 
        produto.categoria === categoria
    );
    return produtosFiltrados
}

export {listarProdutos, listarPorCategoria}