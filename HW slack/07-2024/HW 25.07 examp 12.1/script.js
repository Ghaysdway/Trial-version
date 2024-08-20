//Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort,
 //чтобы отсортировать объекты по году от самого старого к самому новому.
const movies = [

    { title: "Inception", year: 2010 },

    { title: "The Dark Knight", year: 2008 },

    { title: "Interstellar", year: 2014 },

    { title: "The Matrix", year: 1999 }

];
function sortAgeMovie (ageArr) {
    return ageArr.sort((a,b) => a.year-b.year)
}
console.log(sortAgeMovie(movies));
//Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, 
//чтобы объединить все имена в одну строку через запятую.
const people = [

    { name: "Alice", age: 25 },

    { name: "Bob", age: 30 },

    { name: "Charlie", age: 22 }

];

// function personStr (arr) {
//     let newString = arr.reduce((a,b) =>  a.name  + b.name ,"");
// return newString;
// }
// console.log(personStr(people));

const sumString = (peopleArray) => {
    return  peopleArray.reduce((a,b) => {
        return a ? `${a} , ${b.name}`:b.name;}, "");
};
const sum = sumString(people);
console.log(sum);
