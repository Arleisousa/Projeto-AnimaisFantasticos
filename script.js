// Verifique a distância da primeira imagem
// em relação ao topo da página

//const img = document.querySelector('img')
//const imgTop = img.offsetTop

//console.log(imgTop)

// Retorne a soma da largura de todas as imagens
const fodase = document.querySelectorAll('img')
let soma = 0
fodase.forEach((img) => {
    soma = soma + img.offsetWidth

    console.log(soma)
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkWidth >= 48  && linkHeight >= 48) {
        console.log(link, 'possui acessibilidade')
    } else {
        console.log(link, 'não possui')
    }
})
 
console.log(links)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}
