  /*  VARIABLES */
  var $button = document.getElementById('button');
  var $menu = document.getElementById('menu');
  var $link = document.querySelectorAll('.head__menu__list--item--link');

  /* SHOW MENU */
    $button.addEventListener('click', () => {
      $menu.classList.toggle('show');
    });

  /* HIDDEN MENU */
    $link.forEach(n => n.addEventListener('click', () => {
      $menu.classList.remove('show');
    }));