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