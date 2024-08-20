const myLogin = "ghays";
const myPassword = "svVxv2b9";
function validateLogin() {
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    const element = document.querySelector("#text");

    if (login === myLogin && password === myPassword) {
        element.textContent = "Вы успешно прошли регистрация";
        element.style.color = "green";
    } else {
        element.textContent = "Ошибка";
        element.style.color = "red";
    }
}
