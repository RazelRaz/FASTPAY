var hamOpen = document.querySelector('.ham_open');
var dNone = document.querySelector('.d_none');

hamOpen.addEventListener('click', function() {
  toggleVisibility();
});

dNone.addEventListener('click', function() {
  toggleVisibility();
});

function toggleVisibility() {
  hamOpen.classList.toggle('d_none');
  dNone.classList.toggle('d_none');
}