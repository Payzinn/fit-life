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
  var heightInput = document.querySelector('input[placeholder="Ваш рост (см)"]');
  var weightInput = document.querySelector('input[placeholder="Ваш вес (кг)"]');

  if (!heightInput.value || !weightInput.value) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  if (isNaN(heightInput.value) || isNaN(weightInput.value)) {
    alert("Введите только числа в поля роста и веса.");
    return;
  }

  var height = parseInt(heightInput.value);
  var weight = parseInt(weightInput.value);

  if (height < 10 || weight < 1) {
    alert("Введены некорректные данные. Проверьте поля роста и веса.");
    return;
  }

  var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

  alert("Ваш ИМТ: " + bmi);
}

var calculateButton = document.querySelector('.btn-primary');
calculateButton.addEventListener('click', calculateBMI);

var openModalButton = document.querySelector('.btn-openModal');
var modal = new bootstrap.Modal(document.getElementById('modal1'));

openModalButton.addEventListener("click", function() {
  modal.show();
}); 
