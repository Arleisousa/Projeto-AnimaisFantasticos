//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

/*const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});
*/

// Mostre no console cada parágrado do site

const p = document.querySelectorAll('p')

p.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

p.forEach((item) => {
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:


const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});


let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);

