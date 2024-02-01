 



 


///informaçoes do lutador
   let infor = ' <h2>' + 'informações' + '</h2> ';
 let lutador = 'Vitor Belfot'
 let nocionalidade = 'Brasileiro'
 let idade = 44
 let peso = 106
 let altura = 1.83

 window.document.write(
   `<div class= "card"> 
   <h2>Lutador </h2>

 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprlQcYngruyZp5E2nSCbkXuXWtvWVqhcsEA&usqp=CAU" alt=" imagem Vitor Belfort">


 <p> ${lutador}</p>
 <p>${nocionalidade}</p>
 <p> ${idade} Anos </p>
 <p> ${peso} kg </p>
 <p>${altura} m</p>
  </div>`
 );



 //frase do dia 
  
   let fraseDoDia = ' <h2>' + 'Frase do dia ' + '</h2> ' + '<br>';
const dia = 10
const mes = 9
const ano = 2021
 const Frase =
   ' Seja curioso . leia de tudo tente coisas novas . O que as pessoas chamam de inteligencia se resume a curiosidade.' +
   '<br><br>';
const autor = 'Aaroa Swatz'




 window.document.write(`<div class='citaçao'>
 ${fraseDoDia} ${dia}/0${mes}/${ano}
 ${Frase}
 ${'<strong>' + autor + '<strong>'}

 </div>`);




 



// array meses do ano
  let meses = ' <h2>' + 'Array meses do Ano ' + '</h2> ';
let Meses = [
  ' Janeira ',
  ' Fervereiro ',
  ' Março <br>',
  ' Abril ',
  'Maio ',
  'junho <br>',
  ' julho ',
  ' Agosto ',
  'Setembro <br> ',
  'Outubro ',
  'Novembro ',
  ' Dezembro ',
];
window.document.write(`<div class='meses'><h2>${meses}</h2> <ul>`);

Meses.forEach(mes=>{
  window.document.write(`<li>${mes}</li>`)
});

window.document.write(`</ul>
</div>`);


// JOGO


 let Jogo = {
   titulo: ' League Of Legends - LOL ',
   Desevolvedor: ' Riot Games ',
   anoLançamento: 2009,
 };


 window.document.write(`<div class="jogo">
 <h2>  jogo </h2>
 <span>Titulo</span>
 <p>${Jogo.titulo}</P>
  <span>Desenvovedor</span>
 <p>${Jogo.Desevolvedor}</P>
  <span>Ano do Lançamento</span>
 <p>${Jogo.anoLançamento}</P>
 </div>
 `);





