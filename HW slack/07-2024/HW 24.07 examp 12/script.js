//Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map,
// чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех,
// кто старше 18 лет, и "ребенок" для остальных.

const people = [

    { name: "Alice", age: 25 },

    { name: "Bob", age: 30 },

    { name: "Charlie", age: 15 }
];
 
// function ageOfpeople (arr) {
 
//     for ( let  i = 0 ; i < arr.length ; i++ ) {
//         if ( person.age > 18){
//             person.age = 'Возрослый';
//         } else {
//             person.age= 'Ребенок';
//         }
//     }
//     return arr.map(person => person.age)
// }
// console.log(ageOfpeople(people));

let newpeople = people.map(function(person){
    if (person.age > 18) {
return {...person,status: 'Возрослый'};
    }else {
        return {...person,statusd:'Ребенок'};
    }
})
console.log(newpeople);
    
//     for ( let  i = 0 ; i < people.length ; i++ ){
// if (person.age> 18){
//     person= 'возрослый';
// } else {
//     person = 'Ребенок';
// }} 
// })
// console.log(newpeople);



//Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, 
//чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

const movies = [

    { title: "Inception", rating: 4.9 },

    { title: "The Dark Knight", rating: 5.0 },

    { title: "Interstellar", rating: 4.8 },

    { title: "The Matrix", rating: 4.5 }
];
function funEvery (arr) {
    arr.forEach(element => {
        if (element.rating > 4) {
            console.log(element.title);
        }
    });
    return arr
}
console.log(funEvery(movies));

