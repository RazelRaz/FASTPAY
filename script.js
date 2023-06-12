// nav menu toggle scripts for small devices
var hamOpen = document.querySelector('.ham_open');
var dNone = document.querySelector('.d_none');
var smMenu = document.querySelector('.nav__area-sm-menu');
var smMenu_content_link = document.querySelector('.nav__area-sm-menu-content_links');

hamOpen.addEventListener('click', function() {
  toggleVisibility();
});

dNone.addEventListener('click', function() {
  toggleVisibility();
});

function toggleVisibility() {
  hamOpen.classList.toggle('d_none');
  dNone.classList.toggle('d_none');
  smMenu.classList.toggle('sm__menu-open');
}

smMenu_content_link.addEventListener('click', function() {
    smMenu.classList.remove('sm__menu-open');
})