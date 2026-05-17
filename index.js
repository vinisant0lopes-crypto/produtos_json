import express from 'express'

import { listarProdutos, listarPorCategoria, valorTotalEstoque, buscarPorId, buscarPorNome, quantidadeMenorQue10, identificarMaiorValorEstoque, cincoProdutosComMaiorValorEstoque, valorEmCadaCategoria } from './bd/servicos.js'


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
   let produtos = listarProdutos()
   res.json(produtos)
})


app.get('/produtosCategoria/:categoria', (req, res) => {
   let {categoria} = req.params
   let produtosFiltrados = listarPorCategoria(categoria)
   res.json(produtosFiltrados)
})

app.get('/totalEstoque', (req, res) => {
  let total = valorTotalEstoque()
  res.send(total)
})

app.get('/produtoID/:id', (req, res) => {
  let {id} = req.params
  let produto = buscarPorId(Number(id))
  res.json(produto)
})

app.get('/produtoNome/:nome', (req, res) => {
  let {nome} = req.params
  let produto = buscarPorNome(nome)
  res.json(produto)
})

app.get('/quantidadeMenorQue10', (req, res) => {
  let produtos = quantidadeMenorQue10()
  res.json(produtos)
})

app.get('/cincoProdutosComMaiorValorEstoque', (req, res) => {
  let produtos = cincoProdutosComMaiorValorEstoque()
  res.json(produtos)
})

app.get('/maiorValorEstoque', (req, res) => {
  let produto = identificarMaiorValorEstoque()
  res.send(produto)
})

app.get('/valorEmCadaCategoria', (req, res) => {
  let valorCategorias = valorEmCadaCategoria()
  res.json(valorCategorias)
})





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
  console.log('Server is running on http://localhost:3000/produtos')
  console.log('Server is running on http://localhost:3000/produtosCategoria/:categoria')
  console.log('Server is running on http://localhost:3000/totalEstoque')
  console.log('Server is running on http://localhost:3000/produtoID/:id')
  console.log('Server is running on http://localhost:3000/produtoNome/:nome')
  console.log('Server is running on http://localhost:3000/quantidadeMenorQue10')
  console.log('Server is running on http://localhost:3000/maiorValorEstoque')
  console.log('Server is running on http://localhost:3000/cincoProdutosComMaiorValorEstoque')
  console.log('Server is running on http://localhost:3000/valorEmCadaCategoria')
})

