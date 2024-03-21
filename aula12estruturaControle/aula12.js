

let site1 = window.document.querySelector("#site1")
let site2 = window.document.querySelector("#site2")
let site3 = window.document.querySelector('#site3');

let site4 = window.document.querySelector('#site4');
let site5 = window.document.querySelector('#site5');
let site6 = window.document.querySelector('#site6');
let escolha = window.document.querySelector('#escolha');


let notaFinal1= 3
let notaFinal2= 8 
let notaFinal3= 10
let notaFinal4 = 6
let notaFinal5 =10
let notafina6 = 0


//CONDICIONAIS

if (notaFinal1 >= 7){
    //IF == SE VERDADEIRO 
    // faça as instruçoes abaixo
    site1.textContent='aprovado'
    
}
if (notaFinal1 >= 7){
    //IF ELSE == SE FALSO 
    //faça as instruçoes abaixo
    site1.textContent ='aprovado'
}else{
    site1.textContent = 'Reprovado'
}

//IF TERNARIO == SE VERDEIRO  a primeira ação, SE FALSO segunda ação
notaFinal2 >= 7 ? /*primeira ação */ (site2.textContent = 'passou'):/*segunda ação */ (site2.textContent = 'ficou');
notaFinal4 >= 5 ? (site4.textContent = 'mediano'):(site4.textContent =' baixo media')

  // IF ENCADEADO OU ANINHADO
let situacao;
  if (notaFinal3 >= 7) {
    site3.textContent = 'aprovado';
    situacao = 'aprovado';
  } else if (notaFinal3 <= 3) {
    site3.textContent = 'recuperação';
    situacao = 'recuperação';
  } else {
    site3.textContent = 'reprovado';
    situacao = 'reprovado';
  }
 
let nomeDoAluno = 'fabio'

  //ESCOLHA O CASO

//   let situaçao = ''



  switch (situacao) {
    case 'aprovado':
      escolha.textContent =nomeDoAluno+ '  passou de ano '
      break;

    case 'reprovado':
      escolha.textContent = 'não passou de ano'
      break

    case 'recuperação':
      escolha.textContent = 'tem que estudar '
      break
      default:
        escolha.textContent = 'estude'
  }
