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

// Get all the dropdown items
// const dropdownItems = document.querySelectorAll('.dropdown__item');

// // Loop through each dropdown item
// dropdownItems.forEach((item) => {
//   // Get the dropdown menu
//   const dropdownMenu = item.querySelector('.dropdown__menu-item');

//   // Add event listeners for hover
//   item.addEventListener('mouseenter', () => {
//     dropdownMenu.style.display = 'block';
//   });
//   item.addEventListener('mouseleave', () => {
//     dropdownMenu.style.display = 'none';
//   });
// });