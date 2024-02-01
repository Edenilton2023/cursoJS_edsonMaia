// criar Objeto


let pessoa = { 
    nome:'edson',
    idade :27,
    peso: 85,
    altura: 1.60,
    doador : true
}
console.log(pessoa);//{ nome: 'edson', idade: 27, peso: 85, altura: 1.6, doador: true }
// acessar propriedade usando   (.)
/*
pessoa.nome// edson
pessoa.idade//27
pessoa.doador//ture
pessoa.altura//1.60
 */


//acessar usando ['']

/*
pessoa['nome']
pessoa['idade']
pessoa['doador']
pessoa['altura']
 */

///fazer operaçao usando os dados do objeto
let imc = pessoa.peso / (pessoa.altura *pessoa.altura)
console.log(imc.toFixed(2));//33.20

produtos = {
    descriçao :[],
    preco: [],
}
console.log(produtos);//{ 'descriçao': [], preco: [] }

//ALTERAR/ ATUALIZAR valor de propriedade
pessoa.nome ='edson maia'
produtos.descriçao =['arroz']
produtos.preco=[4.99]
console.log(produtos);//{ 'descriçao': [], preco: [] }

//usando epredd operator

produtos.descriçao =[ ...produtos.descriçao,'feijao','trigo']
produtos.preco =[...produtos.preco,9.99,4.45]
console.log(produtos)
const carro ={
    marca : ['ford', ' fiat ', ' GM'],
    modelo: ['ka', 'uno','corsa'],
    ano   : [1999,5005,2012],
}
console.log(carro);/*{
  marca: [ 'ford', ' fiat ', ' GM' ],
  modelo: [ 'ka', 'uno', 'corsa' ],
  ano: [ 1999, 5005, 2012 ]
}*/

//usando  epreed operator em constante

carro.marca=[...carro.marca,'wv']
carro.modelo = [...carro.modelo, 'fusca'];
carro.ano = [...carro.ano, '1979'];
console.log(carro);
/*{
  marca: [ 'ford', ' fiat ', ' GM', 'wv' ],
  modelo: [ 'ka', 'uno', 'corsa', 'fusca' ],
  ano: [ 1999, 5005, 2012, '1979' ]
} */