//No filter ele filtra os valores a serem buscados

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getProdutosEmEstoque = carrinho.filter(item => item.qtde > 1).map(item => item.nome)
console.log(getProdutosEmEstoque)

/*
find() também serve para procurar uma quantidade com um filtro específico
*/