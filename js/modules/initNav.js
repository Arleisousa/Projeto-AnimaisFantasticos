export default function iniciarNav() { 
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li') //selecionando os animais
    const tabContent = document.querySelectorAll('[data-tab="content"] section') //selecionando os conteudo
    
    if(tabMenu.length && tabContent.length ) { //verificando se os itens existem para fazer o script
    
        tabContent[0].classList.add('ativo') //colocando a class ativo para a pag ja começar com conteudo
    
        function activeTab (index) { 
            tabContent.forEach((section) => {
              section.classList.remove('ativo') //removendo a class ativo caso tente clicar em mais de 1 item
            })   
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime )  //fazendo uma function para pegar o index do conteudo e add classe ativo 
        }
    
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
              activeTab(index)
            }) //adicionando evento click para pegar o index do menu 
        })
      }
    }
    
    