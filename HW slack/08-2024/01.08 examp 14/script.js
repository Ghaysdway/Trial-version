//После реализации основного функционала проекта “Регистрации и Авторизации с
//помощью localstorage” реализовать валидацию инпутов (Имя, Эмейл, Телефон, Пароль) с помощью JS.
// Имя {
// Минимум 2 символа
// Максимум 24 символа
// Только буквы
// }

// Эмейл {
// Наличие символа@
// Минимум 7 символов

// }
// Телефон {

// Первый символ +
// Максимум 12 чисел
// Минимум 8 чисел
// Только числа

// }
// Пароль {
// Минимум 5 символов
// максимум 26 символов
// }
    let form = document.getElementById('form')
function registForm(event) {
    event.preventDefault();
    // let form = document.getElementById('form');
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let numberTEl = document.getElementById("numberTel").value;
    let password = document.getElementById("password").value;
    

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let nameError = document.getElementById("nameError");
    let numberTElError = document.getElementById("numberTelError");

    let isSuccessfull = true;
    if (
        name.length <= 2 ||
        name.length >= 24 
    ) {
        nameError.textContent =
            "Минимум 2 символа,  Максимум 24 символа,  Только буквы";
        isSuccessfull = false;
    } else {
        nameError.textContent = "";
    }
    if (email.length <= 7 || !email.includes('@')) {
        emailError.textContent = "Наличие символа@, Минимум 7 символов";
        isSuccessfull = false;
    } else {
        emailError.textContent = "";
    }
    if (
        numberTEl.length < 8 ||
        numberTEl.length > 12
    ) {
        numberTElError.textContent =
            "Первый символ +, Максимум 12 чисел, Минимум 8 чисел, Только числа ";
        isSuccessfull = false;
    } else {
        numberTElError.textContent = "";
    }
    if (password.length <= 5 || password.length >= 26) {
        passwordError.textContent = "Минимум 5 символов, максимум 26 символов";
        isSuccessfull = false;
    } else {
        passwordError.textContent = "";
    }
    if (isSuccessfull) {
        var user = {
            name: name,
            email: email,
            phone: numberTEl,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(user));
        // p.textContent='Прверите данные';
    //     p.style.color='red';
    //     form.appendChild(p);
    // }
        alert("Вы успешно прошли регистрацию");
    
        form.reset();
    }
    // else{
    //     p.textContent='Прверите данные';
    //     p.style.color='red';
    //     form.appendChild(p);
    // }
}
form.addEventListener("submit", registForm);



