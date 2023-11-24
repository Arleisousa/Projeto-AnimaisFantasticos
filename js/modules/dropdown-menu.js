import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  
    dropDownMenus.forEach((menu) => {
      menu.addEventListener('touchstart', handleClick);
      menu.addEventListener('click', handleClick);
    });
  
    function handleClick(event) {
      event.preventDefault();
      this.classList.add('active');
      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
      });
    }
  
  }
  