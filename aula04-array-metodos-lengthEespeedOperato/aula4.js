

let produtos = ["arroz", 'feijao', 'leite']
let codigos = Array(10,20,30)
let meses = ['jan ','fer ',' mar ',' abr']

 // ALTERAR  elemento do array
 meses[0] = 'janeiro'


// ADICIONAR  no final push = empurre
produtos.push('açucar')
codigos.push(40,50,60,70)
meses.push('mai ','jun ','ago ', ' 07')

//REMOVER do final pop = estourar 
produtos.pop();
codigos.pop();
meses.pop();
 /*document.write(produtos+'<br>');
 document.write(codigos + '<br>');
 document.write(meses + '<br>');
document.write(produtos.length());*/

//ADICIONAR  no inicio unshift
produtos.unshift('uva','maçã')

//REMOVE DO INICIO
produtos.shift()

//COMPROMETO  do Array
  //produtos.length();


  //REMOVER de uma posiçao especifica
  //splice = emendar
  // posiçao inicial quantos remover
  // ou seja estou dizendo que aparte do 2 vou remover 3 elemetos
console.log(codigos);//[ 10, 20, 30, 40, 50, 60 ]
  codigos.splice(2,3)
console.log(codigos);//[10, 20, 60];

// COPIAR array slice = fatiar porção
// aparte da posiçao inicial 1 ,4 quantos copiar 

console.log(meses);//['jan ', 'fer ', ' mar ', ' abr', 'mai ', 'jun ', 'ago '];
let  meses1 = meses.slice(1,4)
console.log(meses1);//[ 'fer ', ' mar ', ' abr' ];



//speed operation ... copiar 
// ele tanto copia  quanto adiciona ao mesmo tempo


console.log(produtos);//[ 'maçã', 'arroz', 'feijao', 'leite' ]

let produtos2 = [...produtos,'ovo','pera','manga ']

console.log(produtos2);/*
  'maçã',   'arroz',
  'feijao', 'leite',
  'ovo',    'pera',
  'manga '*/



