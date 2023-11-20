export default function scrollSuave() {
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