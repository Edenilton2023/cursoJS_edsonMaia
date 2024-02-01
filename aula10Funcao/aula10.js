

let titula = window.document.querySelector("h1")
titula.textContent = 'Funções no JS'
let box = document.querySelectorAll('box');



//let box = document.querySelectorAll('section')
// box[0].textContent = 'oi'
// box[1].textContent = 'oi'
// box[2].textContent = 'oi'
// box[3].textContent = 'oi';

// funçao sem paramentros e sem retorno (procedure) procedimento

function olaMUndo(){ document.write('ola mundo , sem retorno <br>')}
//executando a funçao 
olaMUndo()



// funçao sem paramentros e com retorno 
function olaMUndo2(){return 'ola mundo  sem retorno <br>'}
   //executando a funçao 
   document.write(olaMUndo2())

   let x = 5
   let y = 4
function somar(a, b) {
  document.write(a + b + '<br>');
}
let mensagem = '   Jesus Cristo meu salvador';
// funçaocom  paramentros e sem retorno 
function somar(a , b){  document.write(a + b + '<br>')}
//chamar a funçao = executar ela 
somar(2, 3); //5
somar(x, y); //9
somar((1, 2 ) + mensagem)




// funçao com paramentros e com retorno 
function somar2(c,d){
 return c + d
}
//chamar
console.log(somar2(3,5));//8
document.write(` <p>${somar2(y,x)}</p>`);//9
document.write('<p>'+somar2(y,7)+'</p>');//11




// a funçao anonima nao tem  nome pode ou nao ter paramnetros pode ou nao ter retorno
titula.addEventListener('click',function (){
  //document.write('clicou no titula')
  console.log('clicou no titula');
})




//Arrow function ES6 2015 em diante

titula.addEventListener('click', ()=> {
  //document.write('clicou no titula com Arrow function');
  console.log('clicou no titula com Arrow function');
});

// nao precisar uasr a pala function
//nao precisar usar a palavra return
//nao se usa nomes na funçao
// nao precisa colocar {} se for so uma instruçao

const olaMUndoArrow = () =>
  document.write(' ola mundo !!!!!!!  ' + mensagem + '<br><br>');

olaMUndoArrow()


//como foi escrito sem comando de saida
//nao ira aparecer  na tela a menos que eu use  comandos de saidas: document.write(olaMUndoArrow2()) ou console.log(olaMUndoArrow2())
const olaMUndoArrow2 = () => ' ola mundo cruel  ' + mensagem ;
document.write(olaMUndoArrow2());
