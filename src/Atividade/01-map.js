/* Numeros
const num = [1, 2, 3, 4, 5]
const dobro = numero => numero * 2
console.log(num.map(dobro))
*/


//-----------------------------------------------------------------


/* Strings
const nome = ['Ana', 'Bia', 'Carolina', 'Matheus', 'Vitor']
const letras = nome.map(nome => nome[0])
console.log(letras)
*/


//------------------------------------------------------------------

/* Objetos
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20}
]
const ProductName = carrinho.map(a => a.nome)
console.log(ProductName)

const Multiplica = carrinho.map(b => b.qtde * b.preco)
console.log(Multiplica)
*/

//--------------------------------------------------

/*array de numeros
const nums = [2, 4, 6, 8]
const dobro = numero => numero * 2
console.log(nums.map(dobro))

//console.log(nums.map(numero => numero * 3)) - pode passar a função dentro do map diretamente
*/

//---------------------------------------------------

/* 
const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']
const letra = nomes.map(text => text[0]) //Pegando o índice zero para pegar a primeira letra
console.log(letra)
*/

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 2, preco: 5.20},
    { nome: 'Caderno', qtde: 3, preco: 8.99},
    { nome: 'Lapis', qtde: 8, preco: 4.99},
    { nome: 'Tesoura', qtde: 1, preco: 3.99},
]

const NomeProduto = carrinho.map(a => a.nome)
const Mult = carrinho.map(b => b.qtde * b.preco)

const ValorTotal = carrinho.map(c => { //retorna dentro de um array
    let per_product = {
        nome: c.nome,
        valor: c.qtde * c.preco
    }
    return per_product
})


console.log(NomeProduto)
console.log(Mult)
console.log(ValorTotal)
