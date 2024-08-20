//* Задание 1.
//Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей.
//На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email,
//address.city, phone и company.name. Стили добавляем произвольно. */

function userCards(user) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h3>${user.id}</h3>
  <p>${user.username}</p>
  <p>${user.email}</p>
  <p>${user.address.city}</p>
  <p>${user.phone}</p>
  <p>${user.company.name}</p>
  `;
  return card;
}
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(function(users) {
      const cards = document.getElementById("cards");
      users.forEach((user) => {
        const userCard = userCards(user);
        cards.appendChild(userCard);
      });
    });

