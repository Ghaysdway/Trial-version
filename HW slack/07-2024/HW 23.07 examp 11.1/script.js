// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, 
// в котором будет отображаться количество кликов.
// Используя JavaScript, при клике на кнопку увеличивайте счетчик 
// кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, 
// цвет фона должен изменяться на случайный цвет.
// При достижении 10 кликов выведите сообщение под блоком с 
// количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

const btn = document.querySelector('#btn');
const div_btn = document.querySelector('#div_btn');
const text = document.querySelector('#text');

let click = 0;

function myfuncolor() {
    const random = '12345ABCDE';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += random[Math.floor(Math.random() * 10)];
    }
    return color;
}
btn.addEventListener('click', () => {
    click++;
    div_btn.textContent = click;
    if (click % 5 === 0) {
        div_btn.style.backgroundColor = myfuncolor();
    }

    if (click === 10) {
        text.textContent = "success is 10 click!";
    }
});
