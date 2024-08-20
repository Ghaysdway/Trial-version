// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, 
// используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.
const fruits = [
    {name: 'apple' , price: 20 },
    {name: 'orange' , price: 35},
    {name: 'mango' , price:65}
];
function hoghFruit (arr) {
    return arr.some(item => item.price > 50)
}
console.log(hoghFruit(fruits));