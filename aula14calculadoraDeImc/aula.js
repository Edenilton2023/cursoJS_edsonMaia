//DEFINIONDO O FLUXO DO PROGRAMA
//  1 PEGA OS DADOS
//  2 VALIDAR OS  DADOS 
//  3 PROCESSESAMENTO
//  4 SAIDA DOS DADOS
 // obs nao fiz validaçao

/* SELECIONE TODOS OS ELEMETOS QUE DESEJA MANIPULAR */
/* SELECIONE TODOS OS ELEMENTOS QUE DESEJA MANIPULAR */


//  1 PEGA OS DADOS
let formulario = document.querySelector('form');
let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let cxImc = document.querySelector('#resultadoImc');

let aviso = document.querySelector('#aviso');
let dados = document.querySelectorAll('.pessoa');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpa');
  


// se colocar .value no final ja pego logo o valor

/* adicionar um escutador de evento para o btnenviar*/
// uma função anônima para pegar os valores
// calcular o imc
btnEnviar.addEventListener(
  'click',
  function (
    //  3 PROCESSESAMENTO
    e
  ) {
    //pegar os valores de cada input
    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let Altura = cxAltura.value;
    let imc = (peso / (Altura * Altura)).toFixed(1);

    console.log(nome);
    console.log(idade);
    console.log(peso);
    console.log(Altura);
    console.log(imc);
    cxImc.value = imc;
    let sit = situacaoDoPeso(imc);
    aviso.textContent = sit;

    // criar um objeto pessoa


    //  4 SAIDA DOS DADOS

    let pessoa = {
      nome: nome,
      idade: idade,
      peso: peso,
      Altura: Altura,
      imc: imc,
      sit: sit,
    };
    console.log(pessoa);
    dados[1].textContent = pessoa.nome;
    dados[2].textContent = pessoa.idade + ' anos';
    dados[3].textContent = pessoa.peso + ' kg';
    dados[4].textContent = pessoa.Altura + ' m';
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit;

    // prevenir comportamento padrão
    e.preventDefault();
  }
);
function situacaoDoPeso(imc){
  let situacao = ''
  if (imc < 18.5){
    situacao = 'abaixo do peso'
  }else if (imc >= 18.5 && imc <= 24.9){
    situacao = 'peso normal'
  }else if(imc >= 25 && imc <=29.9){
    situacao = 'sobrepeso'
  }else if (imc >= 30 && imc <= 34.9){
    situacao = 'obesidade I'
  }else if (imc >= 35 && imc <= 39.9){
    situacao = "obesidade II"
  }else if (imc >= 40  ){
    situacao = 'obesidade III'
  } else { 'informe seu peso corretamente'}
return situacao
}