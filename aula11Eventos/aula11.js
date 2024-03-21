

function carregou(){
    console.log(" pagina carregada com sucesso")
}
function rolopagina(){
    console.log(' movimentou pagina');
}
function focou(){
    console.log("focou no titula ");
}
function focouNocampo() {
  console.log('focou no titula ');
}
let letras = window.document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('esta teclando '+ (letras.value.length + numLetras))
}
// na HTML usa o on aqui apenas o nome do event
let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2');
let botaoEnviar = document.querySelector('#btn3') 

let main = window.document.querySelector('.conteudo');

// OBS   nO HTML usa o onmouseover  aqui apenas o nome do evento mouseover no JS usa apenas o nome do evento


botao1.addEventListener('mouseover',function(){
main.style.background = 'red';
})

botao2.addEventListener("focusout", () =>{
    console.log(" foco no botao 2");
})
botaoEnviar.addEventListener("click",(event)=>{
//event.preventDefault()
console.log('pediu o envio');

})
