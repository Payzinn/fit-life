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

  var heightValue = heightInput.value.trim();
  var weightValue = weightInput.value.trim();

  if (heightValue === '' || weightValue === '') {
      alert("Пожалуйста, заполните все поля.");
      return;
  }

  if (!isNumeric(heightValue) || !isNumeric(weightValue)) {
      alert("Пожалуйста, введите числовые значения для роста и веса.");
      return;
  }

  var height = parseInt(heightValue);
  var weight = parseInt(weightValue);

  if (height <= 0 || weight <= 0) {
      alert("Пожалуйста, укажите корректные положительные значения для роста и веса.");
      return;
  }

  var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

  alert("Ваш ИМТ: " + bmi);
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

  var calculateButton = document.querySelector('.btn-primary');
  calculateButton.addEventListener('click', calculateBMI);
  
  var openModalButton = document.querySelector('.btn-openModal');
  var modal = new bootstrap.Modal(document.getElementById('modal1'));
  
  openModalButton.addEventListener("click", function() {
    modal.show();
  });



  function submitForm() {
    var emailInput = document.getElementById('exampleFormControlInput1').value.trim();
    var titleInput = document.getElementById('exampleFormControlInput2').value.trim();
    var textInput = document.getElementById('exampleFormControlTextarea1').value.trim();

    if (emailInput === '' || titleInput === '' || textInput === '') {
        alert('Пожалуйста, заполните все обязательные поля.');
        return; 
    }

    if (!isValidEmail(emailInput)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return; 
    }

    alert('Материал отправлен на проверку, ожидайте!');
    document.getElementById('contentForm').reset(); 
}

function isValidEmail(email) {
    return email.includes('@');
}