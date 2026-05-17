import { produtos } from "./bd.js";

/**
 * Função que retorna todos os produtos da base de dados.
 * Retorna o array completo de produtos sem nenhum filtro.
 */
function listarProdutos() {
    return produtos;
}


/**
 * Função que filtra os produtos por uma categoria específica.
 * Usa o método filter para retornar apenas os produtos cuja categoria
 * é igual à categoria informada como parâmetro.
 */
function listarPorCategoria(categoria) {
    const produtosFiltrados = produtos.filter(produto =>
        produto.categoria === categoria
    );
    return produtosFiltrados;
}


/**
 * Função que calcula o valor total de todo o estoque armazenado.
 * Usa o método reduce para percorrer todos os produtos,
 * somando para cada um o valor de (preço × quantidade).
 * Retorna uma string informando o valor total do estoque.
 */
function valorTotalEstoque() {
    let total = produtos.reduce((acumulador, produto) => {
        return acumulador + (produto.preco * produto.quantidade);
    }, 0);

    return `a soma do estoque e todos os produtos é ${total}`;
}


/**
 * Função que busca produtos pelo ID.
 * Usa o método filter para retornar um array com os produtos
 * cujo id é igual ao valor informado como parâmetro.
 */
function buscarPorId(id) {
    const produtosFiltrados = produtos.filter(produto =>
        produto.id === id
    );
    return produtosFiltrados;
}


/**
 * Função que busca produtos pelo nome (pesquisa parcial).
 * Usa toLowerCase em ambos o nome do produto e o termo de busca
 * para garantir que a comparação seja case insensitive.
 * Retorna um array com todos os produtos que contêm o termo no nome.
 */
function buscarPorNome(nome) {
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(nome.toLowerCase())
    );
    return produtosFiltrados;
}


/**
 * Função que identifica os produtos com quantidade inferior a 10 unidades.
 * Usa o método filter para retornar apenas os produtos
 * cuja quantidade é menor que 10.
 */
function quantidadeMenorQue10() {
    const produtosFiltrados = produtos.filter(produto =>
        produto.quantidade < 10
    );
    return produtosFiltrados;
}


/**
 * Função que retorna os 5 produtos com maior valor total em estoque.
 * Ordena o array de produtos de forma decrescente com base em (preço × quantidade).
 * Usa slice para retornar apenas os 5 primeiros elementos do array ordenado.
 */
function cincoProdutosComMaiorValorEstoque() {
    const produtosOrdenados = produtos.sort((a, b) => (b.preco * b.quantidade) - (a.preco * a.quantidade));
    return produtosOrdenados.slice(0, 5);
}


/**
 * Função que identifica o produto com o maior valor total em estoque (preço × quantidade).
 * Usa reduce para percorrer todos os produtos e encontrar o de maior valor em estoque.
 * Inicializa com um objeto base: {produto: null, valor: 0}.
 * Calcula o valor total em estoque deste produto (preço × quantidade).
 * Compara com o maior valor encontrado até agora.
 * Se este valor for maior, atualiza com o produto atual e seu valor.
 * Caso contrário, mantém o maior anterior.
 * Retorna mensagem formatada com o nome do produto e valor total.
 */
function identificarMaiorValorEstoque() {
    let produtoMaiorValor = produtos.reduce((maior, produto) => {
        const valorEstoque = produto.preco * produto.quantidade;
        return valorEstoque > maior.valor ? { produto, valor: valorEstoque } : maior;
    }, { produto: null, valor: 0 });
    return `O produto com maior valor em estoque é ${produtoMaiorValor.produto.nome} com um valor total de R$ ${produtoMaiorValor.valor.toFixed(2)}`;
}


/**
 * Função que calcula o valor total em estoque por categoria.
 * Usa o método reduce para percorrer todos os produtos.
 * Para cada produto, calcula o valor em estoque (preço × quantidade).
 * Verifica se a categoria já existe no objeto acumulador.
 * Se não existir, cria a chave com valor inicial 0.
 * Soma o valor do produto ao valor já existente na categoria.
 * Retorna um objeto onde as chaves são as categorias e os valores são os totais por categoria.
 */
function valorEmCadaCategoria() {
    const valorPorCategoria = produtos.reduce((acumulador, produto) => {
        const valorEstoque = produto.preco * produto.quantidade;
        if (!acumulador[produto.categoria]) {
            acumulador[produto.categoria] = 0;
        }
        acumulador[produto.categoria] += valorEstoque;
        return acumulador;
    }, {});
    return valorPorCategoria;
}


export {listarProdutos, listarPorCategoria, valorTotalEstoque, buscarPorId, buscarPorNome, quantidadeMenorQue10, identificarMaiorValorEstoque, cincoProdutosComMaiorValorEstoque, valorEmCadaCategoria}