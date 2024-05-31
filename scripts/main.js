const navbarToggler = document.querySelector('.navbar-toggler');

function toggleNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('collapse')) {
        navbarToggler.classList.remove('collapsed');
        navbarCollapse.classList.remove('collapse');
    } else {
        navbarToggler.classList.add('collapsed');
        navbarCollapse.classList.add('collapse');
    }

    navbarToggler.removeEventListener('click', toggleNavbar);
}

navbarToggler.addEventListener('click', toggleNavbar);

function calculateBMI() {
  var heightInput = document.querySelector('input[placeholder="Ваш рост"]');
  var weightInput = document.querySelector('input[placeholder="Ваш вес"]');

  if (heightInput.value && weightInput.value) {
    var height = parseInt(heightInput.value);
    var weight = parseInt(weightInput.value);

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

    alert("Ваш ИМТ: " + bmi);
  } else {
    alert("Пожалуйста, заполните все поля.");
  }
}

var calculateButton = document.querySelector('.btn-primary');
calculateButton.addEventListener('click', calculateBMI);

var openModalButton = document.querySelector('.btn-openModal');
var modal = new bootstrap.Modal(document.getElementById('modal1'));

openModalButton.addEventListener("click", function() {
  modal.show();
}); 
