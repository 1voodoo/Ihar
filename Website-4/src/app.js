document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if(targetElement.closest('[data-parent]')) {
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector('.catalog-header')
    if (subMenu) {
      const activeLink = document.querySelector('._sub-menu-active');
      const activeBlock = document.querySelector('._sub-menu-open');
      
      if(activeLink && activeLink !== targetElement){
        activeLink.classList.remove('_sub-menu-active');
        activeBlock.classList.remove('_sub-menu-open');
      }
      targetElement.classList.toggle('_sub-menu-active');
      subMenu.classList.toggle('_sub-menu-open');

    } else {
      console.log('ой ой ой');
    }
    e.preventDefault();
  }
}

