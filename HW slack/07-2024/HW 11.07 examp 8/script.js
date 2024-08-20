
//1 . Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму,
// для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
//2 .Создайте массив numbers с несколькими числами.Напишите функцию calculateSum, которая принимает массив и
// возвращает сумму всех его элементов, не используя методы массивов.
//3 Создайте массив students с объектами студентов (имя, возраст, курс).Напишите функцию displayStudentInfo, 
//которая принимает студента и выводит его информацию в консоль.
function myfun (a,b){
    return a+b ;
}
console.log(myfun(4,6));

function myfun1 (a,b=3){
    return a+b;
}
console.log(myfun1(7,3));
/////////////////
const array = [2,4,3,5,1];
let sum = 0;
function calculeteSum(arr) {
    for (let i=0; i< arr.length; i++){
          sum += arr[i];
    }
    return sum;
}
console.log(calculeteSum(array));
///////////////////
const students = [
    { name: 'Andrii' , age:25 , course: 'math '},
    {name:'Sasha' , age: 27 , course:'physic'},
    {name:'John' , age:23 , course: 'literatur'},
]
function displayStudentInfo(arr) {
for (let i=0 ; i< arr.length ; i++){
      console.log(arr[i]);
}
}
displayStudentInfo(students);