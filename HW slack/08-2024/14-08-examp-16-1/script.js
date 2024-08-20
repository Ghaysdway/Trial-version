// HTML, CSS, JavaScript: домашние задание 16.1 morning
// Задание 1 

// Используя синтаксис try/catch, отправить запрос на 
// https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch 
// сделать вывод консоль сообщения об ошибке. Для проверки блока catch 
// сделать намеренную ошибку в url запроса.
async function fetchUserId(url) {
    try {
        const response = await fetch(url)
        const userId = response.json()
        console.log(userId);
    }catch (error) {
        console.error('ошибка в url',error)
    }
}
fetchUserId('https://jsonplaceholder.typicode.com posts?userId=1')
// Задание 2

// Написать функцию, которая делит одно число на другое,
//  обрабатывая возможные ошибки деления на ноль.
async function divide(a,b) {
    try {
        const data = a/b;
        console.log(data);
        if (b===0){
            throw new error ('error')
        }
        
    }catch (error) {
            console.error('делить на ноль нельзя', error);
            
    }
}
divide(6,0)