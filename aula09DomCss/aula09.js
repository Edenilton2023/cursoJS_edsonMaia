

/*Arquivos JS aula 09 DOM + alterar CSS */

let titulo = window.document.querySelector('h1')
titulo.textContent= 'Aula 09 Manipulando  CSS'
titulo.style.color = 'red';
titulo.style.background = '#000';
titulo.style.borderBottom = '2px solid red';
titulo.style.borderRadius='3px'
titulo.style.padding ='5px'

//(innerHTML) altera tanto a tag como o
//titulo.innerHTML = 'Aula Manipulaçao css'
/*MANIPULANDO CSS
QUANDO O NOME DA PROPRIEDADE FOR COMPOSTO COLOAR EM CAMELCASE 
EXEMPLO (alingTexte) */
//selecionando a imagem
let imagem = document.querySelector("#foto")
//console.log(imagem);
imagem.setAttribute('src', '../images/pride-fc.jpg');
imagem.setAttribute('width','280px')
imagem.style.border="1px solid red"



// selecionado o elemeto baseado no array  como tem mais de um elemeto entao chamo pelo array e atribui a class desejada 
let box = document.querySelectorAll('.box')

//atribuindo uma class
box[0].setAttribute('class','azul')
box[1].setAttribute('class', 'amarelo');


box[1].removeAttribute('class');
//porem vai remover todas as classe dentro de box

// outra abordagem

///// MODO DE COR /////
let tela = document.querySelector('main')
//console.log(tela)

 let btDark = document.querySelector('#btdark');
 let btLight = document.querySelector('#btligh');

 btDark.addEventListener('click',modoDark)
 btDark.addEventListener('click', modoLight);

function modoDark () {
    console.log('modo dark ');
     tela.classList.add('dark')
    tela.classList.remove('light');
   
 }

function modoLight  () {
   console.log('modo light ');
    tela.classList.add('light');
   tela.classList.remove('dark');
 };


