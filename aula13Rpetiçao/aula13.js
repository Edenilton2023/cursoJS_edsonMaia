/* Aula 13 de js sobre estruturas de repetiçao 

 */
// let carros = [ 'Fusca', 'Brasilia ',' Gurgel']

 // for = para faça 
 // I interador, interaçao ou i
 let carros = ['fusca', 'brasilia ',' gurgel',"sandero"]

 for (let i = 0; i <= 5; i++) {
   window.document.write(i + ', ');
 }
 window.document.write(`<br></br>`);

  for (let e = 5; e >= 0; e--) {
    window.document.write(e + '. ');
    
  }
for (let i = 0; i  <= carros.length-1; i++) {
  document.write`<li>${carros[i]}</li>`;
}
 window.document.write(`<br></br>`);

let ano =['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
 
for(let i =0 ;i < ano.length; i++){
  window.document.write(`<li>${ano[i]+', '}</li>`);
}

//usando forEach

ano.forEach((ano,i)=>{
  document.write(`${i+1} ${ano} <br>`)
})