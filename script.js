// add navegação

function iniciarNav() { 
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
  
  iniciarNav()
  
  
  //add abrir perguntas
  
  function initAccordion() { //apenas envolvendo em uma function
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  
  if(accordionList.length) {
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
  
  
  function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }
  
  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  }
  )
  }
  }
  
  initAccordion()
  
  //Scroll suave
  
  function scrollSuave() {
        const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  
        function scrollLink(event) {
          event.preventDefault()
          const href = event.currentTarget.getAttribute('href')
          const section = document.querySelector(href)
  
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
  
          /*
          FORMA ALTERNATIVA
  
          const topo = section.offsetTop;
          window.scrollTo({
            top: topo,
            behavior: 'smooth', 
          })
          */
        }
  
        linkInternos.forEach((link) => {
          link.addEventListener('click', scrollLink )
        })
  }
  
  //animação scroll
  
  
  function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  
  if(sections.length) {
        const windowMetade = window.innerHeight * 0.6
  
        function animaScroll() {
          sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            const sectionVisible = (sectionTop - windowMetade) < 0
  
            if(sectionVisible) {
              section.classList.add('ativo')
            }
          } ) 
        }
  
        animaScroll()
        window.addEventListener('scroll', animaScroll)
  }
  }
  
  initAnimacaoScroll()