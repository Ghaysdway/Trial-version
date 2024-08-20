// HTML, CSS, JavaScript: домашние задание 16 morning
// Задание 1

// Используя синтаксис async/await отправить get запрос на 
// https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

async function fetchTodos(url) {
    const response = await fetch(url)
    const todos = response.json()
    console.log(todos);
    
}
fetchTodos('https://jsonplaceholder.typicode.com/todos/1')


// Задание 2

// Используя синтаксис async/await отправить get запрос на 
// https://jsonplaceholder.typicode.com/posts. Ответ должен 
// содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

async function fetchPosts(url) {
    const response = await fetch(url)
    const posts = await response.json()
    console.log(posts);
    
}
fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=10')
