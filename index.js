import express from 'express'

import { listarProdutos, listarPorCategoria } from './bd/servicos.js'


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

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

