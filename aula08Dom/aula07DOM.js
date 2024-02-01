//Arquivos JS aula 07 DOM

// Dom = Document Object Model
//Arvore com elemetos desde o Browser , a janela do  Browser, o documento é cada elemeto  html que forman os conteudos 

// navegador 
// window
// location
// Document -> html ->  header e hidtory

//PARA MANIPULAR O DOM PRECISAMOS
//indicar qual objeto usar , depois chamar um metodo (funçao)para para selecionar ele seus dados trazer informaçoes ,ETC..

//.querySelector()
//selecionar os elemetos com base na tag, #id,ou .class

//EXEMPLO
// tag 
let titulo = document.querySelector('h1')
// retorna     <h1 id="titulo">AULA 07</h1>

 //   #id
 let tituloAula = document.querySelector('#titulo')
 // retorna   <h1 id="titulo">AULA 07</h1>

//ou   .class
let testo = document.querySelector('.texto');          
// retorna    p.texto

//textContent
//propriedade ou atributo  textContent serve para acessar ou alterar o conteudo de um elemeto que foi selecionado


//alterar
 titulo.textContent = 'dom'
//acessar
 titulo.textContent 

 //obs.. para acessar ou alterara as tag  usar 
 .innerHTML 



//caso eu tenha mais que um ele ira retotna o primeiro,
// para pegara todos eu uso  

//.querySelectorAll()
//vai retorna uma lista de array
//NodeList(3) [p.texto, p.texto,p.texto]
 //um array de elemetos com todos os (.class , id ,tags) conforme o soicitados

/*
[0]: p.texto
[1]: p.texto
[2]: p.texto
length: 3
[[Prototype]]
:  */
 

let testando =document.querySelectorAll('.box')


//alterando o conteudo pela posiçao do array
testando[0].textContent = 'texto qualquer';


  testando[2].innerHTML = '<strong> outro Texto</strong>';
//alterando o a tag  e conteudo pela posiçao do array


document.write(`<br>${testando[0].textContent}
<br>${testando[1].textContent}<br>${testando[2].innerHTML}`);

//existe tambem outros metodos
//document.getElementsByTagName('tag')

//document.getElementsByClassName('.class')

//document.getElementById('#id')

//mais preferencialmente usar .querySelector
 //fucionama da mesmoa forma pega um elemeto e passoa pra dentro de uma variavel  pra que possa trata-la
